"use client";

import Image from "next/image";
import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  return (
    <div className="flex-1 relative w-full max-w-[600px] mx-auto lg:mx-0">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-full bg-blue-900/20">
        {/* Main image */}
        <Image
          src="/student.png"
          alt="Happy Student"
          width={400}
          height={400}
          className="object-cover lg:ml-20"
          priority
        />
        {/* Floating Angular icon */}
        <div className="absolute top-10 right-10 animate-float hidden sm:block">
          <Image src="/angular.svg" alt="Angular" width={60} height={60} />
        </div>

        {/* Floating React icon */}
        <div className="absolute bottom-20 left-0 animate-float-delay hidden sm:block">
          <Image src="/react.svg" alt="React" width={60} height={60} />
        </div>

        {/* Students counter card */}
        <FloatingCard
          className="top-20 right-0"
          bgColor="emerald"
        >
          <p className="text-sm text-emerald-300">Our daily new students</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500"
                />
              ))}
            </div>
            <span className="text-white font-bold">1K+</span>
          </div>
        </FloatingCard>

        {/* Congratulations card */}
        <FloatingCard
          className="bottom-20 right-10"
          bgColor="yellow"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              ✉️
            </div>
            <div>
              <p className="font-semibold">Congratulations</p>
              <p className="text-sm text-yellow-300">Your admission completed</p>
            </div>
          </div>
        </FloatingCard>
      </div>
    </div>
  );
}