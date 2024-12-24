"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/lib/constants";

export function SidebarContent() {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
            pathname === item.href
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
          )}
        >
          <item.icon className="w-5 h-5" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}