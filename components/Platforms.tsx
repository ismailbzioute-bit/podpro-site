
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
