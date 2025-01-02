"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Laptop, Menu, X } from "lucide-react";
import NavLinks from "./nav/NavLinks";
import MobileMenu from "./nav/MobileMenu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Laptop className="h-6 w-6 md:h-8 md:w-8 text-pink-400" />
          <span className="text-lg md:text-xl font-semibold">UIDMT</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition">
            Start Learning <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded">PRO</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
}