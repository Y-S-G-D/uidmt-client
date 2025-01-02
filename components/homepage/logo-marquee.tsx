"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  { name: "Figma", url: "/logo/figma-logo.png" },
  { name: "Acdora", url: "/logo/figma-logo.png" },
  { name: "Eagle", url: "/logo/figma-logo.png" },
  { name: "Miro", url: "/logo/figma-logo.png" },
  { name: "Dora AI", url: "/logo/figma-logo.png" },
  { name: "WIX", url: "/logo/figma-logo.png" },
  { name: "Uxcel", url: "/logo/figma-logo.png" }
];

export function LogoMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden  py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Trusted by leaders in the industry
        </h2>

      </div>
      
      <div 
        className="relative flex overflow-x-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex space-x-16 animate-scroll  ${isHovered ? "pause" : ""}` }>
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px] h-24  border shadow-2xl rounded-lg p-6"
            >
              <div className="relative w-32 h-12">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}