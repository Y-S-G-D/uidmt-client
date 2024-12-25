"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus } from "lucide-react";
import { CourseTable } from "@/components/admin/course-table";
import { ICourse } from "@/lib/constants";
import { useRouter } from "next/navigation";

const courses: ICourse[] = [
  {
    course_id: "101",
    title: "Python for Beginners",
    category: "Programming",
    enrollments: 370,
    completion_rate: 85,
    lessons: 12,
    duration: "8 hours",
    status: "Published"
  }
];


export default function AdminCourses() {
  const router = useRouter()

  return (
    <div>
      <div className="container mx-auto py-10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Courses</h1>
          <p className="text-muted-foreground mt-1">
            Manage and organize your course catalog
          </p>
        </div>
        <Button 
          onClick={() => {
            router.push("/admin/add-course")
          }}
          className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>
    {/* <PageHeader
      totalCourses={totalCourses}
      totalStudents={totalStudents}
      averageDuration={averageDuration}
    /> */}
    <CourseTable courses={courses} />
  </div>

      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Courses</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Course title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Course description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" placeholder="99.99" />
              </div>
              <Button className="w-full" onClick={() => setIsDialogOpen(false)}>
                Create Course
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div> */}

      {/* <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Web Development Basics</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>$49.99</TableCell>
              <TableCell>156</TableCell>
              <TableCell className="space-x-2">
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div> */}
    </div>
  );
}