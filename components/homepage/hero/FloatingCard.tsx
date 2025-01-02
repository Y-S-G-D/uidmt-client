interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'emerald' | 'yellow';
}

export default function FloatingCard({ 
  children, 
  className = '', 
  bgColor = 'emerald' 
}: FloatingCardProps) {
  const bgColorClasses = {
    emerald: 'bg-emerald-400/20 border-emerald-500/20',
    yellow: 'bg-yellow-400/20 border-yellow-500/20'
  };

  return (
    <div className={`
      absolute hidden md:block
      backdrop-blur-sm p-4 rounded-2xl
      border ${bgColorClasses[bgColor]}
      ${className}
    `}>
      {children}
    </div>
  );
}