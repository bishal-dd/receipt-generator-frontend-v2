'use client';

import { Button } from '@/components/ui/button';
import { SquarePlay } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Loader } from '@/components/utils';

export default function DemoVideo() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
    setIsVideoLoading(true); // Reset loading state when the dialog opens
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="lg"
        onClick={handleDialogOpen} // Open dialog on click
      >
        <SquarePlay className="mr-2 h-4 w-4" />
        Watch Demo
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Watch Demo</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-full md:h-96">
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="loader" />
                <Loader />
              </div>
            )}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sFm1EwpYI_Q"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsVideoLoading(false)} // Hide loading state when the video loads
            ></iframe>
          </div>
          <Button
            variant="outline"
            className="mt-4"
            onClick={handleDialogClose}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
