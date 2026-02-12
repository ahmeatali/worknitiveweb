
import React, { useState } from 'react';

// Bu satır, Vite'in logoyu bulup bir URL oluşturmasını sağlar.
// Eğer dosya root (ana dizin) içindeyse '../logo.svg' doğru yoldur.
// @ts-ignore
import logoUrl from '../logo.svg';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'dark'
}) => {
  const [imgError, setImgError] = useState(false);
  const color = variant === 'light' ? '#FFFFFF' : '#6a0dad';

  // Fallback (Yedek) Logo: Dosya yüklenemezse bunu gösteririz
  const FallbackLogo = (
    <div className={`inline-flex items-center ${className} transition-all duration-300`}>
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
  );

  // Eğer import başarısız olursa veya onError tetiklenirse yedeğe geç
  if (imgError) {
    return FallbackLogo;
  }

  return (
    <div className={`inline-flex items-center ${className} transition-all duration-300`}>
      <img 
        src={logoUrl} 
        alt="Worknitive" 
        className="h-full w-auto object-contain"
        // Eğer import edilen URL geçerli değilse veya dosya bozuksa yedeği göster
        onError={() => setImgError(true)}
      />
    </div>
  );
};
