import React from 'react';
import { UITerm, TermCategory } from '../types';
import { ArrowRight, Layout, MousePointer, Layers, BookOpen, Monitor } from 'lucide-react';

interface CategoryViewProps {
  category: TermCategory;
  terms: UITerm[];
  onSelectTerm: (term: UITerm) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({ category, terms, onSelectTerm }) => {
  // Filter terms for this category
  const categoryTerms = terms.filter(t => t.category === category);

  const getCategoryDescription = (cat: TermCategory) => {
    if (cat === TermCategory.INPUT) return "사용자로부터 정보를 입력받거나 선택받는 요소들입니다.";
    if (cat === TermCategory.LAYOUT) return "화면의 구조를 잡고 요소를 배치하는 방식들입니다.";
    if (cat === TermCategory.NAVIGATION) return "사용자가 앱 내에서 길을 찾고 이동하는 것을 돕습니다.";
    if (cat === TermCategory.FEEDBACK) return "시스템의 상태나 작업 결과를 사용자에게 알려줍니다.";
    return "데이터를 시각적으로 보여주거나 강조하는 요소들입니다.";
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 border-b border-slate-200 pb-6">
        <h2 className="text-3xl font-bold text-slate-900">{category}</h2>
        <p className="text-lg text-slate-500 mt-2">
          {getCategoryDescription(category)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTerms.map(term => (
          <button
            key={term.id}
            onClick={() => onSelectTerm(term)}
            className="flex flex-col text-left bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-300 hover:ring-1 hover:ring-primary-100 transition-all group h-full"
          >
            <div className="flex items-start justify-between w-full mb-3">
              <span className="font-bold text-lg text-slate-800 group-hover:text-primary-700 transition-colors">
                {term.name.split('(')[0].trim()}
              </span>
              <div className="bg-slate-100 p-1.5 rounded-full text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                <ArrowRight size={16} />
              </div>
            </div>
            <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
               {term.name.match(/\(([^)]+)\)/)?.[1] || 'UI Component'}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              {term.shortDescription}
            </p>
          </button>
        ))}
      </div>
      
      {categoryTerms.length === 0 && (
        <div className="text-center py-20 bg-slate-100 rounded-xl border border-dashed border-slate-300 text-slate-500">
          아직 이 카테고리에 등록된 용어가 없습니다.
        </div>
      )}
    </div>
  );
};