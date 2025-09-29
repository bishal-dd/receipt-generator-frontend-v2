'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
  Upload,
  FileText,
  CheckCircle,
  XCircle,
  Loader2,
  ArrowLeft,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import { useDropzone } from 'react-dropzone';
import { useVerifyReceiptFile } from './data/hooks';

interface ValidationResult {
  isValid: boolean;
  details: string;
}

export default function ReceiptValidatePage() {
  const [file, setFile] = useState<File | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { mutateAsync: verifyFile } = useVerifyReceiptFile();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
      setValidationResult(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
  });

  const validateReceipt = async () => {
    if (!file) return;

    setIsValidating(true);
    setUploadProgress(0);

    try {
      const isVarified = await verifyFile(file);
      setValidationResult({
        isValid: isVarified.valid,
        details: isVarified.valid ? 'Receipt is valid' : 'Receipt is invalid',
      });
    } catch (err) {
      console.error(err);
      alert('Failed to verify receipt');
    } finally {
      setIsValidating(false);
    }
  };

  const resetValidation = () => {
    setFile(null);
    setValidationResult(null);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-green-600 hover:text-green-700"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              <h1 className="text-xl font-bold">Receipt Validator</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Validate Your Receipt</h1>
            <p className="text-gray-600 text-lg mb-6">
              Upload a PDF receipt to check if it is issued by BillsToTrack
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Receipt
                </CardTitle>
                <CardDescription>
                  Upload a PDF receipt to validate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!file ? (
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                      isDragActive
                        ? 'border-green-400 bg-green-50'
                        : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
                    }`}
                  >
                    <input {...getInputProps()} />
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    {isDragActive ? (
                      <p className="text-green-600">
                        Drop the PDF file here...
                      </p>
                    ) : (
                      <div>
                        <p className="text-gray-600 mb-2">
                          Drag & drop a PDF receipt here, or click to select
                        </p>
                        <p className="text-sm text-gray-400">
                          Only PDF files are supported
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <FileText className="h-8 w-8 text-red-600" />
                      <div className="flex-1">
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={resetValidation}
                        disabled={isValidating}
                      >
                        Remove
                      </Button>
                    </div>

                    {isValidating && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Validating receipt...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <Progress value={uploadProgress} className="w-full" />
                      </div>
                    )}

                    <Button
                      onClick={validateReceipt}
                      disabled={isValidating}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      {isValidating ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Validating...
                        </>
                      ) : (
                        <>
                          <Shield className="h-4 w-4 mr-2" />
                          Validate Receipt
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Validation Results
                </CardTitle>
                <CardDescription>Analysis of your receipt</CardDescription>
              </CardHeader>
              <CardContent>
                {!validationResult ? (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Upload a receipt to see validation results</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Overall Status */}
                    <Alert
                      className={
                        validationResult.isValid
                          ? 'border-green-200 bg-green-50'
                          : 'border-red-200 bg-red-50'
                      }
                    >
                      <div className="flex items-center gap-2">
                        {validationResult.isValid ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                        <AlertDescription className="font-medium">
                          {validationResult.isValid
                            ? 'Receipt is Valid'
                            : 'Receipt is invalid'}
                        </AlertDescription>
                      </div>
                    </Alert>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Ready to Go Digital?</h3>
                <p className="text-gray-600 mb-4">
                  Start creating compliant digital receipts with billstotrack
                </p>
                <Link href="/">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Get Started with billstotrack
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
