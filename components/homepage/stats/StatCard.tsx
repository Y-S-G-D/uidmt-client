"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
  delay: number;
}

export default function StatCard({ icon: Icon, value, label, color, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-xl p-8 ${color}  shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-white/10 p-3">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="text-3xl font-bold text-white"
          >
            {value}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            className="text-sm text-white/80"
          >
            {label}
          </motion.p>
        </div>
      </div>
      <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-white/5" />
    </motion.div>
  );
}