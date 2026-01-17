import React, { useState } from 'react';
import { TermSpotlight } from '../TermSpotlight';
import { X, Heart, Share2, Download } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1682687221038-404670e01d46?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1682685796014-2f342188a635?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1682685797661-9e0c8c1848c5?auto=format&fit=crop&q=80&w=600',
];

export const GalleryScene: React.FC<{ onTermSelect: (id: string) => void, activeTermId: string | null }> = ({ onTermSelect, activeTermId }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="h-full w-full bg-slate-900 flex flex-col relative border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0 z-10">
        <h1 className="text-xl font-bold text-slate-100">Photo Gallery</h1>
        <div className="text-sm text-slate-500">8 items</div>
      </div>

      {/* Main Grid Content */}
      <div className="flex-1 overflow-y-auto p-6 pt-10">
        <TermSpotlight 
          termId="grid" 
          label="Grid Layout (Masonry style)" 
          isActive={activeTermId === 'grid'} 
          onSelect={onTermSelect}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mx-auto max-w-6xl"
        >
          {IMAGES.map((src, i) => (
            <div key={i} className="break-inside-avoid mb-6 pt-2">
              <TermSpotlight 
                termId="card" 
                label="Image Card" 
                isActive={activeTermId === 'card'} 
                onSelect={onTermSelect}
              >
                <div 
                  className="group relative rounded-xl overflow-hidden bg-slate-800 cursor-zoom-in border border-slate-700"
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`Gallery item ${i}`} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                     <div className="flex gap-2 text-white">
                       <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"><Heart size={16} /></button>
                       <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"><Share2 size={16} /></button>
                     </div>
                  </div>
                </div>
              </TermSpotlight>
            </div>
          ))}
        </TermSpotlight>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <TermSpotlight 
          termId="lightbox" 
          label="Lightbox Overlay" 
          isActive={activeTermId === 'lightbox'} 
          onSelect={onTermSelect}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-in fade-in duration-200"
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl" 
              alt="Full view"
            />
            
            {/* Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Actions */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-200 transition-transform hover:scale-105 active:scale-95 shadow-lg">
                <Download size={18} /> Download High-Res
              </button>
            </div>
          </div>
        </TermSpotlight>
      )}
    </div>
  );
};