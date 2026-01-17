import React, { useState } from 'react';
import { MousePointer2 } from 'lucide-react';

interface TermSpotlightProps {
  termId: string;
  label: string;
  isActive: boolean;
  onSelect: (id: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const TermSpotlight: React.FC<TermSpotlightProps> = ({ 
  termId, 
  label, 
  isActive, 
  onSelect, 
  children,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-200 ${className}`}
      style={{ marginTop: (isHovered || isActive) ? '16px' : '0', transition: 'margin 0.2s ease' }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(termId);
      }}
      onMouseOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onMouseOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
    >
      {/* Highlight Border */}
      <div 
        className={`
          absolute -inset-1 rounded-lg border-2 pointer-events-none transition-all duration-200 z-10
          ${isActive 
            ? 'border-primary-500 bg-primary-500/10 shadow-[0_0_0_4px_rgba(14,165,233,0.15)]' 
            : isHovered 
              ? 'border-primary-400/50 bg-white/5 border-dashed'
              : 'border-transparent'}
        `}
      />

      {/* Label Tag (Visible on hover or active) */}
      <div 
        className={`
          absolute -top-4 left-4 z-50 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg transition-all duration-200 flex items-center gap-1 whitespace-nowrap
          ${isActive 
            ? 'bg-primary-600 text-white opacity-100 translate-y-0' 
            : isHovered
              ? 'bg-slate-800 text-primary-400 border border-slate-600 opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-1 pointer-events-none'}
        `}
      >
        <MousePointer2 size={10} />
        {label}
      </div>

      {children}
    </div>
  );
};