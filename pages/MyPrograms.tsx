
import React from 'react';
import { 
  Plus, 
  ExternalLink, 
  MessageCircle, 
  MoreVertical, 
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Users,
  PlayCircle,
  BookOpen,
  Clock,
  UploadCloud,
  FileText,
  Download,
  Share2,
  Star,
  ChevronDown,
  XCircle,
  Video,
  ArrowRight,
  HelpCircle,
  Smartphone,
  PieChart,
  Palette
} from 'lucide-react';
import { ProgramStatus } from '../types';

export const MyPrograms: React.FC = () => {
  const programs = [
    {
      id: '1',
      title: 'Full Stack Web Development',
      university: 'Stanford University',
      duration: '6 Months',
      startDate: 'Jan 15, 2025',
      status: 'Enrolled',
      statusColor: 'bg-green-50 text-green-600',
      icon: <Smartphone className="w-6 h-6" />,
      iconBg: 'bg-purple-600',
      applicationId: '#LWL-2024-001',
      steps: [
        { label: 'Form Submitted', date: 'Oct 12', status: 'completed' },
        { label: 'Interview Done', date: 'Oct 28', status: 'completed' },
        { label: 'Offer Sent', date: 'Nov 5', status: 'completed' },
        { label: 'Payment Done', date: 'Nov 8', status: 'completed' },
        { label: 'Program', status: 'current', icon: <Users className="w-4 h-4" /> },
        { label: 'Certificate', status: 'upcoming' }
      ],
      alert: {
        type: 'info',
        title: 'Keep up the great work!',
        desc: "You're making excellent progress."
      },
      actions: [{ label: 'View Details', type: 'primary', icon: <PlayCircle className="w-4 h-4" /> }]
    },
    {
      id: '2',
      title: 'AI Fundamentals',
      university: 'MIT',
      duration: '8 Months',
      startDate: 'Feb 1, 2025',
      status: 'Payment Pending',
      statusColor: 'bg-amber-50 text-amber-600',
      icon: <PieChart className="w-6 h-6" />,
      iconBg: 'bg-amber-500',
      applicationId: '#LWL-2024-002',
      steps: [
        { label: 'Form', date: 'Oct 20', status: 'completed' },
        { label: 'Interview', date: 'Nov 3', status: 'completed' },
        { label: 'Offer', date: 'Nov 10', status: 'completed' },
        { label: 'Payment', status: 'action', date: 'Pending' },
        { label: 'Learning', status: 'upcoming' },
        { label: 'Certificate', status: 'upcoming' }
      ],
      alert: {
        type: 'warning',
        title: 'Complete payment to secure seat',
        desc: "Offer received! Confirm by Nov 30."
      },
      actions: [
        { label: 'Pay Now', type: 'primary', icon: <PlayCircle className="w-4 h-4" /> }
      ]
    }
  ];

  const quickActions = [
    { label: 'Interview', sub: 'Book slot', icon: <Calendar className="w-5 h-5 text-blue-500" />, bg: 'bg-blue-50' },
    { label: 'Payment', sub: 'Finalize enrollment', icon: <PlayCircle className="w-5 h-5 text-green-500" />, bg: 'bg-green-50' },
    { label: 'Materials', sub: 'Access resources', icon: <Download className="w-5 h-5 text-purple-500" />, bg: 'bg-purple-50' },
    { label: 'Consent', sub: 'Upload signed form', icon: <UploadCloud className="w-5 h-5 text-amber-500" />, bg: 'bg-amber-50' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-10 bg-[#FFF9E1] rounded-[32px] sm:rounded-[40px] border border-amber-100/50 gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">My Programs</h1>
          <p className="text-[13px] sm:text-sm text-gray-500 font-medium opacity-80">Track your application and progress</p>
        </div>
        <button className="w-full sm:w-auto bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-black px-8 py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-500/10 active:scale-95">
          <Plus className="w-5 h-5" /> Explore New
        </button>
      </div>

      {/* Program Cards */}
      <div className="space-y-6">
        {programs.map(program => (
          <div key={program.id} className="bg-white border border-gray-100 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 space-y-6 sm:space-y-8 hover:shadow-xl transition-all group overflow-x-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className={`${program.iconBg} w-12 h-12 sm:w-14 sm:h-14 rounded-[18px] sm:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}>
                  {program.icon}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[17px] sm:text-[19px] font-black text-gray-900 leading-tight">{program.title}</h3>
                    <span className={`${program.statusColor} text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shrink-0`}>
                      {program.status === 'Enrolled' ? <CheckCircle2 className="w-3 h-3" /> : <div className="w-1 h-1 rounded-full bg-current"></div>}
                      {program.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="text-[11px] sm:text-[12px] text-gray-400 font-bold flex items-center gap-1.5"><BookOpen className="w-4 h-4 opacity-40" /> {program.university}</span>
                    <span className="text-[11px] sm:text-[12px] text-gray-400 font-bold flex items-center gap-1.5"><Clock className="w-4 h-4 opacity-40" /> {program.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Journey Horizontal Stepper (Mobile Scrollable) */}
            <div className="space-y-4">
              <div className="flex justify-between items-center px-1">
                <h4 className="text-[11px] sm:text-[12px] font-black text-gray-900 uppercase tracking-widest">Journey</h4>
                <span className="text-[10px] font-bold text-gray-400">{program.applicationId}</span>
              </div>
              
              <div className="relative overflow-x-auto custom-scrollbar pb-6 px-1">
                <div className="min-w-[600px] relative">
                  {/* Background Line */}
                  <div className="absolute top-[20px] left-10 right-10 h-[2px] bg-gray-100 -z-0"></div>
                  
                  <div className="flex justify-between relative z-10">
                    {program.steps.map((step, idx) => {
                      const isCompleted = step.status === 'completed';
                      const isCurrent = step.status === 'current';
                      const isError = step.status === 'error';
                      const isAction = step.status === 'action';
                      
                      let dotColor = "bg-gray-100";
                      let textColor = "text-gray-300";
                      
                      if (isCompleted) { dotColor = "bg-green-600"; textColor = "text-gray-900"; }
                      else if (isCurrent) { dotColor = "bg-green-600"; textColor = "text-gray-900"; }
                      else if (isError) { dotColor = "bg-red-500"; textColor = "text-red-500"; }
                      else if (isAction) { dotColor = "bg-blue-600"; textColor = "text-blue-600"; }

                      return (
                        <div key={idx} className="flex flex-col items-center w-24 sm:w-32 text-center px-1">
                          <div className={`${dotColor} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white border-4 border-white shadow-sm shrink-0`}>
                            {isCompleted ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> : 
                             isError ? <XCircle className="w-4 h-4 sm:w-5 sm:h-5" /> :
                             <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                          </div>
                          <span className={`text-[10px] sm:text-[11px] mt-2 font-black leading-tight line-clamp-1 ${textColor}`}>{step.label}</span>
                          {step.date && <span className={`text-[9px] mt-0.5 font-bold opacity-60`}>{step.date}</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-gray-50">
              <div className="flex gap-3 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0">
                {program.actions.map((action, aidx) => (
                  <button 
                    key={aidx} 
                    className={`whitespace-nowrap px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl text-[12px] sm:text-[13px] font-black flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      action.type === 'primary' 
                        ? 'bg-[#FFCC4D] text-gray-900 shadow-sm' 
                        : 'bg-white border-2 border-gray-100 text-gray-700'
                    }`}
                  >
                    {action.icon}{action.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 self-end">
                <button className="p-3 text-gray-400 hover:text-gray-900 transition-colors"><MoreVertical className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions Grid */}
      <div className="space-y-6 pt-4">
        <h2 className="text-[22px] sm:text-[28px] font-black text-gray-900 px-2">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickActions.map((action, i) => (
            <div key={i} className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-all cursor-pointer group flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${action.bg} rounded-[18px] sm:rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shrink-0`}>
                {action.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-[14px] sm:text-[15px] font-black text-gray-900 group-hover:text-amber-500 transition-colors line-clamp-1">{action.label}</h4>
                <p className="hidden sm:block text-[11px] sm:text-[12px] text-gray-400 font-bold opacity-80">{action.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
