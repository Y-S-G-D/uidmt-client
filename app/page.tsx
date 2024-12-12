"use client";
import Hero from "@/components/hero";
// import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Star } from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  return (
    <div className="flex flex-col items-center box-border overflow-x-hidden">
      <Hero />
      <div className="max-w-7xl mx-auto ">
        {/* Why Choose Us Section */}
        <div ref={ref} className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-5xl font-bold text-primary">
                {inView ? (
                  <CountUp start={0} end={50000} duration={3} separator="," />
                ) : (
                  0
                )}
                +
              </h3>
              <p className="text-muted-foreground">Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-primary">
                {inView ? (
                  <CountUp start={0} end={500} duration={3} separator="," />
                ) : (
                  0
                )}
                +
              </h3>
              <p className="text-muted-foreground">Courses Available</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-primary">
                {inView ? (
                  <CountUp start={0} end={98} duration={3} suffix="%" />
                ) : (
                  "0%"
                )}
              </h3>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-primary">
                {inView ? (
                  <CountUp start={0} end={100} duration={3} separator="," />
                ) : (
                  0
                )}
                +
              </h3>
              <p className="text-muted-foreground">Expert Instructors</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
            <GraduationCap className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-center text-muted-foreground">
              Learn from industry professionals and experienced educators.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
            <BookOpen className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
            <p className="text-center text-muted-foreground">
              Access carefully curated courses designed for effective learning.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
            <Users className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-center text-muted-foreground">
              Join a community of learners and grow together.
            </p>
          </div>
        </div>

       {/* Featured Courses Section */}
<div className="mt-24">
  <h2 className="text-3xl font-bold text-center mb-8">
    Featured Courses
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array(3)
      .fill(null)
      .map((_, i) => (
        <div
          key={i}
          className="relative bg-card p-1 rounded-lg"
        >
          <div className="border border-gray-300  p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Course Title {i + 1}
            </h3>
            <p className="text-muted-foreground mb-4">
              A brief description of the course content and what students
              will learn.
            </p>
            <Link href="/courses/details">
              <Button size="sm">Learn More</Button>
            </Link>
          </div>
          <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
        </div>
      ))}
  </div>
</div>


        {/* Testimonials Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <div key={i} className=" bg-card border border-gray-300  p-6 rounded-lg shadow-sm">
                  <p className="text-muted-foreground mb-4">
                    &quot;This platform has completely changed how I approach
                    learning. The instructors are amazing!&quot;
                  </p>
                  <div className="flex items-center justify-center">
                    <Star className="text-yellow-500 h-5 w-5" />
                    <Star className="text-yellow-500 h-5 w-5" />
                    <Star className="text-yellow-500 h-5 w-5" />
                    <Star className="text-yellow-500 h-5 w-5" />
                    <Star className="text-yellow-500 h-5 w-5" />
                  </div>
                  <p className="mt-2 font-semibold">- Student Name</p>
                </div>
              ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-24 bg-gradient-to-r dark:from-gray-900 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join thousands of students achieving their goals with our platform.
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-white text-blue-600">
              Sign Up Now
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
