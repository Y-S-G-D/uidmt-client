"use client";

import { Button } from "@/components/ui/button";
import { useChapterStore } from "@/app/stores/chapter-store";
import { cn } from "@/lib/utils";
import { Upload, Video } from "lucide-react";
import { ChangeEvent } from "react";

export function VideoUpload() {
  const { 
    setOpen, 
    reset,
    title,
    description,
    isFreePreview,
    addChapter
  } = useChapterStore();

  const onClose = (): void => {
    setOpen(false);
    reset();
  };

  const onCreate = (): void => {
    addChapter({
      title,
      description,
      isFreePreview,
      videoUrl: null,
      status: "draft"
    });
    onClose();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle file upload logic here (e.g., upload to a storage server or service)
    }
  };

  return (
    <div 
      className="space-y-6" 
      onClick={(e) => e.stopPropagation()} // Prevent dialog from blocking interactions
    >
      <div className="flex items-center gap-x-2">
        <Video className="h-8 w-8 text-primary" />
        <h2 className="text-xl">Add a video</h2>
      </div>

      <div 
        className={cn(
          "rounded-lg border-2 border-dashed p-12 text-center",
          "hover:border-primary/50 transition-colors",
          "flex flex-col items-center justify-center"
        )}
      >
        <Upload className="h-10 w-10 text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground mb-2">
          Choose files or drag and drop
        </p>
        <p className="text-xs text-muted-foreground mb-4">
          Video (512GB)
        </p>
        <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
            id="file-input"
          />
         <label htmlFor="file-input">
         <div className="cursor-pointer py-2 px-4 rounded-lg border ">
            Choose file
          </div>       
           </label>
          
        
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onCreate}>
          Create
        </Button>
      </div>
    </div>
  );
}
