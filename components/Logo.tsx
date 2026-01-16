
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", variant = 'dark' }) => {
  const color = variant === 'light' ? '#FFFFFF' : '#6a0dad';
  
  return (
    <div className={`inline-flex items-center ${className} transition-all duration-300`}>
      <svg 
        viewBox="0 0 360 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto overflow-visible"
      >
        {/* 'W' Icon - Orijinal görseldeki gibi kalın kapsül (pill) formunda paralel çizgiler */}
        <g transform="translate(10, 5)">
          <rect 
            x="0" 
            y="5" 
            width="18" 
            height="44" 
            rx="9" 
            fill={color} 
            transform="skewX(-18) translate(20, 0)"
          />
          <rect 
            x="32" 
            y="5" 
            width="18" 
            height="44" 
            rx="9" 
            fill={color} 
            transform="skewX(-18) translate(20, 0)"
          />
        </g>
        
        {/* 'ORKNITIVE' Text - Extra Bold/Black weight, dar harf arası */}
        <text 
          x="100" 
          y="48" 
          fill={color} 
          style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif", 
            fontWeight: 800, 
            fontSize: '46px',
            letterSpacing: '-0.04em'
          }}
        >
          ORKNITIVE
        </text>
      </svg>
    </div>
  );
};
