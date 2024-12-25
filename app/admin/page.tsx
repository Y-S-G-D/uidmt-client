"use client";

import { BookOpen, Users2, BookText } from "lucide-react";
import { StatCard } from "@/components/admin/stats/stat-card"
import { UserActivityChart } from "@/components/admin/charts/user-activity-chart"
import { CourseEnrollmentsChart } from "@/components/admin/charts/course-enrollments-chart"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-muted-foreground text-lg">
          Here&apos;s what&apos;s happening with your LMS today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={BookOpen}
          label="Total Courses"
          value="24"
          subtext="4 pending approval"
        />
        <StatCard
          icon={Users2}
          label="Active Users"
          value="1,234"
          subtext="+12% this month"
        />
        <StatCard
          icon={BookText}
          label="Total Lessons"
          value="156"
          subtext="across all courses"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserActivityChart />
        <CourseEnrollmentsChart />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}