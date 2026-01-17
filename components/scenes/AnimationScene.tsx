import React, { useState } from 'react';
import { TermSpotlight } from '../TermSpotlight';
import { RefreshCcw, Hand } from 'lucide-react';

export const AnimationScene: React.FC<{ onTermSelect: (id: string) => void, activeTermId: string | null }> = ({ onTermSelect, activeTermId }) => {
  const [bounceKey, setBounceKey] = useState(0);

  return (
    <div className="h-full w-full bg-slate-900 flex flex-col relative border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
      <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 shrink-0 bg-slate-900/50 backdrop-blur">
        <h1 className="text-xl font-bold text-white">Motion & Physics Lab</h1>
        <button 
          onClick={() => setBounceKey(k => k + 1)} 
          className="text-slate-400 hover:text-white flex items-center gap-2 text-sm"
        >
          <RefreshCcw size={16} /> Reset
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 gap-12 overflow-y-auto">
        {/* Springy Card */}
        <TermSpotlight 
          termId="motion" 
          label="Spring Animation (Hover/Active)" 
          isActive={activeTermId === 'motion'} 
          onSelect={onTermSelect}
        >
          <div className="group cursor-pointer">
            <div className="w-64 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center text-white font-bold text-xl
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
              group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-indigo-500/50
              group-active:scale-95 group-active:rotate-0
            ">
              Hover & Click Me
            </div>
            <p className="text-center text-slate-500 text-sm mt-4">Elastic Scale & Rotation</p>
          </div>
        </TermSpotlight>

        {/* Bouncing Balls */}
        <div className="flex gap-8 items-end h-32">
           {[0, 100, 200].map((delay, i) => (
             <TermSpotlight 
               key={`ball-${i}-${bounceKey}`}
               termId="motion" 
               label="Keyframe Animation" 
               isActive={activeTermId === 'motion'} 
               onSelect={onTermSelect}
             >
               <div 
                 className="w-16 h-16 rounded-full bg-emerald-500 shadow-lg animate-bounce"
                 style={{ animationDelay: `${delay}ms` }}
               ></div>
             </TermSpotlight>
           ))}
        </div>
        <p className="text-slate-500 text-sm -mt-6">Staggered Bounce Loop</p>

        {/* Slider Simulation */}
        <TermSpotlight 
          termId="motion" 
          label="Interactive Slide" 
          isActive={activeTermId === 'motion'} 
          onSelect={onTermSelect}
          className="w-full max-w-md bg-slate-800 rounded-full p-2 border border-slate-700 relative group"
        >
          <div className="absolute inset-y-2 left-2 w-12 h-12 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center text-slate-900 transition-all duration-200 group-hover:translate-x-full group-hover:bg-primary-500 group-hover:text-white">
            <Hand size={20} />
          </div>
          <div className="text-center text-slate-500 py-3 font-medium pointer-events-none">
            Hover to Slide
          </div>
        </TermSpotlight>
      </div>
    </div>
  );
};