"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", value: 150 },
  { name: "Tue", value: 180 },
  { name: "Wed", value: 160 },
  { name: "Thu", value: 200 },
  { name: "Fri", value: 180 },
  { name: "Sat", value: 170 },
  { name: "Sun", value: 150 },
];

export function UserActivityChart() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">User Activity</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}