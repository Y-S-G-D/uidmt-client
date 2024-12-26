"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Search, MoreVertical, Plus, FileEdit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Mock data - replace with actual data fetching
const courses = [
  {
    id: 1,
    title: "Advanced Mathematics",
    instructor: "Dr. Sarah Johnson",
    duration: "3 months",
    capacity: 25,
    enrolled: 18,
    status: "active",
    startDate: "2024-04-01",
  },
  {
    id: 2,
    title: "Business Management Fundamentals",
    instructor: "Prof. Michael Chen",
    duration: "4 months",
    capacity: 30,
    enrolled: 30,
    status: "full",
    startDate: "2024-03-15",
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    instructor: "Emma Williams",
    duration: "2 months",
    capacity: 20,
    enrolled: 12,
    status: "active",
    startDate: "2024-05-01",
  },
];

export default function OfflineCoursesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      active: "bg-green-100 text-green-800",
      full: "bg-orange-100 text-orange-800",
      completed: "bg-gray-100 text-gray-800",
    };

    return (
      <Badge
        variant="secondary"
        className={statusStyles[status as keyof typeof statusStyles]}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <main className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Offline Courses</h1>
        <Button
          onClick={() => {
            router.push("/admin/add-offline-course");
          }}
          >
          <Plus className="mr-2 h-4 w-4" />
          Add New Course
        </Button>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Title</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>
                  {course.enrolled}/{course.capacity}
                </TableCell>
                <TableCell>{new Date(course.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{getStatusBadge(course.status)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">
                        <FileEdit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}