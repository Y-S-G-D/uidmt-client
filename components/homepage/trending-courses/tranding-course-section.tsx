import CourseList from "./course-list"
import { Badge } from "@/components/ui/badge";

export default function TrendingCourseSection() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Trending Courses
          </h1>
          <p className="text-gray-400 text-lg">
            Check out most 🔥 courses in the market
          </p>
        </div>
        <CourseList />
      </div>
    </main>
  );
}