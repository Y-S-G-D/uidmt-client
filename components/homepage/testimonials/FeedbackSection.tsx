"use client";

import { Button } from "@/components/ui/button";

export function FeedbackSection() {
  return (
    <div className="text-left space-y-6">
      <h2 className="text-5xl font-bold">
        Some valuable feedback<br />
        from our students
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl">
        Supposing so be resolving breakfast am or perfectly. It drew a hill from me. 
        Valley by oh twenty direct me so. Departure defective arranging rapturous 
        did believe him all had supported.
      </p>
      <Button 
        variant="default" 
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8"
      >
        View Reviews
      </Button>
    </div>
  );
}