import React, { useState } from 'react';
import { UITerm } from '../types';
import { 
  ModalDemo, 
  ToastDemo, 
  SkeletonDemo, 
  AccordionDemo, 
  TooltipDemo, 
  BreadcrumbsDemo, 
  SegmentedControlDemo,
  GridDemo,
  FlexboxDemo,
  ContainerDemo,
  CardDemo,
  TextFieldDemo,
  CheckboxDemo,
  RadioDemo,
  ToggleDemo,
  DropdownDemo,
  ScrollbarDemo,
  HeaderDemo,
  FooterDemo,
  SidebarDemo,
  HeroDemo
} from './demos/DemoLibrary';
import { Check, Info, Code, Eye, ArrowLeft } from 'lucide-react';

interface PlaygroundProps {
  term: UITerm;
  onBack: () => void;
}

const renderDemo = (key: string) => {
  switch (key) {
    case 'modal': return <ModalDemo />;
    case 'toast': return <ToastDemo />;
    case 'skeleton': return <SkeletonDemo />;
    case 'accordion': return <AccordionDemo />;
    case 'tooltip': return <TooltipDemo />;
    case 'breadcrumbs': return <BreadcrumbsDemo />;
    case 'segmented': return <SegmentedControlDemo />;
    case 'grid': return <GridDemo />;
    case 'flexbox': return <FlexboxDemo />;
    case 'container': return <ContainerDemo />;
    case 'card': return <CardDemo />;
    case 'textfield': return <TextFieldDemo />;
    case 'checkbox': return <CheckboxDemo />;
    case 'radio': return <RadioDemo />;
    case 'toggle': return <ToggleDemo />;
    case 'dropdown': return <DropdownDemo />;
    case 'scrollbar': return <ScrollbarDemo />;
    case 'header': return <HeaderDemo />;
    case 'footer': return <FooterDemo />;
    case 'sidebar': return <SidebarDemo />;
    case 'hero': return <HeroDemo />;
    default: return <div className="p-10 text-center text-slate-400">데모 준비 중입니다 (Demo coming soon)</div>;
  }
};

export const Playground: React.FC<PlaygroundProps> = ({ term, onBack }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-4 max-w-5xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-1 text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
      >
        <div className="p-1 rounded-full bg-slate-100 group-hover:bg-primary-50 transition-colors">
          <ArrowLeft size={16} />
        </div>
        <span className="font-medium">목록으로 돌아가기</span>
      </button>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wide">
            {term.category.split('(')[0]}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{term.name}</h2>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">{term.fullDescription}</p>
      </div>

      {/* Demo & Code Section (Full Width) */}
      <div className="space-y-6 mb-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between">
            <div className="flex bg-slate-200/50 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('preview')}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all
                  ${activeTab === 'preview' 
                    ? 'bg-white text-primary-700 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'}
                `}
              >
                <Eye size={14} />
                미리보기 (Preview)
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all
                  ${activeTab === 'code' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'}
                `}
              >
                <Code size={14} />
                코드 보기 (Code)
              </button>
            </div>
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            </div>
          </div>
          
          <div className="relative min-h-[400px] flex flex-col">
            {activeTab === 'preview' ? (
              <div className="p-6 flex-1 flex flex-col">
                  {renderDemo(term.componentKey)}
              </div>
            ) : (
              <div className="flex-1 bg-slate-900 overflow-x-auto">
                <pre className="p-6 text-sm text-slate-200 font-mono leading-relaxed">
                  <code>{term.codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
          <h3 className="flex items-center gap-2 text-blue-800 font-semibold mb-3">
            <Info size={18} />
            권장 사항 (Best Practices)
          </h3>
          <ul className="space-y-2">
            {term.bestPractices.map((practice, idx) => (
              <li key={idx} className="flex items-start gap-2 text-blue-700 text-sm">
                <Check size={16} className="mt-0.5 shrink-0 opacity-70" />
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};