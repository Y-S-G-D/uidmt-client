"use client";

import { Clock, BookOpen, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Course } from "./course-data"

export default function TrendingCourseCard({ course }: { course: Course }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card 
        className="flex-none w-[300px] md:w-[350px] bg-[#2A2A2A] text-white hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[250px]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover rounded-t-lg"
          />
          {course.price === 0 && (
            <Badge className="absolute top-4 right-4 bg-white text-black">
              Free
            </Badge>
          )}
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-4">
            <Badge variant="secondary" className="text-blue-400 bg-blue-400/10">
              {course.category}
            </Badge>
            <Badge variant="secondary" className="bg-gray-700">
              {course.level}
            </Badge>
            <Button variant="ghost" size="icon" className="ml-auto">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
          <h3 className="text-xl font-semibold mb-4 line-clamp-2">{course.title}</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">★</span>
            <span>{course.rating}</span>
            <span className="text-gray-400">({course.reviews})</span>
            <span className="text-gray-400">(Student)</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 mb-6">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{course.lectures} lectures</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={course.instructor.image}
                alt={course.instructor.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>{course.instructor.name}</span>
            </div>
            <div className="ml-auto">
              {course.price === 0 ? (
                <span className="text-emerald-400 text-xl font-bold">Free</span>
              ) : (
                <motion.div
                  initial={false}
                  animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isHovered ? (
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Add to cart
                    </Button>
                  ) : (
                    <span className="text-emerald-400 text-xl font-bold">
                      ${course.price}
                    </span>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}