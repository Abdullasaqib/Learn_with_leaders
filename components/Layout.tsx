
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  UserCircle, 
  Compass, 
  Award, 
  GraduationCap, 
  PenTool, 
  FileSearch, 
  HelpCircle, 
  MessageSquare,
  Search,
  Bell,
  ChevronDown,
  X,
  Briefcase,
  Menu,
  Maximize2,
  Settings,
  Sun
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void; isOpen: boolean; onClose: () => void }> = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, section: 'Main' },
    { id: 'profile', label: 'My Profile', icon: UserCircle, section: 'Main' },
    { id: 'my-programs', label: 'My Programs', icon: Briefcase, section: 'Programs' },
    { id: 'explore', label: 'Explore Programs', icon: Compass, section: 'Programs' },
    { id: 'certificates', label: 'Certificates', icon: Award, section: 'Programs' },
    { id: 'masterclasses', label: 'Masterclasses', icon: GraduationCap, section: 'Resources' },
    { id: 'skills-studio', label: 'Skills Studio', icon: PenTool, section: 'Resources' },
    { id: 'resources', label: 'Resources', icon: FileSearch, section: 'Resources' },
    { id: 'help', label: 'Help Center', icon: HelpCircle, section: 'Support' },
    { id: 'contact', label: 'Contact Us', icon: MessageSquare, section: 'Support' },
  ];

  const sections = ['Main', 'Programs', 'Resources', 'Support'];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      
      <div className={`w-[280px] bg-[#cbd5e1]/40 border-r border-gray-100 h-screen fixed left-0 top-0 overflow-y-auto custom-scrollbar z-[70] transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-8">
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-10 pl-2">
            <div className="text-amber-500">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 30C40 30 60 40 80 20C75 45 60 60 20 60C30 50 25 35 20 30Z" fill="currentColor"/>
                <path d="M25 65C45 65 65 75 85 55C80 80 65 95 25 95C35 85 30 70 25 65Z" fill="currentColor" opacity="0.6"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[9px] text-gray-600 tracking-[0.2em] leading-none mb-1">LEARN WITH</span>
              <span className="font-black text-xl text-gray-900 leading-none tracking-tight">LEADERS</span>
            </div>
            <button className="lg:hidden ml-auto p-2 hover:bg-white/50 rounded-xl" onClick={onClose}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Navigation Sections */}
          {sections.map(section => (
            <div key={section} className="mb-8">
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 px-4">
                {section}
              </h3>
              <div className="space-y-1.5">
                {menuItems.filter(item => item.section === section).map(item => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActiveTab(item.id); onClose(); }}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-[14px] font-bold transition-all group ${
                        isActive 
                          ? 'bg-[#FFF9E1] text-gray-900 shadow-sm' 
                          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-amber-100/50 text-amber-600' : 'bg-white/50 text-gray-400 group-hover:text-gray-600'
                      }`}>
                        <item.icon className="w-[18px] h-[18px]" />
                      </div>
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Header: React.FC<{ onOpenMobileMenu: () => void }> = ({ onOpenMobileMenu }) => {
  return (
    <header className="h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-12 fixed top-0 left-0 lg:left-[280px] right-0 z-40">
      <div className="flex items-center gap-4">
        <button 
          className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
          onClick={onOpenMobileMenu}
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        <div className="relative w-full max-w-[180px] sm:max-w-[300px] lg:w-[450px]">
          <Search className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-gray-50 border border-transparent rounded-2xl py-2 lg:py-3 pl-10 lg:pl-12 pr-4 lg:pr-12 text-[14px] font-medium focus:outline-none focus:bg-white focus:border-amber-400/30 focus:ring-4 focus:ring-amber-400/5 transition-all placeholder:text-gray-400"
          />
          <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 items-center gap-1">
            <span className="text-[10px] font-black text-gray-300 bg-gray-100 px-1.5 py-0.5 rounded">⌘</span>
            <span className="text-[10px] font-black text-gray-300 bg-gray-100 px-1.5 py-0.5 rounded">F</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <div className="flex items-center gap-1 lg:gap-2 bg-gray-50 p-1 lg:p-1.5 rounded-full border border-gray-100">
          <button className="p-1.5 lg:p-2 rounded-full bg-white shadow-sm text-amber-500 hover:scale-105 transition-all"><Sun className="w-3.5 lg:w-4 h-3.5 lg:h-4" /></button>
          <button className="hidden sm:block p-1.5 lg:p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
            <Bell className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="hidden sm:block p-1.5 lg:p-2 text-gray-400 hover:text-gray-600 transition-colors"><Settings className="w-3.5 lg:w-4 h-3.5 lg:h-4" /></button>
          <button className="hidden sm:block p-1.5 lg:p-2 text-gray-400 hover:text-gray-600 transition-colors"><Maximize2 className="w-3.5 lg:w-4 h-3.5 lg:h-4" /></button>
        </div>
        <div className="flex items-center gap-2 lg:gap-4 pl-2 lg:pl-4 border-l border-gray-100">
          <div className="w-8 lg:w-9 h-8 lg:h-9 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-gray-100">
            <img src="https://picsum.photos/id/64/100/100" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <ChevronDown className="hidden sm:block w-3 lg:w-4 h-3 lg:h-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      <div className={`flex-1 min-h-screen pt-20 transition-all duration-300 ${isMobileMenuOpen ? 'blur-sm lg:blur-none' : ''} lg:ml-[280px]`}>
        <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
        <main className="p-4 sm:p-6 lg:p-10">
          {children}
        </main>
        <footer className="p-6 lg:p-10 border-t border-gray-100 text-center text-gray-300 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em]">
          © 2025 Learn With Leaders. All rights reserved.
        </footer>
      </div>
    </div>
  );
};
