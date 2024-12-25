"use client";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useChapterStore } from "@/app/stores/chapter-store";
import { ChapterListItem } from "./chapter-list-item";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { ChapterForm } from "./chapter-form";
import { Card, CardTitle,CardContent,CardDescription,CardHeader } from "../ui/card";

export function ChapterList() {
  const { chapters, reorderChapters, setOpen } = useChapterStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = chapters.findIndex((ch) => ch.id === active.id);
      const newIndex = chapters.findIndex((ch) => ch.id === over.id);
      reorderChapters(oldIndex, newIndex);
    }
  };

  return (
    <Card className="space-y-4">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col">
          <CardTitle >Course chapters</CardTitle>
          <p className="text-sm text-muted-foreground">
            Drag and drop to reorder chapters
          </p>
        </div>
        <Button 
          type="button"
          onClick={() => setOpen(true)} variant="secondary">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Chapter
        </Button>
      </CardHeader>


      <CardContent>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={chapters.map((ch) => ch.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {chapters.map((chapter) => (
              <ChapterListItem
                key={chapter.id}
                chapter={chapter}
              />
            ))}
          </div>
        </SortableContext>
        {/* <SortableContext
          items={chapters.map((ch) => ch.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {chapters.map((chapter) => (
              <ChapterListItem
                key={chapter.id}
                chapter={chapter}
              />
            ))}
          </div>
        </SortableContext> */}
      </DndContext>
      <ChapterForm />

      </CardContent>
      
    </Card>
  );
}