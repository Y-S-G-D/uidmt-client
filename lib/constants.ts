import { LayoutDashboard, BookOpen, Users, BookText, Settings, LogOut, icons } from "lucide-react";
import { Label } from "recharts";

export const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: BookOpen, label: "Courses", href: "/admin/courses" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: BookOpen , label: 'Offline Courses', href: "/admin/offline-courses"},
  { icon: BookText, label: "Blogs", href: "/admin/blogs" },
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
