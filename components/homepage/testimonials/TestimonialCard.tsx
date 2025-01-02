"use client";

import Image from "next/image";
import { StarRating } from "./StarRating";

interface TestimonialCardProps {
  image: string;
  name: string;
  quote: string;
  rating: number;
  className?: string;
  imagePosition?: "top" | "right";
}

export function TestimonialCard({
  image,
  name,
  quote,
  rating,
  className = "",
  imagePosition = "top"
}: TestimonialCardProps) {
  if (imagePosition === "top" || imagePosition=== "right") {
    return (
      <div className={`bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 relative mt-16 ${className}`}>
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <Image
            src={image}
            alt={name}
            width={70}
            height={70}
            className="rounded-full border-4 border-gray-800 shadow-xl"
          />
        </div>
        <div className="pt-8">
          <blockquote className="text-center text-sm text-gray-300 mb-4">"{quote}"</blockquote>
          <div className="flex justify-center mb-2">
            <StarRating rating={rating} />
          </div>
          <p className="text-center text-xs font-semibold">{name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 ${className}`}>
      <div className="flex justify-end mb-4">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full shadow-xl"
        />
      </div>
      <blockquote className="text-right text-gray-300 mb-4">"{quote}"</blockquote>
      <div className="flex justify-end mb-2">
        <StarRating rating={rating} />
      </div>
      <p className="text-right font-semibold">{name}</p>
    </div>
  );
}