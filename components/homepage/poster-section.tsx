import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Poster() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certificate Card */}
          <Card className="bg-[#1a2332] border-none text-white overflow-hidden">
            <CardContent className="p-8 flex flex-col h-full relative">
              <div className="space-y-4 z-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Earn a Certificate
                </h2>
                <p className="text-lg text-gray-300">
                  Get the right professional certificate program for you.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  View Programs
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 w-48 h-48 md:w-64 md:h-64">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500"
                    alt="Professional studying"
                    className="object-cover w-full h-full opacity-50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Courses Card */}
          <Card className="bg-gray-800 border-none text-white overflow-hidden">
            <CardContent className="p-8 flex flex-col h-full relative">
              <div className="space-y-4 z-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Best Rated Courses
                </h2>
                <p className="text-lg text-gray-300">
                  Enroll now in the most popular and best rated courses.
                </p>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                  size="lg"
                >
                  View Courses
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 w-48 h-48 md:w-64 md:h-64">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500"
                    alt="Students learning"
                    className="object-cover w-full h-full opacity-50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
 