
import React, { useState } from 'react';
import { BlogPost } from '../types';

interface BlogProps {
  onPostClick: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onPostClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');

  const categories = ['Tümü', 'İK', 'Finans', 'Yapay Zeka', 'Teknoloji'];

  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Yapay Zeka İK Süreçlerini Nasıl Dönüştürüyor?',
      excerpt: 'Geleneksel İK yöntemleri yerini veri odaklı ve yapay zeka destekli sistemlere bırakıyor. İşte 2025 trendleri...',
      content: 'Burada ChatGPT tarafından üretilen uzun metin yer alacak...',
      category: 'Yapay Zeka',
      date: '15 Mart 2025',
      readTime: '5 dk',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Harcama Yönetiminde Verimliliği Artırmanın 5 Yolu',
      excerpt: 'Şirket giderlerini kontrol altına almak ve onay süreçlerini hızlandırmak için uygulayabileceğiniz pratik yöntemler.',
      content: 'Burada ChatGPT tarafından üretilen uzun metin yer alacak...',
      category: 'Finans',
      date: '12 Mart 2025',
      readTime: '4 dk',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Uzaktan Çalışmada PDKS Takibi Nasıl Yapılmalı?',
      excerpt: 'Hibrit ve uzaktan çalışma modellerinde çalışan bağlılığını ve verimliliğini ölçmenin en modern yolları.',
      content: 'Burada ChatGPT tarafından üretilen uzun metin yer alacak...',
      category: 'İK',
      date: '10 Mart 2025',
      readTime: '6 dk',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredPosts = activeCategory === 'Tümü' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
              Worknitive <span className="text-worknitive">Insight</span>
            </h2>
            <p className="text-slate-500 font-medium">
              İK ve finans dünyasındaki en son trendler, rehberler ve teknolojik yenilikler.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === c 
                  ? 'bg-worknitive text-white shadow-lg shadow-worknitive/20' 
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              onClick={() => onPostClick(post)}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-worknitive">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                  <span>{post.readTime} Okuma</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-worknitive transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-black text-worknitive uppercase tracking-[0.2em]">
                  Devamını Oku
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
