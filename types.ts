
// Fix: Added React import to resolve the 'React' namespace error for React.ReactNode
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
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