"use client";

import { Button } from "@/components/ui/button";
import HeroImage from "./hero/HeroImage";
import HeroText from "./hero/HeroText";

export default function HeroContent() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-4 lg:px-0">
      <HeroText />
      <HeroImage />
    </div>
  );
}