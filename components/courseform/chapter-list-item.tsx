"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Chapter } from "@/types/chapter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GripVertical, Pencil } from "lucide-react";

interface ChapterListItemProps {
  chapter: Chapter;
}

export function ChapterListItem({ chapter }: ChapterListItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: chapter.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-x-2 bg-white dark:bg-slate-800 border rounded-lg p-3",
        "group hover:border-primary/50 transition-colors",
        isDragging && "opacity-50"
      )}
    >
      <button
        {...attributes}
        {...listeners}
        className="px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-slate-700 transition"
      >
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </button>
      
      <div className="flex-1">
        <div className="flex items-center gap-x-2">
          <h3 className="text-lg font-medium line-clamp-1">
            {chapter.title}
          </h3>
          <Badge variant={chapter.status === "published" ? "default" : "secondary"}>
            {chapter.status}
          </Badge>
          {chapter.isFreePreview && (
            <Badge variant="secondary">
              Free preview
            </Badge>
          )}
        </div>
        {chapter.description && (
          <p className="text-muted-foreground text-sm line-clamp-1">
            {chapter.description}
          </p>
        )}
      </div>

      <Button size="icon" variant="ghost">
        <Pencil className="h-4 w-4" />
      </Button>
    </div>
  );
}