
import React from 'react';
import { BlogPost } from '../types';

interface BlogPostDetailProps {
  post: BlogPost;
  onClose: () => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl animate-fadeIn" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl animate-scaleIn flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          <div className="relative h-80 md:h-[400px]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-12 left-8 md:left-12 right-12 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-worknitive rounded-xl text-[10px] font-black uppercase tracking-widest">
                  {post.category}
                </span>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  {post.date} • {post.readTime} OKUMA
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                {post.title}
              </h1>
            </div>
          </div>
          
          <div className="p-8 md:p-12 prose prose-slate max-w-none">
            <div className="text-slate-600 text-lg leading-relaxed font-medium space-y-6">
              <p className="text-xl font-bold text-slate-900 leading-snug">
                {post.excerpt}
              </p>
              <div className="h-px bg-slate-100 my-8"></div>
              {/* Burası dinamik içerik alanı */}
              <p>
                İş dünyası hızla değişiyor. Özellikle İK ve Finans departmanları, dijitalleşmenin getirdiği avantajları en üst seviyede kullanmak zorunda. Worknitive olarak biz, bu değişimin merkezinde yer alıyoruz.
              </p>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mt-12 mb-4">
                Neden Şimdi Değişmelisiniz?
              </h3>
              <p>
                Geleneksel yöntemler artık günümüzün hızına yetişemiyor. Manuel veri girişi, kaybolan fişler ve karmaşık izin tabloları hem zaman kaybına hem de yüksek hata payına neden oluyor. Yapay zeka destekli çözümlerimizle bu süreci saniyelere indiriyoruz.
              </p>
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 my-10 italic">
                "Teknoloji sadece bir araç değil, işletmenizin büyümesini sağlayan en stratejik müttefikinizdir."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
