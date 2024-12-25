export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    studentId: string;
    department: string;
    enrollmentDate: string;
    status: "active" | "inactive" | "suspended";
    lastActive: string;
    completedCourses: number;
    currentGPA: number;
  }