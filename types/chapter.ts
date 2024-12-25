export interface Chapter {
  id: string;
  title: string;
  description: string;
  isFreePreview: boolean;
  videoUrl: string | null;
  position: number;
  status: "draft" | "published";
}