"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export function StarRating({ rating, size = 5 }: StarRatingProps) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-${size} h-${size} ${
            i < Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-yellow-400/50 text-yellow-400"
          }`}
        />
      ))}
    </div>
  );
}