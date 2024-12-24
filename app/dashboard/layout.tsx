"use client";

import { usePathname } from "next/navigation";
// import Link from "next/link";
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap,
  Settings
} from "lucide-react";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardNav from "@/components/dashboard/dashboard-nav";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
    { name: "Progress", href: "/dashboard/progress", icon: GraduationCap },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = "/dashboard";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div className="flex h-screen bg-base-100">
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        flex flex-col w-72 bg-base-200 border-r border-base-300
      `}>
        <DashboardHeader onMobileMenuClick={toggleMobileMenu} />
        <div className="flex-1 overflow-y-auto py-4">
          <DashboardNav currentPath={currentPath} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:pl-0">
        {/* Mobile header */}
        <div className="lg:hidden">
          <DashboardHeader onMobileMenuClick={toggleMobileMenu} />
        </div>  

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 pt-20 lg:pt-8">
          {children}
        </main>
      </div>
    </div>
    // <div className="flex h-screen">
    //   <div className="hidden md:flex md:w-64 md:flex-col">
    //     <div className="flex flex-col flex-grow border-r bg-card pt-5">
    //       <div className="flex items-center flex-shrink-0 px-4">
    //         <h2 className="text-lg font-semibold">Student Dashboard</h2>
    //       </div>
    //       <div className="mt-5 flex-grow flex flex-col">
    //         <nav className="flex-1 px-2 space-y-1">
    //           {navigation.map((item) => {
    //             const isActive = pathname === item.href;
    //             return (
    //               <Link
    //                 key={item.name}
    //                 href={item.href}
    //                 className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
    //                   isActive
    //                     ? "bg-primary text-primary-foreground"
    //                     : "text-muted-foreground hover:bg-muted"
    //                 }`}
    //               >
    //                 <item.icon
    //                   className={`mr-3 flex-shrink-0 h-6 w-6 ${
    //                     isActive ? "text-primary-foreground" : "text-muted-foreground"
    //                   }`}
    //                 />
    //                 {item.name}
    //               </Link>
    //             );
    //           })}
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col flex-1">
    //     <main className="flex-1 overflow-y-auto p-8">
    //       {children}
    //     </main>
    //   </div>
    // </div>
  );
}

