"use client";

import { BookOpen, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const pathname = usePathname();

  const SidebarContent = () => (
    <div className="space-y-2">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
            pathname === item.href
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
          )}
        >
          <item.icon className="w-5 h-5" />
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-background p-6">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-8 h-8" />
            <div>
              <h1 className="font-bold text-xl">UIDMT LMS</h1>
              <p className="text-sm text-muted-foreground">Admin Portal</p>
            </div>
          </div>
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r min-h-screen p-6">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="w-8 h-8" />
          <div>
            <h1 className="font-bold text-xl">UIDMT LMS</h1>
            <p className="text-sm text-muted-foreground">Admin Portal</p>
          </div>
        </div>
        <SidebarContent />
      </aside>
    </>
  );
}