"use client";

import { Star } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="flex items-center justify-center gap-2 mb-12">
      <span className="text-sm">TRUSTED BY</span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-green-500 text-green-500" />
        ))}
      </div>
      <span className="text-sm">5000+ STUDENTS</span>
    </div>
  );
}