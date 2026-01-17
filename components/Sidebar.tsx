import React from 'react';
import { SceneType } from '../types';
import { LayoutDashboard, FormInput, MonitorPlay, Image, Film, Palette, Layers, Book } from 'lucide-react';

interface SidebarProps {
  selectedScene: SceneType;
  onSelectScene: (scene: SceneType) => void;
}

const SceneIcon = ({ scene }: { scene: SceneType }) => {
  switch (scene) {
    case SceneType.DASHBOARD: return <LayoutDashboard size={20} />;
    case SceneType.FORM: return <FormInput size={20} />;
    case SceneType.LANDING: return <MonitorPlay size={20} />;
    case SceneType.GALLERY: return <Image size={20} />;
    case SceneType.ANIMATION: return <Film size={20} />;
    case SceneType.DESIGN: return <Palette size={20} />;
    case SceneType.LAYOUT_LAB: return <Layers size={20} />;
    case SceneType.DOCS: return <Book size={20} />;
    default: return <LayoutDashboard size={20} />;
  }
};

export const Sidebar: React.FC<SidebarProps> = ({ selectedScene, onSelectScene }) => {
  const scenes = Object.values(SceneType);

  return (
    <nav className="h-full flex flex-col bg-slate-900 border-r border-slate-800">
      <div className="p-6">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
          UI Scenes (탐색할 화면)
        </h2>
        
        <ul className="space-y-2">
          {scenes.map((scene) => (
            <li key={scene}>
              <button
                onClick={() => onSelectScene(scene)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left
                  ${selectedScene === scene
                    ? 'bg-slate-800 text-primary-400 shadow-md ring-1 ring-slate-700' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                `}
              >
                <div className={`${selectedScene === scene ? 'text-primary-400' : 'text-slate-500'}`}>
                  <SceneIcon scene={scene} />
                </div>
                <div className="flex-1">
                  <span className="block font-semibold">{scene.split('(')[0].trim()}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500">
                    {scene.match(/\(([^)]+)\)/)?.[1] || scene.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto p-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            💡 Tip: 화면 속의 UI 요소들을 직접 클릭해보세요. 우측 패널에서 상세한 설명이 나타납니다.
          </p>
        </div>
      </div>
    </nav>
  );
};