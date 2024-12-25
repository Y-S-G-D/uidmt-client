"use client";

import { useChapterStore } from "@/app/stores/chapter-store";
import { ChapterDetails } from "./chapter-details";
import { VideoUpload } from "./video-upload";

export function ChapterFormContent() {
  const { step } = useChapterStore();

  return (
    <div className="p-6">
      {step === 1 ? <ChapterDetails /> : <VideoUpload />}
    </div>
  );
}