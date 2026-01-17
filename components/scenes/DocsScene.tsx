import React from 'react';
import { TermSpotlight } from '../TermSpotlight';
import { Book, ChevronRight } from 'lucide-react';

export const DocsScene: React.FC<{ onTermSelect: (id: string) => void, activeTermId: string | null }> = ({ onTermSelect, activeTermId }) => {
  return (
    <div className="h-full w-full bg-slate-900 flex flex-col border border-slate-700 rounded-xl shadow-2xl overflow-hidden relative">
      {/* Top Navigation */}
      <TermSpotlight termId="header" label="Docs Header" isActive={activeTermId === 'header'} onSelect={onTermSelect} className="h-14 border-b border-slate-800 flex items-center px-6 bg-slate-900 z-20">
        <div className="flex items-center gap-2 font-bold text-slate-100 mr-8">
          <Book size={20} className="text-primary-500" />
          Docs
        </div>
        <div className="hidden md:flex text-sm text-slate-400 gap-6">
          <span className="text-primary-400 font-medium">Guide</span>
          <span className="hover:text-slate-100 cursor-pointer">API Reference</span>
          <span className="hover:text-slate-100 cursor-pointer">Examples</span>
        </div>
      </TermSpotlight>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar (Navigation) */}
        <TermSpotlight termId="sidebar" label="Sidebar Navigation" isActive={activeTermId === 'sidebar'} onSelect={onTermSelect} className="w-64 border-r border-slate-800 bg-slate-900/50 overflow-y-auto hidden md:block shrink-0">
          <div className="p-4 space-y-6">
            <div>
              <h5 className="font-bold text-slate-200 text-sm mb-3">Getting Started</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="text-primary-400 font-medium border-l-2 border-primary-500 pl-3 -ml-px">Introduction</li>
                <li className="pl-3 hover:text-slate-200 cursor-pointer">Installation</li>
                <li className="pl-3 hover:text-slate-200 cursor-pointer">Configuration</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-200 text-sm mb-3">Core Concepts</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="pl-3 hover:text-slate-200 cursor-pointer">Routing</li>
                <li className="pl-3 hover:text-slate-200 cursor-pointer">State Management</li>
                <li className="pl-3 hover:text-slate-200 cursor-pointer">Rendering</li>
              </ul>
            </div>
          </div>
        </TermSpotlight>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-slate-950">
          <div className="max-w-4xl mx-auto px-8 py-10 flex gap-10">
            <main className="flex-1 min-w-0">
              <TermSpotlight termId="breadcrumbs" label="Breadcrumbs" isActive={activeTermId === 'breadcrumbs'} onSelect={onTermSelect} className="mb-4">
                <div className="flex items-center text-xs text-slate-500 gap-2">
                   <span>Docs</span> <ChevronRight size={12}/> <span>Getting Started</span>
                </div>
              </TermSpotlight>

              <TermSpotlight termId="typography" label="Typography (Headings)" isActive={activeTermId === 'typography'} onSelect={onTermSelect}>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 mb-6">Introduction</h1>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Welcome to the UI Lexicon documentation. This guide will help you understand the core concepts and get started with building beautiful user interfaces.
                </p>
              </TermSpotlight>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-slate-200 mt-10 mb-4">Why UI Lexicon?</h2>
                <p className="text-slate-400 mb-6">
                  Understanding UI terminology is crucial for effective communication between designers and developers. This interactive playground bridges that gap.
                </p>

                <TermSpotlight termId="code-block" label="Code Block" isActive={activeTermId === 'code-block'} onSelect={onTermSelect} className="my-8">
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto relative group">
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-xs text-slate-300 bg-white/10 px-2 py-1 rounded hover:bg-white/20">Copy</button>
                    </div>
                    <pre className="text-sm font-mono text-blue-300">
                      <code>
                        <span className="text-purple-400">import</span> {'{ UITerm }'} <span className="text-purple-400">from</span> <span className="text-emerald-400">'@ui/lexicon'</span>;{'\n\n'}
                        <span className="text-purple-400">const</span> <span className="text-amber-300">App</span> = () =&gt; {'{'}{'\n'}
                        {'  '}return &lt;<span className="text-amber-300">Playground</span> term="modal" /&gt;;{'\n'}
                        {'}'}
                      </code>
                    </pre>
                  </div>
                </TermSpotlight>

                <h2 className="text-2xl font-bold text-slate-200 mt-10 mb-4">Next Steps</h2>
                <p className="text-slate-400">
                  Ready to dive in? Check out the <a href="#" className="text-primary-400 hover:underline">Installation guide</a>.
                </p>
              </div>
            </main>

            {/* Right TOC Sidebar */}
            <TermSpotlight termId="toc" label="Table of Contents (Sticky)" isActive={activeTermId === 'toc'} onSelect={onTermSelect} className="hidden xl:block w-64 shrink-0">
               <div className="sticky top-6">
                 <h5 className="font-bold text-slate-200 text-xs uppercase tracking-wider mb-4">On this page</h5>
                 <ul className="space-y-3 text-sm border-l border-slate-800">
                   <li className="pl-4 text-primary-400 font-medium border-l-2 border-primary-500 -ml-[2px]">Introduction</li>
                   <li className="pl-4 text-slate-500 hover:text-slate-300 cursor-pointer">Why UI Lexicon?</li>
                   <li className="pl-4 text-slate-500 hover:text-slate-300 cursor-pointer">Code Examples</li>
                   <li className="pl-4 text-slate-500 hover:text-slate-300 cursor-pointer">Next Steps</li>
                 </ul>
               </div>
            </TermSpotlight>
          </div>
        </div>
      </div>
    </div>
  );
};