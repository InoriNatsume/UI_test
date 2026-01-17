import React from 'react';
import { TermSpotlight } from '../TermSpotlight';

export const DesignScene: React.FC<{ onTermSelect: (id: string) => void, activeTermId: string | null }> = ({ onTermSelect, activeTermId }) => {
  return (
    <div className="h-full w-full bg-slate-50 overflow-y-auto overflow-x-visible relative border border-slate-300 rounded-xl shadow-2xl p-8 pt-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Design System</h1>
          <p className="text-slate-500 mt-2">The fundamental atoms of the user interface.</p>
        </div>

        {/* Colors Section */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">Colors (Palette)</h2>
          <TermSpotlight 
            termId="palette" 
            label="Color Palette" 
            isActive={activeTermId === 'palette'} 
            onSelect={onTermSelect}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Primary Colors */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-slate-500">Primary (Brand)</h3>
              <div className="space-y-1">
                <div className="h-12 rounded-lg bg-primary-500 shadow-sm flex items-center justify-center text-white text-xs font-mono">primary-500</div>
                <div className="grid grid-cols-3 gap-1">
                  <div className="h-8 rounded-md bg-primary-100"></div>
                  <div className="h-8 rounded-md bg-primary-300"></div>
                  <div className="h-8 rounded-md bg-primary-700"></div>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-slate-500">Neutral (Slate)</h3>
              <div className="space-y-1">
                <div className="h-12 rounded-lg bg-slate-900 shadow-sm flex items-center justify-center text-white text-xs font-mono">slate-900</div>
                 <div className="grid grid-cols-3 gap-1">
                  <div className="h-8 rounded-md bg-slate-200"></div>
                  <div className="h-8 rounded-md bg-slate-400"></div>
                  <div className="h-8 rounded-md bg-slate-600"></div>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-slate-500">Semantic (Status)</h3>
              <div className="grid grid-cols-1 gap-2">
                 <div className="h-8 rounded-md bg-emerald-500 flex items-center px-3 text-white text-xs">Success</div>
                 <div className="h-8 rounded-md bg-amber-500 flex items-center px-3 text-white text-xs">Warning</div>
                 <div className="h-8 rounded-md bg-rose-500 flex items-center px-3 text-white text-xs">Error</div>
              </div>
            </div>
          </TermSpotlight>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">Typography</h2>
          <TermSpotlight 
            termId="typography" 
            label="Typography Scale" 
            isActive={activeTermId === 'typography'} 
            onSelect={onTermSelect}
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 w-24 shrink-0">Display</span>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">The quick brown fox</h1>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 w-24 shrink-0">Heading 1</span>
              <h1 className="text-3xl font-bold text-slate-900">The quick brown fox jumps</h1>
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 w-24 shrink-0">Heading 2</span>
              <h2 className="text-2xl font-semibold text-slate-900">The quick brown fox jumps over</h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 w-24 shrink-0">Body</span>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing (leading), and letter-spacing (tracking).
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-4">
              <span className="text-xs font-mono text-slate-400 w-24 shrink-0">Caption</span>
              <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                Figure 1.1: Example of caption text
              </p>
            </div>
          </TermSpotlight>
        </section>
      </div>
    </div>
  );
};