
import React, { useState } from 'react';

// @ts-ignore
import logoUrl from '../logo.svg';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-20", 
  variant = 'dark'
}) => {
  const [imgError, setImgError] = useState(false);
  const color = variant === 'light' ? '#FFFFFF' : '#6a0dad';

  const FallbackLogo = (
    <div className={`inline-flex items-center ${className} transition-all duration-300`}>
      <svg 
        viewBox="0 0 360 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto overflow-visible"
      >
        <g transform="translate(10, 5)">
          <path d="M0 5h18l-5 44H-5L0 5z" fill={color} />
          <path d="M32 5h18l-5 44H27l5-44z" fill={color} />
        </g>
        <text 
          x="100" y="48" fill={color} 
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '46px', letterSpacing: '-0.04em' }}
        >
          WORKNITIVE
        </text>
      </svg>
    </div>
  );

  if (imgError) return FallbackLogo;

  // div wrapper'ı yerine doğrudan img boyutlandırmasını sağlıyoruz
  return (
    <img 
      src={logoUrl} 
      alt="Worknitive" 
      className={`${className} w-auto object-contain block transition-all duration-300`}
      onError={() => setImgError(true)}
    />
  );
};
