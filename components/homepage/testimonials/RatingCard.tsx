"use client";

import { StarRating } from "./StarRating";

export function RatingCard() {
  return (
    <div className="bg-pink-600 bg-opacity-90 backdrop-blur-sm rounded-lg p-4 text-center relative overflow-hidden shadow-xl">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">4.5/5.0</h3>
        <div className="flex justify-center mb-2">
          <StarRating rating={4.5} size={4} />
        </div>
        <p className="text-sm text-blue-100">Based on 3265 ratings</p>
      </div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
    </div>
  );
}