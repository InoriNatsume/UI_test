import React from 'react';
import { TermSpotlight } from '../TermSpotlight';
import { Search, Bell, Menu, MoreVertical, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

export const DashboardScene: React.FC<{ onTermSelect: (id: string) => void, activeTermId: string | null }> = ({ onTermSelect, activeTermId }) => {
  return (
    <div className="flex h-full w-full bg-slate-900 overflow-hidden relative border border-slate-700 rounded-xl shadow-2xl">
      {/* Sidebar */}
      <TermSpotlight 
        termId="sidebar" 
        label="Sidebar" 
        isActive={activeTermId === 'sidebar'} 
        onSelect={onTermSelect}
        className="w-64 bg-slate-950 text-white hidden md:flex flex-col h-full shrink-0 border-r border-slate-800"
      >
        <div className="p-4 flex items-center gap-2 border-b border-slate-800 h-16">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center font-bold text-white">L</div>
          <span className="font-bold text-lg text-white">Lexicon Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {['Dashboard', 'Analytics', 'Customers', 'Settings'].map((item, i) => (
            <div key={item} className={`p-3 rounded-lg text-sm font-medium ${i === 0 ? 'bg-primary-900/50 text-primary-400 border border-primary-800' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
              {item}
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700"></div>
             <div className="text-xs">
               <div className="text-white">Admin User</div>
               <div className="text-slate-500">admin@test.com</div>
             </div>
           </div>
        </div>
      </TermSpotlight>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-900">
        {/* Header */}
        <TermSpotlight 
          termId="header" 
          label="Header" 
          isActive={activeTermId === 'header'} 
          onSelect={onTermSelect}
          className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0"
        >
          <div className="flex items-center gap-4">
            <Menu className="md:hidden text-slate-400" />
            <TermSpotlight 
              termId="textfield" 
              label="Text Field (Search)" 
              isActive={activeTermId === 'textfield'} 
              onSelect={onTermSelect}
              className="relative hidden sm:block w-64"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 focus:ring-2 focus:ring-primary-500 outline-none placeholder:text-slate-600" 
                readOnly
              />
            </TermSpotlight>
          </div>
          <div className="flex items-center gap-4">
            <TermSpotlight 
              termId="tooltip" 
              label="Tooltip / Icon" 
              isActive={activeTermId === 'tooltip'} 
              onSelect={onTermSelect}
            >
              <button className="p-2 text-slate-400 hover:bg-slate-800 rounded-full relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900"></span>
              </button>
            </TermSpotlight>
          </div>
        </TermSpotlight>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <TermSpotlight 
            termId="container" 
            label="Container" 
            isActive={activeTermId === 'container'} 
            onSelect={onTermSelect}
            className="max-w-6xl mx-auto space-y-6"
          >
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
                <TermSpotlight termId="breadcrumbs" label="Breadcrumbs" isActive={activeTermId === 'breadcrumbs'} onSelect={onTermSelect} className="mt-1">
                  <div className="flex items-center text-xs text-slate-500 gap-2">
                    <span>Home</span> <span>/</span> <span className="text-primary-400 font-medium">Dashboard</span>
                  </div>
                </TermSpotlight>
              </div>
              <TermSpotlight termId="segmented-control" label="Segmented Control" isActive={activeTermId === 'segmented'} onSelect={onTermSelect}>
                <div className="bg-slate-800 p-1 rounded-lg border border-slate-700 flex text-xs">
                  <button className="px-3 py-1.5 bg-slate-700 font-medium rounded text-white shadow-sm border border-slate-600">Daily</button>
                  <button className="px-3 py-1.5 text-slate-400 hover:bg-slate-700 hover:text-white rounded">Weekly</button>
                </div>
              </TermSpotlight>
            </div>

            {/* Grid Stats */}
            <TermSpotlight 
              termId="grid" 
              label="Grid Layout" 
              isActive={activeTermId === 'grid'} 
              onSelect={onTermSelect}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                { label: 'Total Revenue', value: '$45,231', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-900/30' },
                { label: 'Active Users', value: '2,345', icon: Users, color: 'text-blue-400', bg: 'bg-blue-900/30' },
                { label: 'Bounce Rate', value: '12.5%', icon: Activity, color: 'text-rose-400', bg: 'bg-rose-900/30' },
                { label: 'Growth', value: '+24.5%', icon: TrendingUp, color: 'text-indigo-400', bg: 'bg-indigo-900/30' },
              ].map((stat, i) => (
                <TermSpotlight 
                  key={i} 
                  termId="card" 
                  label="Card" 
                  isActive={activeTermId === 'card'} 
                  onSelect={onTermSelect}
                  className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                      <stat.icon size={18} />
                    </div>
                    <button className="text-slate-500 hover:text-slate-300"><MoreVertical size={16} /></button>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
                </TermSpotlight>
              ))}
            </TermSpotlight>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <TermSpotlight termId="card" label="Card (Main)" isActive={activeTermId === 'card'} onSelect={onTermSelect} className="lg:col-span-2 bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-6 min-h-[300px]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-slate-200">Revenue Analytics</h3>
                  <TermSpotlight termId="dropdown" label="Dropdown" isActive={activeTermId === 'dropdown'} onSelect={onTermSelect}>
                     <select className="text-xs border border-slate-600 rounded-md py-1 px-2 bg-slate-700 text-slate-300">
                       <option>This Year</option>
                       <option>Last Year</option>
                     </select>
                  </TermSpotlight>
                </div>
                <div className="flex items-end gap-2 h-48 px-4 border-b border-slate-700/50">
                  {[40, 60, 45, 70, 85, 65, 55, 75, 50, 60, 80, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary-900/50 hover:bg-primary-500 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block text-[10px] bg-white text-slate-900 px-1.5 py-0.5 rounded font-bold">{h}%</div>
                    </div>
                  ))}
                </div>
              </TermSpotlight>

              <TermSpotlight termId="card" label="Card (Side)" isActive={activeTermId === 'card'} onSelect={onTermSelect} className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-6">
                <h3 className="font-bold text-slate-200 mb-4">Recent Activity</h3>
                <TermSpotlight termId="skeleton" label="Skeleton Loader" isActive={activeTermId === 'skeleton'} onSelect={onTermSelect} className="space-y-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="flex items-center gap-3 animate-pulse">
                      <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                        <div className="h-2 bg-slate-700/50 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </TermSpotlight>
              </TermSpotlight>
            </div>
          </TermSpotlight>
        </div>
      </div>
    </div>
  );
};