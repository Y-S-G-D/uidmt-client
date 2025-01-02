"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Menu content */}
      <div className="fixed right-0 top-0 h-full w-64 bg-black border-l border-gray-800 p-6 animate-in slide-in-from-right duration-300">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <NavLinks isMobile onLinkClick={onClose} />
          </div>
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition"
            onClick={onClose}
          >
            Start Learning <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded">PRO</span>
          </Button>
        </div>
      </div>
    </div>
  );
}