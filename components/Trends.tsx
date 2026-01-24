
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
