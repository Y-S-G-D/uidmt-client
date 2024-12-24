"use client";

import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", value: 85 },
  { name: "Week 2", value: 92 },
  { name: "Week 3", value: 78 },
  { name: "Week 4", value: 95 },
  { name: "Week 5", value: 88 },
];

export function CourseEnrollmentsChart() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Course Enrollments</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis 
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
            }}
          />
          <Bar
            dataKey="value"
            fill="hsl(var(--primary))"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}