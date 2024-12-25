"use client";

import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";

export function ChapterFormTrigger() {
  return (
    <DialogTrigger asChild>
      <Button variant="outline">
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Chapter
      </Button>
    </DialogTrigger>
  );
}