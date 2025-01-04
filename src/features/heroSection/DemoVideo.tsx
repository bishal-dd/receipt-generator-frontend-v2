"use client";

import { Button } from "@/components/ui/button";
import { SquarePlay } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
export default function DemoVideo() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

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
          <div className="w-full h-full md:h-96">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lPUywpVqiXY"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
