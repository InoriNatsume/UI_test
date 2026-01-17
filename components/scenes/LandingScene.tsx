import React from 'react';
import { TermSpotlight } from '../TermSpotlight';
import { ChevronRight, Star, Globe, Zap, Shield, ArrowRight } from 'lucide-react';

export const LandingScene: React.FC<{ onTermSelect: (id: string) => void, activeTermId: string | null }> = ({ onTermSelect, activeTermId }) => {
  return (
    <div className="h-full w-full bg-white overflow-y-auto relative border border-slate-300 rounded-xl shadow-2xl">
      {/* Header */}
      <TermSpotlight termId="header" label="Sticky Header" isActive={activeTermId === 'header'} onSelect={onTermSelect} className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="font-bold text-xl text-slate-900 flex items-center gap-2"><Globe className="text-primary-600"/> Globex</div>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-primary-600">Product</a>
              <a href="#" className="hover:text-primary-600">Solutions</a>
              <a href="#" className="hover:text-primary-600">Pricing</a>
            </nav>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800">Get Started</button>
          </div>
        </div>
      </TermSpotlight>

      {/* Hero Section */}
      <TermSpotlight termId="hero" label="Hero Section" isActive={activeTermId === 'hero'} onSelect={onTermSelect} className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393798-38e34e918dbe?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-500 text-primary-300 text-xs font-bold uppercase tracking-wider mb-6">v2.0 Released</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Build software <span className="text-primary-400">faster</span><br/> than ever before.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10">
            The ultimate platform for developers to deploy, manage, and scale their applications with ease. Join thousands of creators today.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary-600 text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-primary-500 shadow-lg shadow-primary-900/50 transition-all flex items-center gap-2">
              Start Building <ChevronRight size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </TermSpotlight>

      {/* Features Grid */}
      <TermSpotlight termId="container" label="Container" isActive={activeTermId === 'container'} onSelect={onTermSelect} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Everything you need</h2>
          <p className="mt-4 text-slate-500">Powerful features to help you grow your business.</p>
        </div>
        
        <TermSpotlight termId="grid" label="Grid Layout" isActive={activeTermId === 'grid'} onSelect={onTermSelect} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Lightning Fast', icon: Zap, desc: 'Optimized for speed and performance out of the box.' },
            { title: 'Secure by Default', icon: Shield, desc: 'Enterprise-grade security features included.' },
            { title: 'Global Scale', icon: Globe, desc: 'Deploy your app to 30+ regions in seconds.' },
          ].map((item, i) => (
            <TermSpotlight key={i} termId="card" label="Card" isActive={activeTermId === 'card'} onSelect={onTermSelect} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </TermSpotlight>
          ))}
        </TermSpotlight>
      </TermSpotlight>

      {/* Footer */}
      <TermSpotlight termId="footer" label="Footer" isActive={activeTermId === 'footer'} onSelect={onTermSelect} className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Globe size={20}/> Globex</div>
            <p className="text-sm">Making the world a better place through software.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
      </TermSpotlight>
    </div>
  );
};