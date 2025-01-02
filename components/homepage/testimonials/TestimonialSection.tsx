"use client";

import { TestimonialCard } from "./TestimonialCard";
import { MentorsList } from "./MentorsList";
import { RatingCard } from "./RatingCard";
import { FeedbackSection } from "./FeedbackSection";

export function TestimonialSection() {
  return (
    <div className="relative">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
        <TestimonialCard
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          name="Carolyn Ortiz"
          quote="Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young."
          rating={4.5}
        />
        <div className="sm:col-span-2">
          <MentorsList />
        </div>
        <div className="sm:col-span-2">
          <RatingCard />
        </div>
        <div className="sm:col-span-2">
          <FeedbackSection />
        </div>
        <TestimonialCard
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          name="Dennis Barrett"
          quote="At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending."
          rating={4.5}
          imagePosition="right"
        />
      </div>

      {/* Desktop Layout */}
      <div className="grid grid-cols-2 gap-4">
      <div className="hidden lg:block relative min-h-[800px]">
        <div className="absolute left-0 top-36 max-w-md z-20">
          <TestimonialCard
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            name="Carolyn Ortiz"
            quote="Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young."
            rating={4.5}
          />
        </div>

        <div className="absolute top-0 right-0 max-w-sm z-10">
          <MentorsList />
        </div>

        <div className="absolute top-[60%] left-[20%] transform -translate-x-[20%] -translate-y-[60%] z-30">
          <RatingCard />
        </div>

        <div className="absolute bottom-48 right-0 max-w-xs">
          <TestimonialCard
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            name="Dennis Barrett"
            quote="At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending."
            rating={4.5}
            imagePosition="right"
          />
        </div>

        
      </div>
      <div className="">
          <FeedbackSection />
        </div>
      
      </div>
    </div>
  );
}