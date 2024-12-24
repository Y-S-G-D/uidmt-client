'use client'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, Book } from "lucide-react";
// import { CourseCard } from "@/components/courses/course-card";
import AssignmentChart from "@/components/dashboard/assignment-chart";
import ProgressChart from "@/components/dashboard/progress-chart";
import QuickActions from "@/components/dashboard/quick-actions";
import StatCard from "@/components/dashboard/stat-card";
import SubjectPerformance from "@/components/dashboard/subject-performance";
import UpcomingDeadlines from "@/components/dashboard/upcoming-deadlines";

export default function StudentDashboard() {
  return (
    <div>
      {/* <div className="ml-64 p-8"> */}
        <div className="flex w-full justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-base-content">Welcome back, Student!</h1>
          <p className="text-base-content/70 mt-2">Track your progress and stay up to date with your courses.</p>
        </div>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Enrolled Courses" value={4} subtitle="2 in progress" Icon={Book} />
          <StatCard title="Learning Hours" value="24.5" subtitle="+2.5 this week" Icon={Clock} />
          <StatCard title="Certificates" value={2} subtitle="1 in progress" Icon={Award} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ProgressChart />
          <AssignmentChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <SubjectPerformance />
          </div>
          <div className="space-y-6">
            <QuickActions />
            <UpcomingDeadlines />
          </div>
        </div>

        {/* <h2 className="text-2xl font-bold mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div> */}
      {/* </div> */}

      {/* <h1 className="text-3xl font-bold mb-8">My Learning Dashboard</h1> */}

     
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">2 in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5</div>
            <p className="text-xs text-muted-foreground">+2.5 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 in progress</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Continue Learning</h2>
      <div className="grid gap-4 md:grid-cols-2">
      </div> */}
    </div>
  );
}