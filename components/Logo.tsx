
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Worknitive Kesin Logo Bileşeni
 * Sadece kullanıcının sağladığı '/logo.svg' dosyasını ekrana basar.
 * Tasarımda herhangi bir metin veya kodla çizilmiş şekil içermez.
 */
export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'dark'
}) => {
  return (
    <div className={`inline-flex items-center justify-start ${className} transition-all duration-300`}>
      <img 
        src="/logo.svg" 
        alt="Worknitive" 
        className={`h-full w-auto object-contain block ${variant === 'light' ? 'brightness-0 invert' : ''}`}
        // Hata durumunda bile metin basmıyoruz, logo.svg dosyasının varlığı zorunlu
      />
    </div>
  );
};
