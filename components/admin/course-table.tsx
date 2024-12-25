"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2, Users, BookOpen, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ICourse } from "@/lib/constants";

interface CourseTableProps {
  courses: ICourse[];
}

export function CourseTable({ courses }: CourseTableProps) {
  return (
    <div className="w-full overflow-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[250px] font-semibold">Course</TableHead>
            <TableHead className="min-w-[120px] font-semibold">Category</TableHead>
            <TableHead className="min-w-[100px] font-semibold">Enrollments</TableHead>
            <TableHead className="min-w-[120px] font-semibold">Duration</TableHead>
            <TableHead className="min-w-[100px] font-semibold">Status</TableHead>
            <TableHead className="min-w-[120px] text-right font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.course_id}>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span>{course.title}</span>
                  <span className="text-sm text-muted-foreground">{course.lessons} lessons</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {course.category}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{course.enrollments}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={course.status === "Published" ? "default" : "destructive"}
                >
                  {course.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <TooltipProvider>
                  <div className="flex justify-end gap-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>View course</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Edit course</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Delete course</TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}