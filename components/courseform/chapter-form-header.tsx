"use client";

import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useChapterStore } from "@/app/stores/chapter-store";
import { ArrowLeft } from "lucide-react";

export function ChapterFormHeader() {
  const { step, setStep } = useChapterStore();

  return (
    <div className="flex items-center p-6 border-b">
      {step === 2 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStep(1)}
          className="mr-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}
      <DialogHeader>
        <DialogTitle>
          {step === 1 ? "Chapter creation" : "Add a video"}
        </DialogTitle>
        <p className="text-sm text-muted-foreground">
          Complete all fields ({step}/2)
        </p>
      </DialogHeader>
    </div>
  );
}