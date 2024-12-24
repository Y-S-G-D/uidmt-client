import React from 'react';
// import ThemeToggle from './ThemeToggle';
import MobileMenuButton from './mobile-menu-button';

interface DashboardHeaderProps {
  onMobileMenuClick: () => void;
}

const DashboardHeader = ({ onMobileMenuClick }: DashboardHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-base-300">
      <div className="flex items-center space-x-4">
        <MobileMenuButton onClick={onMobileMenuClick} />
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-content font-semibold">S</span>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-base-content">UIDMT LMS</h2>
          <p className="text-sm text-base-content/70">Student Portal</p>
        </div>
      </div>
      {/* <ThemeToggle /> */}
    </div>
  );
};

export default DashboardHeader;