
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'İK' | 'Finans' | 'Yapay Zeka' | 'Teknoloji';
  date: string;
  readTime: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
