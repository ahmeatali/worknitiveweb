
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'dark'
}) => {
  const color = variant === 'light' ? '#FFFFFF' : '#6a0dad';

  return (
    <div className={`inline-flex items-center gap-3 ${className} transition-all duration-300`}>
      {/* İkon Kısmı: İki mor form */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto shrink-0" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M35 15L20 85H40L55 15H35Z" 
          fill={color} 
        />
        <path 
          d="M75 15L60 85H80L95 15H75Z" 
          fill={color} 
        />
      </svg>

      {/* Metin Kısmı: WORKNITIVE */}
      <span 
        className="font-[900] tracking-tighter text-slate-900" 
        style={{ 
          color: color, 
          fontSize: '110%', // İkon yüksekliğine göre orantılı font boyutu
          lineHeight: '1'
        }}
      >
        WORKNITIVE
      </span>
    </div>
  );
};
