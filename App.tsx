
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Trends from './components/Trends';
import Platforms from './components/Platforms';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { MockupItem } from './types';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Gallery onOpenModal={openModal} />
        <Trends />
        <Platforms />
        <Services />
        <CTA />
      </main>
      <Footer />
      
      {selectedImage && (
        <Modal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;

import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Ready to Build Your <br /> Digital Empire?
          </h2>
          <p className="text-indigo-100 text-xl max-w-2xl mx-auto">
            Join thousands of creators who turned their passion into a scalable business with PrintFlow. No credit card required to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-xl shadow-indigo-900/20">
              Get Started for Free
            </button>
            <button className="bg-indigo-500/30 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-indigo-500/40 transition-all active:scale-95">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Print<span className="text-indigo-400">Flow</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              Empowering the next generation of e-commerce entrepreneurs with premium print-on-demand technology.
            </p>
            <div className="flex gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Catalog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Mockup Generator</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2024 PrintFlow Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <p>Made with ❤️ for Creators</p>
            <p>ISO 27001 Certified</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent opacity-50"></div>
      <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              The Next Gen POD Partner
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Launch Your Brand <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Without Inventory</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Design, publish, and scale your merchandise empire globally. We handle printing, warehousing, and shipping while you focus on creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95">
                Start Selling Now
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Joined by <span className="text-slate-900 font-bold">10,000+</span> creators worldwide
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800" 
                alt="Product Mockup" 
                className="w-full h-auto rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-xl border border-white/50 shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Top Seller</p>
                  <p className="text-lg font-extrabold text-slate-900 leading-tight">Premium Cotton Tee</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Starting at</p>
                  <p className="text-lg font-extrabold text-slate-900">$12.50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
      
      <div 
        className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
          </svg>
        </button>
        
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          <div className="flex-1 bg-slate-100 flex items-center justify-center overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Expanded Mockup" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="w-full lg:w-80 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Detailed View</h3>
                <p className="text-slate-500 text-sm">Professional 4K render for your store listings.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Material</span>
                  <span className="font-bold">Premium Cotton</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Availability</span>
                  <span className="font-bold text-green-600">In Stock</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Global Shipping</span>
                  <span className="font-bold">4-7 Days</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all mt-8">
              Customize Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mockups', href: '#mockups' },
    { name: 'Trends', href: '#trends' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition-colors">
                P
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Print<span className="text-indigo-600">Flow</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-indigo-600">
              Sign In
            </button>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const platforms = [
  { name: 'Shopify', desc: 'Full automation sync', color: 'hover:border-green-500' },
  { name: 'Etsy', desc: 'Direct listing manager', color: 'hover:border-orange-500' },
  { name: 'Amazon', desc: 'Merch by Amazon API', color: 'hover:border-amber-400' },
  { name: 'TikTok Shop', desc: 'Viral social commerce', color: 'hover:border-slate-900' },
  { name: 'Printify', desc: 'Extended provider network', color: 'hover:border-blue-600' },
  { name: 'Printful', desc: 'Premium quality routing', color: 'hover:border-red-500' },
];

const Platforms: React.FC = () => {
  return (
    <section id="platforms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Integrations</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Connect To Your <br /> Favorite Channels
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Connect your store in minutes. We provide native integrations with the world's leading e-commerce platforms and marketplaces.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-100">
                  View App Directory
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, idx) => (
                <div key={idx} className={`bg-white p-6 rounded-2xl border border-slate-200 transition-all duration-300 shadow-sm ${platform.color} hover:shadow-xl hover:-translate-y-1`}>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-1">{platform.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;

import React from 'react';

const platforms = [
  { name: 'Shopify', desc: 'Full automation sync', color: 'hover:border-green-500' },
  { name: 'Etsy', desc: 'Direct listing manager', color: 'hover:border-orange-500' },
  { name: 'Amazon', desc: 'Merch by Amazon API', color: 'hover:border-amber-400' },
  { name: 'TikTok Shop', desc: 'Viral social commerce', color: 'hover:border-slate-900' },
  { name: 'Printify', desc: 'Extended provider network', color: 'hover:border-blue-600' },
  { name: 'Printful', desc: 'Premium quality routing', color: 'hover:border-red-500' },
];

const Platforms: React.FC = () => {
  return (
    <section id="platforms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Integrations</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Connect To Your <br /> Favorite Channels
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Connect your store in minutes. We provide native integrations with the world's leading e-commerce platforms and marketplaces.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-100">
                  View App Directory
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, idx) => (
                <div key={idx} className={`bg-white p-6 rounded-2xl border border-slate-200 transition-all duration-300 shadow-sm ${platform.color} hover:shadow-xl hover:-translate-y-1`}>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-1">{platform.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;

import React from 'react';

const trends = [
  { name: 'Y2K Retro', count: '1.2M searches', color: 'bg-pink-100 text-pink-700' },
  { name: 'Eco-Minimalism', count: '800K searches', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Abstract Cyber', count: '500K searches', color: 'bg-blue-100 text-blue-700' },
  { name: 'Hand-drawn Floral', count: '950K searches', color: 'bg-amber-100 text-amber-700' },
];

const Trends: React.FC = () => {
  return (
    <section id="trends" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Market Insights</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Trending POD Styles</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Stay ahead of the curve with our real-time trend tracking engine. We analyze sales data to show you what's hot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trends.map((trend, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all group cursor-default">
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${trend.color}`}>
                Trending Now
              </div>
              <h4 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{trend.name}</h4>
              <p className="text-slate-400 mb-6">Growth in interest over last 30 days</p>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                {trend.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trends;
