
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
