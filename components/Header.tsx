import React from 'react';
import { Menu, Zap } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 h-16 flex items-center justify-between px-4 lg:px-8 z-40 relative">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-slate-400 hover:bg-slate-800 rounded-md"
        >
          <Menu size={24} />
        </button>
        
        <div className="flex items-center gap-2">
          <div className="bg-primary-600 text-white p-1.5 rounded-lg">
            <Zap size={20} fill="currentColor" />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            UI Lexicon
          </h1>
        </div>
      </div>

      <div className="hidden md:flex items-center text-sm text-slate-500">
        <span className="bg-slate-800 px-3 py-1 rounded-full text-xs font-medium border border-slate-700 text-slate-400">
          v1.0.0
        </span>
      </div>
    </header>
  );
};