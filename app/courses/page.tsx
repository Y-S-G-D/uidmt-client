"use client";

import { CourseCard } from "@/components/courses/course-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const courses = [
  {
    id: "digital-marketing-mastery",
    title: "Digital Marketing Mastery",
    description: "Fundamentals of digital marketing, from SEO to social media marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=115&q=80",
    price: "₹14,999",
    duration: "12 weeks",
    level: "Beginner",
    category: "Digital Marketing",
    topics: ["SEO", "Social Media Marketing", "Content Marketing", "Email Marketing", "PPC Advertising"]
  },
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    description: "Learn to build modern web applications from front-end to back-end",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    price: "₹19,999",
    duration: "24 weeks",
    level: "Intermediate",
    category: "Web Development",
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Design", "API Development"]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Create and execute winning social media strategies",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "₹12,999",
    duration: "8 weeks",
    level: "Beginner",
    category: "Digital Marketing",
    topics: ["Platform Strategy", "Content Creation", "Analytics", "Paid Advertising", "Community Management"]
  }
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 md:px-10 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Online Courses</h1>
        <p className="text-xl text-muted-foreground">
          Join our LMS  training programs and learn online from industry experts
        </p>
      </div>      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div> */}
        <div className="flex gap-2 py-6 items-center justify-center w-full">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === "Digital Marketing" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Digital Marketing")}
          >
            Digital Marketing
          </Button>
          <Button
            variant={selectedCategory === "Web Development" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Web Development")}
          >
            Web Development
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
            price={course.price}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}