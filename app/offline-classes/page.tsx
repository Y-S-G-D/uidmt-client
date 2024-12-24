"use client";

// import { ClassCard } from "@/components/offline-classes/class-card";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { offlineClasses } from "@/lib/offline-classes";
import {  Calendar, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function OfflineClassesPage() {

  const router = useRouter();
  
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredClasses = offlineClasses.filter((classItem) => {
    const matchesSearch = classItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classItem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || classItem.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="max-w-7xl w-full  mx-auto px-4 md:px-10 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Offline Classes</h1>
        <p className="text-xl text-muted-foreground">
          Join our classroom training programs and learn directly from industry experts
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row  items-center justify-center gap-4 mb-8">
        {/* <div className="relative flex-1"> */}
          {/* <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /> */}
          {/* <Input
            placeholder="Search classes..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          /> */}
        {/* </div> */}
        <div className="flex items-center justify-center w-full gap-2">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((course, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {course.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                    <span>Starts {course.startDate}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                    <span>{course.schedule}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                    <span>{course.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                    <span>{course.batchSize} students</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {course.price}
                </span>
                <Button 
                  onClick={() => {
                    router.push(`/offline-classes/1`);
                  }}
                  className="px-4 py-2  transition-colors duration-300">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}

       {filteredClasses.length === 0 && (
        <div className="text-center py-12">
           <p className="text-xl text-muted-foreground">No classes found matching your criteria.</p>
         </div>
       )}
      
    </div>
  );
}