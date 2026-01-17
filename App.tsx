import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Inspector } from './components/Inspector';
import { DashboardScene } from './components/scenes/DashboardScene';
import { FormScene } from './components/scenes/FormScene';
import { LandingScene } from './components/scenes/LandingScene';
import { GalleryScene } from './components/scenes/GalleryScene';
import { AnimationScene } from './components/scenes/AnimationScene';
import { DesignScene } from './components/scenes/DesignScene';
import { LayoutScene } from './components/scenes/LayoutScene';
import { DocsScene } from './components/scenes/DocsScene';
import { UITerms } from './data/terms';
import { UITerm, SceneType } from './types';

const App: React.FC = () => {
  const [selectedScene, setSelectedScene] = useState<SceneType>(SceneType.DASHBOARD);
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed on mobile

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSceneSelect = (scene: SceneType) => {
    setSelectedScene(scene);
    setSelectedTermId(null); // Reset term selection when changing scene
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  const handleTermSelect = (termId: string) => {
    setSelectedTermId(termId === selectedTermId ? null : termId); // Toggle
  };

  const selectedTerm = selectedTermId ? UITerms.find(t => t.id === selectedTermId) || null : null;

  const renderScene = () => {
    switch (selectedScene) {
      case SceneType.DASHBOARD:
        return <DashboardScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
      case SceneType.FORM:
        return <FormScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
      case SceneType.LANDING:
        return <LandingScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
      case SceneType.GALLERY:
        return <GalleryScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
      case SceneType.ANIMATION:
        return <AnimationScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
      case SceneType.DESIGN:
        return <DesignScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
      case SceneType.LAYOUT_LAB:
        return <LayoutScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
      case SceneType.DOCS:
        return <DocsScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
      default:
        return <DashboardScene onTermSelect={handleTermSelect} activeTermId={selectedTermId} />;
    }
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-950 text-slate-200">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <div 
          className={`
            fixed inset-y-0 left-0 z-40 w-72 transform bg-slate-900 border-r border-slate-800 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 pt-16 lg:pt-0 shadow-xl lg:shadow-none
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <Sidebar 
            selectedScene={selectedScene}
            onSelectScene={handleSceneSelect}
          />
        </div>

        {/* Main Content Area (Scene) */}
        <main className="flex-1 overflow-hidden bg-slate-950 p-4 md:p-6 lg:p-8 relative">
           {/* Scene Container */}
           <div className="w-full h-full max-w-[1600px] mx-auto transition-all duration-300 ease-in-out">
              {renderScene()}
           </div>
        </main>
        
        {/* Right Panel (Inspector) */}
        {selectedTerm && (
          <div className="absolute inset-y-0 right-0 z-30 w-full md:w-[400px] lg:w-[450px] shadow-2xl transition-transform duration-300 transform translate-x-0">
            <Inspector 
              term={selectedTerm} 
              onClose={() => setSelectedTermId(null)} 
            />
          </div>
        )}

        {/* Mobile Overlay for Sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/70 z-30 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;