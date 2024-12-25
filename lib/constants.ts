import { LayoutDashboard, BookOpen, Users, BookText, Settings, LogOut } from "lucide-react";

export const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: BookOpen, label: "Courses", href: "/admin/courses" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
  { icon:LogOut , label:"Logout",href:"/"}
];

export interface ICourse {
  course_id: string;
  title: string;
  category: string;
  enrollments: number;
  completion_rate: number;
  lessons: number;
  duration: string;
  status: string;
}
