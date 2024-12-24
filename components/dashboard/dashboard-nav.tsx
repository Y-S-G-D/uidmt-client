import React from 'react';
import { LayoutDashboard, BookOpen, GraduationCap, Settings } from 'lucide-react';

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Progress", href: "/dashboard/progress", icon: GraduationCap },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const DashboardNav = ({ currentPath }: { currentPath: string }) => {
  return (
    <nav className="flex-1 px-2 space-y-1">
      {navigation.map((item) => {
        const isActive = currentPath === item.href;
        return (
          <a
            key={item.name}
            href={item.href}
            className={`
              group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
              ${isActive 
                ? "bg-primary text-primary-content" 
                : "hover:bg-base-300"
              }
            `}
          >
            <item.icon
              className={`mr-3 flex-shrink-0 h-5 w-5 transition-colors
                ${isActive ? "text-primary-content" : "text-base-content/70"}
              `}
            />
            {item.name}
          </a>
        );
      })}
    </nav>
  );
};

export default DashboardNav;