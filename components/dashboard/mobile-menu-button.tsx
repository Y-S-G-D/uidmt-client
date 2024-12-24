import React from 'react';
import { Menu } from 'lucide-react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="lg:hidden p-2 rounded-lg hover:bg-base-300 transition-colors"
      aria-label="Toggle menu"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
};

export default MobileMenuButton;