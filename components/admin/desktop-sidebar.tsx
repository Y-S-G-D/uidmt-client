"use client";

import { BookOpen } from "lucide-react";
import { SidebarContent } from "./sidebar-content"

export function DesktopSidebar() {
  return (
    <aside className="w-64 border-r h-screen sticky top-0 p-6 bg-background">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-8 h-8" />
        <div>
          <h2 className="font-bold text-xl">UIDMT LMS</h2>
          <p className="text-sm text-muted-foreground">Admin Portal</p>
        </div>
      </div>
      <SidebarContent />
    </aside>
  );
}