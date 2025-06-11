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
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
  Upload,
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Loader2,
  ArrowLeft,
  Shield,
  Calendar,
  DollarSign,
  Building,
  Hash,
} from 'lucide-react';
import Link from 'next/link';
import { useDropzone } from 'react-dropzone';

interface ValidationResult {
  isValid: boolean;
  confidence: number;
  issues: string[];
  details: {
    businessName?: string;
    date?: string;
    amount?: string;
    taxAmount?: string;
    receiptNumber?: string;
    customerInfo?: string;
  };
  recommendations: string[];
}

export default function ReceiptValidationPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

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

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate API call with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setUploadProgress(100);
    clearInterval(progressInterval);

    // Mock validation result - in real implementation, this would call your API
    const mockResult: ValidationResult = {
      isValid: Math.random() > 0.3, // 70% chance of being valid
      confidence: Math.floor(Math.random() * 30) + 70, // 70-100% confidence
      issues: [],
      details: {
        businessName: 'Sample Business Inc.',
        date: '2024-01-15',
        amount: '$45.99',
        taxAmount: '$3.68',
        receiptNumber: 'RCP-2024-001234',
        customerInfo: 'John Doe',
      },
      recommendations: [],
    };

    // Add issues based on validation result
    if (!mockResult.isValid) {
      const possibleIssues = [
        'Missing required tax information',
        'Invalid date format detected',
        'Business registration number not found',
        'Incomplete transaction details',
        'Suspicious formatting patterns',
        'Missing digital signature',
      ];
      mockResult.issues = possibleIssues.slice(
        0,
        Math.floor(Math.random() * 3) + 1
      );

      mockResult.recommendations = [
        'Ensure all required fields are properly filled',
        'Verify business registration details',
        'Use standardized receipt templates',
        'Include proper tax calculations',
      ];
    } else {
      mockResult.recommendations = [
        'Receipt meets all compliance requirements',
        'Consider adding QR code for enhanced verification',
        'Digital format reduces environmental impact',
      ];
    }

    setValidationResult(mockResult);
    setIsValidating(false);
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
              Upload a PDF receipt to check if it meets compliance standards and
              contains all required information.
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
                  Upload a PDF receipt to validate its compliance and
                  completeness
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
                <CardDescription>
                  Detailed analysis of your receipt&apos;s compliance and
                  completeness
                </CardDescription>
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
                            : 'Receipt has Issues'}
                        </AlertDescription>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Confidence:</span>
                          <Badge
                            variant={
                              validationResult.confidence > 80
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {validationResult.confidence}%
                          </Badge>
                        </div>
                      </div>
                    </Alert>

                    {/* Receipt Details */}
                    <div className="space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Receipt Details
                      </h4>
                      <div className="grid gap-3">
                        {validationResult.details.businessName && (
                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">Business:</span>
                            <span className="font-medium">
                              {validationResult.details.businessName}
                            </span>
                          </div>
                        )}
                        {validationResult.details.date && (
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">
                              {validationResult.details.date}
                            </span>
                          </div>
                        )}
                        {validationResult.details.amount && (
                          <div className="flex items-center gap-2 text-sm">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">Amount:</span>
                            <span className="font-medium">
                              {validationResult.details.amount}
                            </span>
                          </div>
                        )}
                        {validationResult.details.receiptNumber && (
                          <div className="flex items-center gap-2 text-sm">
                            <Hash className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">Receipt #:</span>
                            <span className="font-medium">
                              {validationResult.details.receiptNumber}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Issues */}
                    {validationResult.issues.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-medium flex items-center gap-2 text-red-600">
                          <AlertTriangle className="h-4 w-4" />
                          Issues Found
                        </h4>
                        <ul className="space-y-2">
                          {validationResult.issues.map((issue, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Recommendations */}
                    <div className="space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {validationResult.recommendations.map((rec, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              Why Use Our Receipt Validator?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-600" />
                  <CardTitle>Compliance Check</CardTitle>
                  <CardDescription>
                    Ensures your receipts meet tax and legal requirements
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                  <CardTitle>Completeness Verification</CardTitle>
                  <CardDescription>
                    Validates all required fields and information are present
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-purple-600" />
                  <CardTitle>Format Analysis</CardTitle>
                  <CardDescription>
                    Checks document structure and formatting standards
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
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
