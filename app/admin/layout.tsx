"use client";

import { ThemeProvider } from "next-themes";
import { MobileSidebar } from "@/components/admin/mobile-sidebar";
import { DesktopSidebar } from "@/components/admin/desktop-sidebar"
import { Header } from "@/components/admin/header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4">
          <MobileSidebar />
        </div>
      </div>

      <div className="flex h-screen">
        {/* Desktop Sidebar - Fixed */}
        <div className="hidden lg:block">
          <DesktopSidebar />
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-8 pt-20 lg:pt-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}