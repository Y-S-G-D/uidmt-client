"use client";
import { CourseCard } from "@/components/courses/course-card";
import Hero from "@/components/hero";
// import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/courses";
import { GraduationCap, BookOpen, Users, Star } from "lucide-react";
import LogoSlider from "@/components/logo-slider";
import Link from "next/link";
// import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Stats from "@/components/stats"; 
import BackgroundPattern from "@/components/background-pattern"; 
import WhatWeServeSection from "@/components/homepage/what-we-serve-section"; 
import TestimonialSection from "@/components/homepage/testimonial-section";
import Poster from "@/components/homepage/poster-section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });
  
  return (
    <section>
      <Navbar/>
      <div className="flex flex-col items-center box-border overflow-hidden">
      <Hero />
      <div className="max-w-7xl mx-auto  w-full bg-gradient-to-br dark:from-gray-900">
        {/* Why Choose Us Section */}
      <div className="relative h-max py-10 bg-gray-900 flex flex-col items-center justify-center ">
      <BackgroundPattern />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl  font-bold text-white text-center leading-tight">
          WHAT MAKES US
          <span className="ml-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">
            DIFFERENT
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 text-center  ">
          Experience the future of learning with our innovative platform
        </p>
        
        <Stats />
      </div>
    </div>
        
        {/* Features Section */}
        <WhatWeServeSection/>
        
        {/* Featured Courses Section */}
        <div className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center md:text-5xl font-bold text-gray-100 bg-clip-text uppercase mb-4">
            Featured 
            <span className="ml-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>

          <div className="my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {courses.map((course) => (
              <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          image={course.image}
          price={course.price}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <TestimonialSection />
        <LogoSlider/>
        <Poster/>

        {/* Call-to-Action Section */}
        <div className="my-12 bg-gradient-to-r dark:from-gray-900 py-12 text-center">
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
    <Footer/>

    </section>
      );
}
