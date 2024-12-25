"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: "active" | "inactive" | "suspended";
};

const statusStyles = {
  active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  inactive: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  suspended: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge variant="secondary" className={cn("capitalize", statusStyles[status])}>
      {status}
    </Badge>
  );
}