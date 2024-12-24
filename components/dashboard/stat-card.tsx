import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  Icon: LucideIcon;
}

const StatCard = ({ title, value, subtitle, Icon }: StatCardProps) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-base-content">{title}</h2>
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <p className="text-4xl font-bold text-base-content">{value}</p>
        <p className="text-sm text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;