import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext: string;
}

export function StatCard({ icon: Icon, label, value, subtext }: StatCardProps) {
  return (
    <Card className="p-6 dark:bg-base-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-muted-foreground mb-1">{label}</p>
          <h3 className="text-3xl font-bold mb-1">{value}</h3>
          <p className="text-sm text-muted-foreground">{subtext}</p>
        </div>
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </Card>
  );
}