"use client";

import { Button } from "@/components/ui/button";

export default function HeroText() {
  return (
    <div className="flex-1 text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
        <span className="text-pink-400">Master</span> UI Design and
        Development with
        Modern <span className="text-yellow-400">Technologies</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl mb-8 md:mb-12 max-w-2xl">
        Your gateway to professional UI/UX design and development.
        From fundamentals to advanced real-world projects.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
        <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition text-lg md:text-xl px-8 md:px-12 py-4 md:py-6">
          Enroll Now
        </Button>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            Get Access to<br />
            Premium Courses
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            +50 <span className="text-base md:text-lg">Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}