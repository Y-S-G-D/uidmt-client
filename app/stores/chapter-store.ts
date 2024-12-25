"use client";

import { create } from "zustand";
import { Chapter } from "@/types/chapter";

interface ChapterState {
  chapters: Chapter[];
  isOpen: boolean;
  step: number;
  isFreePreview: boolean;
  title: string;
  description: string;
  videoUrl: string | null;
  setChapters: (chapters: Chapter[]) => void;
  addChapter: (chapter: Omit<Chapter, "id" | "position">) => void;
  reorderChapters: (startIndex: number, endIndex: number) => void;
  setOpen: (open: boolean) => void;
  setStep: (step: number) => void;
  setFreePreview: (isFree: boolean) => void;
  setTitle: (title: string) => void;
  setDescription: (desc: string) => void;
  setVideoUrl: (url: string | null) => void;
  reset: () => void;
}

export const useChapterStore = create<ChapterState>((set) => ({
  chapters: [],
  isOpen: false,
  step: 1,
  isFreePreview: false,
  title: "",
  description: "",
  videoUrl: null,
  setChapters: (chapters) => set({ chapters }),
  addChapter: (chapter) => set((state) => ({
    chapters: [...state.chapters, {
      ...chapter,
      id: crypto.randomUUID(),
      position: state.chapters.length
    }]
  })),
  reorderChapters: (startIndex, endIndex) => set((state) => {
    const newChapters = [...state.chapters];
    const [removed] = newChapters.splice(startIndex, 1);
    newChapters.splice(endIndex, 0, removed);
    return { chapters: newChapters.map((ch, idx) => ({ ...ch, position: idx })) };
  }),
  setOpen: (open) => set({ isOpen: open }),
  setStep: (step) => set({ step }),
  setFreePreview: (isFree) => set({ isFreePreview: isFree }),
  setTitle: (title) => set({ title }),
  setDescription: (desc) => set({ description: desc }),
  setVideoUrl: (url) => set({ videoUrl: url }),
  reset: () => set({
    step: 1,
    isFreePreview: false,
    title: "",
    description: "",
    videoUrl: null
  })
}));