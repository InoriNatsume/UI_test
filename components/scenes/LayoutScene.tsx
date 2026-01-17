import React, { useState } from 'react';
import { TermSpotlight } from '../TermSpotlight';
import { Layout, Columns, Grid, Search, Menu, Twitter, Github, Linkedin, TrendingUp, User } from 'lucide-react';

type LayoutMode = '1-col' | '2-col' | '3-col' | 'holy-grail';

export const LayoutScene: React.FC<{ onTermSelect: (id: string) => void, activeTermId: string | null }> = ({ onTermSelect, activeTermId }) => {
  const [mode, setMode] = useState<LayoutMode>('3-col');

  return (
    <div className="h-full w-full bg-slate-900 flex flex-col border border-slate-700 rounded-xl shadow-2xl overflow-visible pt-4">
      {/* Control Panel */}
      <div className="bg-slate-800 border-b border-slate-700 p-4 flex flex-wrap items-center gap-4 shrink-0">
        <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider mr-4">Layout Lab</h2>
        <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-700">
          <button 
            onClick={() => setMode('1-col')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${mode === '1-col' ? 'bg-slate-700 shadow-sm text-primary-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Layout size={14} /> Single (Mobile/Feed)
          </button>
          <button 
            onClick={() => setMode('2-col')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${mode === '2-col' ? 'bg-slate-700 shadow-sm text-primary-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Columns size={14} /> Split (Blog)
          </button>
          <button 
            onClick={() => setMode('3-col')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${mode === '3-col' ? 'bg-slate-700 shadow-sm text-primary-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Grid size={14} /> Dashboard (App)
          </button>
          <button 
            onClick={() => setMode('holy-grail')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${mode === 'holy-grail' ? 'bg-slate-700 shadow-sm text-primary-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Layout size={14} /> Holy Grail (Classic)
          </button>
        </div>
      </div>

      {/* Layout Visualization - Realistic Content Context */}
      <div className="flex-1 p-6 overflow-y-auto bg-slate-950">
        <div className="h-full w-full max-w-6xl mx-auto flex flex-col gap-4 min-h-[600px] font-sans">
          
          {/* Header (Common) */}
          <TermSpotlight termId="header" label="Header" isActive={activeTermId === 'header'} onSelect={onTermSelect} className="h-16 bg-slate-800 rounded-lg border border-slate-700 shadow-sm flex items-center justify-between px-6 shrink-0">
             <div className="flex items-center gap-2 font-bold text-white text-lg">
               <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">TD</div>
               Tech Daily
             </div>
             <div className="hidden md:flex gap-4 text-sm text-slate-400 font-medium">
               <span className="text-white">News</span>
               <span>Reviews</span>
               <span>Podcasts</span>
             </div>
             <div className="flex gap-3">
               <Search className="text-slate-400 w-5 h-5" />
               <Menu className="md:hidden text-slate-400 w-5 h-5" />
             </div>
          </TermSpotlight>

          {/* Body Area */}
          <div className="flex-1 flex gap-4 min-h-0">
            
            {/* Left Sidebar (Navigation/Menu) - Visible in 3-col & Holy Grail */}
            {(mode === '3-col' || mode === 'holy-grail') && (
              <TermSpotlight termId="sidebar" label="Sidebar (Nav)" isActive={activeTermId === 'sidebar'} onSelect={onTermSelect} className="w-64 bg-slate-800 rounded-lg border border-slate-700 shadow-sm hidden md:flex flex-col p-4 shrink-0">
                <div className="text-xs font-bold text-slate-500 uppercase mb-4">Categories</div>
                <div className="space-y-2">
                  {['AI & Robotics', 'Startups', 'Gadgets', 'Programming', 'Design'].map(cat => (
                    <div key={cat} className="p-2 rounded hover:bg-slate-700 text-slate-300 text-sm cursor-pointer transition-colors">
                      {cat}
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-xs font-bold text-slate-500 uppercase mb-4">Subscribe</div>
                <div className="bg-slate-700/50 p-3 rounded text-center">
                  <p className="text-xs text-slate-400 mb-2">Get daily updates</p>
                  <button className="w-full bg-primary-600 text-white text-xs py-1.5 rounded hover:bg-primary-500">Join</button>
                </div>
              </TermSpotlight>
            )}

            {/* Main Content Area */}
            <TermSpotlight termId="grid" label={`Main Content (${mode})`} isActive={activeTermId === 'grid'} onSelect={onTermSelect} className="flex-1 flex flex-col gap-4">
              
              {/* Content Cards */}
              <div className={`
                grid gap-4 flex-1
                ${mode === '1-col' ? 'grid-cols-1' : ''}
                ${mode === '2-col' ? 'grid-cols-1 md:grid-cols-2' : ''}
                ${mode === '3-col' || mode === 'holy-grail' ? 'grid-cols-1 lg:grid-cols-3' : ''}
              `}>
                {/* Article 1 */}
                <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm overflow-hidden flex flex-col">
                  <div className="h-40 bg-slate-700/50 flex items-center justify-center text-slate-600">Article Image</div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-xs text-primary-400 font-bold mb-2">HOT TOPIC</span>
                    <h3 className="text-white font-bold mb-2">The Future of AI UI</h3>
                    <p className="text-slate-400 text-xs mb-4 line-clamp-3">Generative UI is changing how we interact with software. Here's what you need to know.</p>
                    <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-5 h-5 rounded-full bg-slate-600"></div>
                      <span>John Doe</span>
                    </div>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm overflow-hidden flex flex-col">
                  <div className="h-40 bg-slate-700/50 flex items-center justify-center text-slate-600">Article Image</div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-xs text-emerald-400 font-bold mb-2">DESIGN</span>
                    <h3 className="text-white font-bold mb-2">Dark Mode Patterns</h3>
                    <p className="text-slate-400 text-xs mb-4 line-clamp-3">Best practices for creating accessible and beautiful dark themes for your applications.</p>
                    <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-5 h-5 rounded-full bg-slate-600"></div>
                      <span>Jane Smith</span>
                    </div>
                  </div>
                </div>

                {/* Article 3 (Visible in most modes) */}
                {(mode === '1-col' || mode === '3-col' || mode === 'holy-grail') && (
                  <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm overflow-hidden flex flex-col">
                    <div className="h-40 bg-slate-700/50 flex items-center justify-center text-slate-600">Article Image</div>
                    <div className="p-4 flex flex-col flex-1">
                      <span className="text-xs text-amber-400 font-bold mb-2">TECH</span>
                      <h3 className="text-white font-bold mb-2">React Server Components</h3>
                      <p className="text-slate-400 text-xs mb-4 line-clamp-3">A deep dive into the new architecture and how it improves performance.</p>
                       <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-5 h-5 rounded-full bg-slate-600"></div>
                        <span>Dev Guy</span>
                      </div>
                    </div>
                  </div>
                )}
                 
                 {/* Article 4 (Visible in 1-col flow) */}
                 {mode === '1-col' && (
                  <div className="bg-slate-800 rounded-lg border border-slate-700 shadow-sm p-4 flex gap-4 items-center">
                    <div className="w-20 h-20 bg-slate-700 rounded flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Minimalist Web Design</h3>
                      <p className="text-slate-400 text-xs mt-1">Less is more.</p>
                    </div>
                  </div>
                )}
              </div>

            </TermSpotlight>

            {/* Right Sidebar (Ads/Trends) - Visible in 2-col & Holy Grail */}
            {(mode === '2-col' || mode === 'holy-grail') && (
               <TermSpotlight termId="sidebar" label={mode === 'holy-grail' ? "Sidebar (Right)" : "Sidebar"} isActive={activeTermId === 'sidebar'} onSelect={onTermSelect} className="w-64 bg-slate-800 rounded-lg border border-slate-700 shadow-sm hidden lg:flex flex-col p-4 shrink-0">
                <div className="text-xs font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                  <TrendingUp size={14} /> Trending
                </div>
                <div className="space-y-4 mb-6">
                  {[1, 2, 3].map(n => (
                    <div key={n} className="flex gap-3 items-start">
                      <span className="text-slate-600 font-bold text-lg leading-none">0{n}</span>
                      <div>
                        <h4 className="text-slate-200 text-sm font-medium leading-tight hover:text-primary-400 cursor-pointer">Top Tech Trend of 2024</h4>
                        <span className="text-[10px] text-slate-500">2h ago</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Ad Placeholder */}
                <div className="bg-slate-700/30 border border-slate-700 border-dashed rounded h-40 flex items-center justify-center text-slate-500 text-xs">
                  Advertisement Area
                </div>
              </TermSpotlight>
            )}
          </div>

          {/* Footer (Common) */}
           <TermSpotlight termId="footer" label="Footer" isActive={activeTermId === 'footer'} onSelect={onTermSelect} className="h-16 bg-slate-800 rounded-lg border border-slate-700 shadow-sm flex items-center justify-between px-6 text-slate-400 text-xs shrink-0">
            <div>© 2024 Tech Daily Inc.</div>
            <div className="flex gap-4">
              <Twitter size={14} className="hover:text-white cursor-pointer"/>
              <Github size={14} className="hover:text-white cursor-pointer"/>
              <Linkedin size={14} className="hover:text-white cursor-pointer"/>
            </div>
          </TermSpotlight>

        </div>
      </div>
    </div>
  );
};