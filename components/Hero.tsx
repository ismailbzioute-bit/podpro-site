
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
