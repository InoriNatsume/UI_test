import React from 'react';
import { TermSpotlight } from '../TermSpotlight';
import { Save, User, Lock, Bell } from 'lucide-react';

export const FormScene: React.FC<{ onTermSelect: (id: string) => void, activeTermId: string | null }> = ({ onTermSelect, activeTermId }) => {
  return (
    <div className="flex h-full w-full bg-slate-950 justify-center overflow-y-auto py-10 relative border border-slate-700 rounded-xl shadow-2xl">
      <TermSpotlight 
        termId="container" 
        label="Container (Max Width)" 
        isActive={activeTermId === 'container'} 
        onSelect={onTermSelect}
        className="w-full max-w-2xl px-4"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Account Settings</h1>
          <p className="text-slate-400 mt-2">Manage your profile and preferences</p>
        </div>

        <TermSpotlight 
          termId="card" 
          label="Card" 
          isActive={activeTermId === 'card'} 
          onSelect={onTermSelect}
          className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden"
        >
          {/* Tabs / Segmented Control */}
          <TermSpotlight 
             termId="segmented-control" 
             label="Segmented Control / Tabs" 
             isActive={activeTermId === 'segmented'} 
             onSelect={onTermSelect}
             className="flex border-b border-slate-800 bg-slate-900"
          >
            <button className="flex-1 py-4 text-sm font-medium text-primary-400 border-b-2 border-primary-500 flex justify-center items-center gap-2 bg-slate-800/50">
              <User size={16} /> Profile
            </button>
            <button className="flex-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-300 flex justify-center items-center gap-2 hover:bg-slate-800/30">
              <Lock size={16} /> Security
            </button>
            <button className="flex-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-300 flex justify-center items-center gap-2 hover:bg-slate-800/30">
              <Bell size={16} /> Notifications
            </button>
          </TermSpotlight>

          <div className="p-8 space-y-8">
            {/* Input Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TermSpotlight termId="text-field" label="Text Field (Label + Input)" isActive={activeTermId === 'textfield'} onSelect={onTermSelect}>
                <label className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
                <input type="text" defaultValue="Chulsu" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:ring-2 focus:ring-primary-500 outline-none placeholder-slate-500" />
              </TermSpotlight>
              
              <TermSpotlight termId="text-field" label="Text Field" isActive={activeTermId === 'textfield'} onSelect={onTermSelect}>
                <label className="block text-sm font-medium text-slate-300 mb-1">Last Name</label>
                <input type="text" defaultValue="Kim" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:ring-2 focus:ring-primary-500 outline-none placeholder-slate-500" />
              </TermSpotlight>
            </div>

            <TermSpotlight termId="text-field" label="Text Field (Email)" isActive={activeTermId === 'textfield'} onSelect={onTermSelect}>
              <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
              <div className="relative">
                <input type="email" defaultValue="ui.lexicon@example.com" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 pl-10 text-slate-200 focus:ring-2 focus:ring-primary-500 outline-none placeholder-slate-500" />
                <span className="absolute left-3 top-2.5 text-slate-500">@</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">We'll use this for account notifications.</p>
            </TermSpotlight>

            <hr className="border-slate-800" />

            {/* Checkbox Section */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-4">Email Preferences</h3>
              <div className="space-y-3">
                <TermSpotlight termId="checkbox" label="Checkbox" isActive={activeTermId === 'checkbox'} onSelect={onTermSelect} className="flex items-start">
                   <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-primary-600 rounded border-slate-700 bg-slate-800 focus:ring-offset-slate-900" />
                   <div className="ml-3">
                     <label className="text-sm font-medium text-slate-300">Product Updates</label>
                     <p className="text-xs text-slate-500">Receive new features and updates.</p>
                   </div>
                </TermSpotlight>
                <TermSpotlight termId="checkbox" label="Checkbox" isActive={activeTermId === 'checkbox'} onSelect={onTermSelect} className="flex items-start">
                   <input type="checkbox" className="mt-1 w-4 h-4 text-primary-600 rounded border-slate-700 bg-slate-800 focus:ring-offset-slate-900" />
                   <div className="ml-3">
                     <label className="text-sm font-medium text-slate-300">Marketing Newsletter</label>
                     <p className="text-xs text-slate-500">Discounts and promotions.</p>
                   </div>
                </TermSpotlight>
              </div>
            </div>

            <hr className="border-slate-800" />

            {/* Radio Section */}
            <div>
              <h3 className="font-semibold text-slate-200 mb-4">Profile Visibility</h3>
              <TermSpotlight termId="radio" label="Radio Group" isActive={activeTermId === 'radio'} onSelect={onTermSelect} className="space-y-3">
                <label className="flex items-center">
                  <input type="radio" name="visibility" defaultChecked className="w-4 h-4 text-primary-600 border-slate-700 bg-slate-800 focus:ring-offset-slate-900" />
                  <span className="ml-3 text-sm text-slate-300">Public (Everyone can see)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="visibility" className="w-4 h-4 text-primary-600 border-slate-700 bg-slate-800 focus:ring-offset-slate-900" />
                  <span className="ml-3 text-sm text-slate-300">Private (Only me)</span>
                </label>
              </TermSpotlight>
            </div>

             <hr className="border-slate-800" />

             {/* Toggle Section */}
             <div className="flex items-center justify-between">
               <div>
                 <h3 className="font-semibold text-slate-200">Two-Factor Authentication</h3>
                 <p className="text-xs text-slate-500">Add an extra layer of security.</p>
               </div>
               <TermSpotlight termId="toggle" label="Toggle Switch" isActive={activeTermId === 'toggle'} onSelect={onTermSelect}>
                 <button className="bg-primary-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ring-offset-slate-900">
                   <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                 </button>
               </TermSpotlight>
             </div>
          </div>

          {/* Footer of Card */}
          <div className="bg-slate-900 px-8 py-4 border-t border-slate-800 flex justify-between items-center">
             <button className="text-sm text-red-400 hover:text-red-300 font-medium">Delete Account</button>
             <div className="flex gap-3">
               <button className="px-4 py-2 border border-slate-700 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 bg-slate-900 transition-colors">Cancel</button>
               <TermSpotlight termId="toast" label="Button (Triggers Toast)" isActive={activeTermId === 'toast'} onSelect={onTermSelect}>
                 <button className="px-4 py-2 bg-primary-600 rounded-lg text-sm font-medium text-white hover:bg-primary-500 flex items-center gap-2 shadow-sm transition-colors">
                   <Save size={16} /> Save Changes
                 </button>
               </TermSpotlight>
             </div>
          </div>
        </TermSpotlight>
      </TermSpotlight>
    </div>
  );
};