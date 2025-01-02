"use client";

import { Monitor, Users, GraduationCap, Award } from "lucide-react";
import StatCard from "./StatCard";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      icon: Monitor,
      value: "10K",
      label: "Online Courses",
      color: "bg-amber-700 backdrop-blur-lg",
      delay: 0,
    },
    {
      icon: Users,
      value: "200+",
      label: "Expert Tutors",
      color: "bg-blue-700",
      delay: 0.2,
    },
    {
      icon: GraduationCap,
      value: "60K+",
      label: "Online Students",
      color: "bg-purple-700",
      delay: 0.4,
    },
    {
      icon: Award,
      value: "6K+",
      label: "Certified Courses",
      color: "bg-teal-700",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-16 px-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}