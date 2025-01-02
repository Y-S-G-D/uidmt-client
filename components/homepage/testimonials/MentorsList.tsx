"use client";

import Image from "next/image";
import { Shield } from "lucide-react";

interface Mentor {
  name: string;
  role: string;
  img: string;
}

const mentors: Mentor[] = [
  { name: "Lori Stevens", role: "Tutor of physic", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { name: "Billy Vasquez", role: "Tutor of chemistry", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
  // { name: "Larry Lawson", role: "Tutor of technology", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce" },
];

export function MentorsList() {
  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-5">
      <div className="flex items-center justify-between ">
        <h2 className="text-base font-bold">100+ Verified Mentors</h2>
        <div className="bg-yellow-400 p-2 rounded-full">
          <Shield className="w-6 h-6 text-gray-900" />
        </div>
      </div>
      
      <div className="">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="flex items-center space-x-3 p-2">
            <Image
              src={mentor.img}
              alt={mentor.name}
              width={30}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">{mentor.name}</p>
              <p className="text-xs text-gray-400">{mentor.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}