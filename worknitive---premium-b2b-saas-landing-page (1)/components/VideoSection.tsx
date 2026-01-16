
import React from 'react';

interface VideoSectionProps {
  onVideoClick: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onVideoClick }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-worknitive rounded-[32px] p-8 md:p-16 overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Worknitive'i İş Başında Görün</h2>
              <p className="text-white/80 text-lg mb-8">
                90 saniyelik bu turda; AI fiş okumayı, PDKS akışlarını ve puantaj raporlamanın ne kadar kolay olduğunu keşfedin.
              </p>
              <ul className="space-y-4 mb-8 text-left hidden md:block">
                {['Hızlı Fiş Girişi', 'Vardiya Planlama', 'Otomatik Puantaj'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div 
                onClick={onVideoClick}
                className="group relative aspect-video bg-slate-800 rounded-2xl border-4 border-white/20 overflow-hidden cursor-pointer shadow-2xl"
              >
                <img 
                  src="https://picsum.photos/seed/video/800/450" 
                  alt="Video Preview" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-worknitive ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
