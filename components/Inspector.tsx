import React, { useState } from 'react';
import { UITerm } from '../types';
import { X, Code, BookOpen, Check, Info } from 'lucide-react';

interface InspectorProps {
  term: UITerm | null;
  onClose: () => void;
}

export const Inspector: React.FC<InspectorProps> = ({ term, onClose }) => {
  const [tab, setTab] = useState<'learn' | 'code'>('learn');

  if (!term) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-slate-500 p-8 text-center bg-slate-900 border-l border-slate-800">
        <div className="bg-slate-800 p-4 rounded-full mb-4">
          <MousePointerClickIcon className="w-8 h-8 opacity-50 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-300 mb-2">요소를 선택하세요</h3>
        <p className="text-sm max-w-[200px] text-slate-400">
          왼쪽 화면에서 궁금한 UI 요소를 클릭하면 이곳에서 상세한 설명과 코드를 볼 수 있습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-slate-900 border-l border-slate-800 shadow-xl animate-in slide-in-from-right duration-300 w-full md:w-[400px] lg:w-[450px]">
      {/* Header */}
      <div className="p-5 border-b border-slate-800 flex justify-between items-start bg-slate-900">
        <div>
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-primary-400 bg-primary-900/30 border border-primary-800 mb-2">
            {term.category.split('(')[0]}
          </span>
          <h2 className="text-2xl font-bold text-slate-100">{term.name.split('(')[0]}</h2>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
            {term.name.match(/\(([^)]+)\)/)?.[1]}
          </p>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-slate-300 p-1 rounded hover:bg-slate-800">
          <X size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 px-5">
        <button
          onClick={() => setTab('learn')}
          className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
            tab === 'learn' ? 'border-primary-500 text-primary-400' : 'border-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <BookOpen size={16} />
            학습 (Learn)
          </div>
        </button>
        <button
          onClick={() => setTab('code')}
          className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
            tab === 'code' ? 'border-primary-500 text-primary-400' : 'border-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <Code size={16} />
            코드 (Code)
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5">
        {tab === 'learn' ? (
          <div className="space-y-6">
            <div className="prose prose-sm prose-invert">
              <p className="text-slate-300 leading-relaxed text-base">{term.fullDescription}</p>
            </div>

            <div className="bg-primary-900/20 border border-primary-900/50 rounded-xl p-4">
              <h4 className="flex items-center gap-2 text-primary-400 font-semibold mb-3 text-sm">
                <Info size={16} />
                권장 사항 (Best Practices)
              </h4>
              <ul className="space-y-2">
                {term.bestPractices.map((practice, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-primary-300/80 text-sm">
                    <Check size={14} className="mt-1 shrink-0 opacity-70" />
                    <span className="leading-snug">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col">
            <div className="bg-black/50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed shadow-inner border border-slate-800">
              <pre>{term.codeSnippet}</pre>
            </div>
            <p className="mt-4 text-xs text-slate-500 text-center">
              위 코드는 예시이며, 실제 프로젝트 환경(Tailwind 등)에 따라 다를 수 있습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper icon
const MousePointerClickIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 4.1 12 6" />
    <path d="m5.1 8-2.9-.8" />
    <path d="m6 12-1.9 2" />
    <path d="M7.2 2.2 8 5.1" />
    <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
  </svg>
);