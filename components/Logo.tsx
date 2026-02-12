
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  src?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'dark', 
  src = "/logo.svg" // Varsayılan olarak root'taki logo.svg'yi hedefle
}) => {
  const color = variant === 'light' ? '#FFFFFF' : '#6a0dad';

  // Eğer bir src varsa (varsayılan olarak /logo.svg geliyor), img tag'i ile göster
  // onError ile eğer dosya yoksa kod tabanlı logoya (fallback) geçiş yapar
  return (
    <div className={`inline-flex items-center ${className} transition-all duration-300`}>
      <img 
        src={src} 
        alt="Worknitive Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Eğer dosya bulunamazsa (404), img etiketini gizle ve fallback göster
          (e.target as HTMLImageElement).style.display = 'none';
          const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
          if (fallback) (fallback as HTMLElement).style.display = 'flex';
        }}
      />
      
      {/* Fallback Logo (Eğer dosya yüklenemezse görünecek olan yedek logo) */}
      <div className="logo-fallback hidden items-center h-full">
        <svg 
          viewBox="0 0 360 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto overflow-visible"
        >
          <g transform="translate(10, 5)">
            <rect x="0" y="5" width="18" height="44" rx="9" fill={color} transform="skewX(-18) translate(20, 0)"/>
            <rect x="32" y="5" width="18" height="44" rx="9" fill={color} transform="skewX(-18) translate(20, 0)"/>
          </g>
          <text 
            x="100" y="48" fill={color} 
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '46px', letterSpacing: '-0.04em' }}
          >
            ORKNITIVE
          </text>
        </svg>
      </div>
    </div>
  );
};
