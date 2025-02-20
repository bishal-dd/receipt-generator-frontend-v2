'use client';

import { useState, useRef, useEffect } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress'; // Import ShadCN Progress
import { getPresignedUrl } from '@/utils';
import Image from 'next/image';

interface FileUploadProps {
  width?: number | string;
  height?: number | string;
  defaultPreview?: string | null;
  uploadText?: string;
  userId: string;
  orginizationId: string;
  onUpload: (key: string) => void;
}

export function FileUpload({
  width = 400,
  height = 300,
  defaultPreview,
  uploadText,
  userId,
  orginizationId,
  onUpload,
}: FileUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPreviewUrl(defaultPreview || null);
  }, [defaultPreview]);

  const MAX_FILE_SIZE_MB = 5;

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setError(null);

      if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setError(`File size exceeds the limit of ${MAX_FILE_SIZE_MB} MB.`);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }

      try {
        setIsUploading(true);
        setUploadProgress(0);
        const sanitizedFileName = selectedFile.name.replace(/\s+/g, '_');
        const presignedUrl = await getPresignedUrl(
          sanitizedFileName,
          selectedFile.type,
          orginizationId,
          userId
        );

        const xhr = new XMLHttpRequest();
        xhr.open('PUT', presignedUrl, true);
        xhr.setRequestHeader('Content-Type', selectedFile.type);

        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const progress = (event.loaded / event.total) * 100;
            setUploadProgress(progress);
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            onUpload(`${orginizationId}/${userId}/${sanitizedFileName}`);
            const imageUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(imageUrl);
          } else {
            throw new Error(xhr.responseText);
          }
          setIsUploading(false);
        };

        xhr.onerror = () => {
          setIsUploading(false);
          throw new Error(xhr.responseText);
        };

        xhr.send(selectedFile);
      } catch (error) {
        setIsUploading(false);
        throw new Error('Error uploading file:', error as Error);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      fileInputRef.current!.files = event.dataTransfer.files;
      handleFileChange({
        target: { files: event.dataTransfer.files },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUpload('');
    setPreviewUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer relative overflow-hidden"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{ width, height }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          aria-label="File upload"
        />
        {previewUrl ? (
          <div className="relative w-full h-full">
            <Image
              src={previewUrl}
              alt="File preview"
              className="w-full h-full object-contain rounded-lg"
              width={Number(width)}
              height={Number(height)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <Button
                variant="destructive"
                size="sm"
                onClick={handleRemove}
                aria-label="Remove file"
                className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <Upload className="h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              {uploadText || 'Drag and drop or click to upload'}
            </p>
          </div>
        )}
        {isUploading && (
          <div className="absolute bottom-0 left-0 right-0 p-2">
            <Progress value={uploadProgress} className="h-2" />
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2" aria-live="assertive">
          {error}
        </p>
      )}
      <p className="text-gray-500 text-xs mt-2">
        500 x 500 recommended. Max size: {MAX_FILE_SIZE_MB} MB
      </p>
    </div>
  );
}
