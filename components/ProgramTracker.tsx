
import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { ProgramStatus } from '../types';

// Exported Step interface to resolve type inference issues in MyPrograms.tsx
export interface Step {
  label: string;
  date?: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ProgramTrackerProps {
  status: ProgramStatus;
  steps: Step[];
  applicationId: string;
}

export const ProgramTracker: React.FC<ProgramTrackerProps> = ({ status, steps, applicationId }) => {
  return (
    <div className="mt-6 border-t pt-6">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-semibold text-gray-800">Application Journey</h4>
        <span className="text-xs text-gray-400">Application ID: {applicationId}</span>
      </div>

      <div className="relative flex justify-between">
        {/* Progress Line */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-100 -z-0"></div>
        <div 
          className="absolute top-4 left-0 h-0.5 bg-green-500 transition-all duration-500" 
          style={{ width: `${(steps.filter(s => s.status === 'completed').length / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 bg-white ${
              step.status === 'completed' ? 'border-green-500 text-green-500' :
              step.status === 'current' ? 'border-amber-400 text-amber-400' :
              'border-gray-100 text-gray-200'
            }`}>
              {step.status === 'completed' ? <CheckCircle2 className="w-5 h-5 fill-current bg-white rounded-full" /> : 
               step.status === 'current' ? <Clock className="w-4 h-4" /> : 
               <Circle className="w-4 h-4" />}
            </div>
            <span className={`text-[11px] mt-2 font-medium ${step.status === 'upcoming' ? 'text-gray-300' : 'text-gray-700'}`}>
              {step.label}
            </span>
            {step.date && (
              <span className="text-[10px] text-gray-400 mt-0.5">{step.date}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
