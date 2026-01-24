
import React from 'react';
import { MockupItem } from '../types';

interface GalleryProps {
  onOpenModal: (image: string) => void;
}

const mockups: MockupItem[] = [
  { id: 1, title: 'Summer Essentials Tote', category: 'Accessories', image: 'https://images.unsplash.com/photo-1544816153-1557d97655a0?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Minimalist Crewneck', category: 'Apparel', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Matte Finish Ceramic Mug', category: 'Homeware', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Cozy Knit Throw', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Sustainable Activewear', category: 'Apparel', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Modern Wall Art', category: 'Decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800' },
];

const Gallery: React.FC<GalleryProps> = ({ onOpenModal }) => {
  return (
    <section id="mockups" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Product Mockups</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Transform Ideas into <br /> Physical Reality
            </h3>
          </div>
          <p className="text-slate-600 max-w-md text-lg leading-relaxed">
            Choose from over 800+ high-quality products. Instantly generate professional photos for your storefront.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockups.map((item) => (
            <div key={item.id} className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">{item.category}</span>
                <h4 className="text-2xl font-bold text-white mb-6">{item.title}</h4>
                <button 
                  onClick={() => onOpenModal(item.image)}
                  className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  View Large Mockup
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
