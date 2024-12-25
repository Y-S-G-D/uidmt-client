"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useChapterStore } from "@/app/stores/chapter-store";
import { ChapterFormHeader } from "./chapter-form-header";
import { ChapterFormContent } from "./chapter-form-content";

export function ChapterForm() {
  const { isOpen, setOpen, reset } = useChapterStore();

  const onOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 h-[90vh] sm:h-auto overflow-y-auto">
        <ChapterFormHeader />
        <ChapterFormContent />
      </DialogContent>
    </Dialog>
  );
}