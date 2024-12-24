import { LayoutDashboard, BookOpen, Users, BookText, Settings } from "lucide-react";

export const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: BookOpen, label: "Courses", href: "/admin/courses" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: BookText, label: "Lessons", href: "/admin/lessons" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];