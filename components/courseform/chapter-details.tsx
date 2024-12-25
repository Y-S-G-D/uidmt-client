"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useChapterStore } from "@/app/stores/chapter-store";
import { Eye, LayoutGrid } from "lucide-react";

export function ChapterDetails() {
  const {
    title,
    description,
    isFreePreview,
    setTitle,
    setDescription,
    setFreePreview,
    setStep
  } = useChapterStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-x-2">
        <LayoutGrid className="h-8 w-8 text-primary" />
        <h2 className="text-xl">Customize your chapter</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Chapter title</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter chapter title"
            className="mt-2"
          />
        </div>
        <div>
          <Label>Chapter description</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter chapter description"
            className="mt-2"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-x-2">
            <Eye className="h-8 w-8 text-primary" />
            <h2 className="text-xl">Access Settings</h2>
          </div>
          <div className="flex items-center gap-x-2">
            <Switch
              checked={isFreePreview}
              onCheckedChange={setFreePreview}
            />
            <Label>Free Preview Chapter</Label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={() => setStep(2)}>
          Continue
        </Button>
      </div>
    </div>
  );
}