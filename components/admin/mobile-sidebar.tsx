"use client";

import { BookOpen, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SidebarContent } from "./sidebar-content"

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-6">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="w-8 h-8" />
          <div>
            <h2 className="font-bold text-xl">UIDMT LMS</h2>
            <p className="text-sm text-muted-foreground">Admin Portal</p>
          </div>
        </div>
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}