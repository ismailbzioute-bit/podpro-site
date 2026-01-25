
import React, { useState, useEffect } from 'react';
import { MOCKUPS, PLATFORMS, TRENDS, SERVICES } from './constants';
import Modal from './components/Modal';
import PlatformCard from './components/PlatformCard';

const App: React.FC = () => {
  const [selectedMockup, setSelectedMockup] = useState<MockupItem | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
<div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <i className="fas fa-layer-group text-white text-xl"></i>
            </div>
            <span className={`text-2xl font-black tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>POD<span className="text-indigo-600">MASTER</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('mockups')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Mockups</button>
            <button onClick={() => scrollToSection('trends')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Trends</button>
            <button onClick={() => scrollToSection('platforms')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Platforms</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Services</button>
            <button onClick={() => scrollToSection('cta')} className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-slate-800 text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold tracking-wider uppercase mb-6 animate-bounce">
                The Future of eCommerce
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
                Your Print On Demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Empire</span> Starts Here
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                Turn your creative designs into high-quality physical products. No inventory, no risk—just pure profit through global fulfillment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => scrollToSection('mockups')}
                  className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Explore Mockups
                </button>
                <button 
                  onClick={() => scrollToSection('platforms')}
                  className="px-10 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
                >
                  View Platforms
                </button>
              </div>
              <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-slate-400">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                  ))}
                </div>
                <p className="text-sm font-medium"><span className="text-slate-900 font-bold">10k+</span> creators already onboard</p>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 animate-in slide-in-from-right duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1523381235312-6f28f3200c67?auto=format&fit=crop&q=80&w=1000" 
                  alt="POD Products" 
                  className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <i className="fas fa-chart-line text-xl"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold">DAILY SALES</p>
                      <p className="text-xl font-black text-slate-800">$2,450.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-200 opacity-20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Mockups Gallery */}
        <section id="mockups" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Professional Mockups</h2>
              <p className="text-lg text-slate-600">High-resolution templates to visualize your brand across dozens of premium products.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCKUPS.map(item => (
                <div key={item.id} className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">{item.category}</span>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                    <button 
                      onClick={() => setSelectedMockup(item)}
                      className="w-full py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all"
                    >
                      View Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Designs */}
        <section id="trends" className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-xl">
                <h2 className="text-4xl font-black mb-4">Trending Design Aesthetics</h2>
                <p className="text-slate-400 text-lg">Stay ahead of the competition with the styles currently dominating the POD market.</p>
              </div>
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors">
                View All Trends
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {TRENDS.map(trend => (
                <div key={trend.id} className="relative group rounded-3xl overflow-hidden h-96">
                  <img src={trend.imageUrl} alt={trend.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-black mb-2">{trend.title}</h3>
                    <p className="text-slate-300 mb-6">{trend.description}</p>
                    <button className="flex items-center gap-2 font-bold text-indigo-400 hover:text-white transition-colors">
                      Learn More <i className="fas fa-arrow-right text-xs"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Connect Your Store</h2>
              <p className="text-lg text-slate-600">Sync with the world's most popular marketplaces and start selling in minutes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PLATFORMS.map(platform => (
                <PlatformCard 
                  key={platform.name} 
                  platform={platform} 
                  onLearnMore={(p) => setSelectedPlatform(p)} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 text-white">
                  <h2 className="text-4xl md:text-5xl font-black mb-8">Done-For-You Services</h2>
                  <div className="space-y-8">
                    {SERVICES.map((service, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="flex-shrink-0 w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                          <i className={service.icon}></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                          <p className="text-indigo-100 opacity-80">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">Request A Quote</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will contact you shortly.'); }}>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Inquiry Type</label>
                      <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600">
                        <option>Custom Graphic Design</option>
                        <option>Etsy Store Setup</option>
                        <option>Product Listing Optimization</option>
                        <option>Bulk Order Fulfillment</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black text-lg hover:bg-indigo-700 transition-all shadow-lg">
                      Send Request
                    </button>
                  </form>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" className="py-24 bg-slate-50 text-center">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-5xl font-black text-slate-900 mb-6">Ready to scale your business?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who use POD Master Pro to fuel their creative journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 shadow-2xl transition-all transform hover:-translate-y-1">
                Start Selling Today
              </button>
              <button className="px-12 py-5 bg-white text-slate-900 border-2 border-slate-900 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                Book Demo Call
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-layer-group text-white text-sm"></i>
                </div>
                <span className="text-xl font-black tracking-tight">POD<span className="text-indigo-600">MASTER</span></span>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                The ultimate toolkit for Print-on-Demand creators. From mockups to marketing, we help you sell more.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => scrollToSection('mockups')} className="hover:text-white transition-colors">Mockup Library</button></li>
                <li><button onClick={() => scrollToSection('trends')} className="hover:text-white transition-colors">Design Trends</button></li>
                <li><button onClick={() => scrollToSection('platforms')} className="hover:text-white transition-colors">Integrations</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Pro Services</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Platforms</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="https://www.etsy.com" target="_blank" className="hover:text-white transition-colors">Etsy Seller Guide</a></li>
                <li><a href="https://merch.amazon.com" target="_blank" className="hover:text-white transition-colors">Merch by Amazon</a></li>
                <li><a href="https://printify.com" target="_blank" className="hover:text-white transition-colors">Printify Workflow</a></li>
                <li><a href="https://www.printful.com" target="_blank" className="hover:text-white transition-colors">Printful Dash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-slate-400 mb-6">Get weekly trending niches and design tips delivered to your inbox.</p>
              <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg flex-grow focus:outline-none focus:border-indigo-600" required />
                <button type="submit" className="bg-indigo-600 px-4 py-2 rounded-lg font-bold hover:bg-indigo-700">Join</button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} POD Master Pro. All rights reserved. Created for ambitious creators.</p>
          </div>
        </div>
      </footer>

      {/* Mockup Modal */}
      <Modal 
        isOpen={!!selectedMockup} 
        onClose={() => setSelectedMockup(null)} 
        title={selectedMockup?.title || ''}
      >
        <div className="space-y-6">
          <img 
            src={selectedMockup?.imageUrl} 
            alt={selectedMockup?.title} 
            className="w-full aspect-video object-cover rounded-xl shadow-lg"
          />
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Specifications</h4>
            <ul className="grid grid-cols-2 gap-4 text-slate-600">
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> 4000x3000px Resolution</li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Smart Object Layers</li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Changeable Backgrounds</li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Photo-realistic Textures</li>
            </ul>
          </div>
          <p className="text-slate-600 italic border-l-4 border-indigo-500 pl-4 py-1 bg-indigo-50">
            Professional mockup perfect for {selectedMockup?.category} stores and marketing materials.
          </p>
        </div>
      </Modal>

      {/* Platform Modal */}
      <Modal 
        isOpen={!!selectedPlatform} 
        onClose={() => setSelectedPlatform(null)} 
        title={selectedPlatform?.name || ''}
      >
        <div className="space-y-6">
          <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-indigo-600 text-4xl mx-auto">
            <i className={selectedPlatform?.logo}></i>
          </div>
          <div className="text-center">
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              {selectedPlatform?.description} Integration with our automated POD fulfillment systems is seamless and takes less than 5 minutes.
            </p>
            <a 
              href={selectedPlatform?.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-indigo-600 text-white rounded-xl font-black text-lg hover:bg-indigo-700 shadow-xl transition-all"
            >
              Go to Official Site
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-6 border-t border-slate-100">
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase">Speed</p>
              <p className="font-bold text-slate-800">5 Mins</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase">Security</p>
              <p className="font-bold text-slate-800">256-bit</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase">Support</p>
              <p className="font-bold text-slate-800">24/7 Live</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
