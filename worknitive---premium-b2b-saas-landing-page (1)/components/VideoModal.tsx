
import React from 'react';

interface VideoModalProps {
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-black rounded-3xl overflow-hidden max-w-5xl w-full aspect-video shadow-2xl animate-scaleIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center">
           <div className="w-16 h-16 bg-worknitive rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M8 5v14l11-7z" />
              </svg>
           </div>
           <h3 className="text-2xl font-bold mb-4">Ürün Tanıtım Videosu</h3>
           <p className="text-white/60 max-w-lg mb-8">
              Bu bir placeholder modal'ıdır. Gerçek bir implementasyonda burada YouTube/Vimeo embed kodu yer alacaktır.
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl">
              <div className="p-4 bg-white/5 rounded-xl">
                 <div className="font-bold text-worknitive mb-1">AI Harcama</div>
                 <div className="text-xs text-white/40">OCR ile 3 saniyede fiş girişi</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                 <div className="font-bold text-worknitive mb-1">Entegre PDKS</div>
                 <div className="text-xs text-white/40">GPS onaylı giriş-çıkış takibi</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                 <div className="font-bold text-worknitive mb-1">Puantaj</div>
                 <div className="text-xs text-white/40">Ay sonunda tek tıkla rapor</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
