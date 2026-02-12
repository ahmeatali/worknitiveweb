
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Worknitive Orijinal Logo Bileşeni
 * Sadece kullanıcının sağladığı '/logo.svg' dosyasını kullanır.
 */
export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'dark'
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span className={`font-black tracking-tighter uppercase ${className.includes('h-6') ? 'text-sm' : 'text-xl'} ${variant === 'light' ? 'text-white' : 'text-worknitive'}`}>
        WORKNITIVE
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center justify-start ${className} transition-all duration-300`}>
      <img 
        src="/logo.svg" 
        alt="Worknitive" 
        className={`h-full w-auto object-contain block ${variant === 'light' ? 'brightness-0 invert' : ''}`}
        onError={() => setError(true)}
      />
    </div>
  );
};
