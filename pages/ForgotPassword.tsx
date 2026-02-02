
import React from 'react';
import { Mail, Phone, MessageSquare, ShieldCheck, HelpCircle, Headphones, BookOpen, Award, ArrowLeft } from 'lucide-react';

interface ForgotPasswordProps {
  onBackToLogin: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBackToLogin }) => {
  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      {/* Left Section - Recovery Info */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-[#FFF9E5] p-16 flex-col justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 relative z-10">
          <div className="bg-amber-400 p-2 rounded-lg">
            <Award className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-sm block leading-none text-gray-800 tracking-tight">LEARN WITH</span>
            <span className="font-bold text-xl block text-gray-900 leading-none">LEADERS</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-md">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Secure Password Recovery
          </h1>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Don't worry! It happens to the best of us. We'll help you regain access to your leadership journey in just a few simple steps.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[100px] -mr-32 -mb-32"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/20 rounded-full -mr-20 -mb-20"></div>
      </div>

      {/* Right Section - Reset Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Reset Your Password</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enter your email, and we'll send a reset link to get you back on track with your leadership journey.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                <input 
                  type="email" 
                  placeholder="Enter your registered email address" 
                  className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-all"
                />
              </div>
            </div>

            <button 
              className="w-full bg-[#FFCC4D] hover:bg-[#FFB800] text-gray-900 font-bold py-4 rounded-xl shadow-lg shadow-amber-500/10 transition-all transform active:scale-[0.98]"
            >
              Send Reset Link
            </button>
          </div>

          {/* Help Options */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <p className="text-sm font-medium text-gray-600">Need help? Try these options:</p>
            <div className="grid gap-3">
              <button className="flex items-center justify-center gap-3 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Phone className="w-4 h-4 text-blue-500" />
                Contact Support
              </button>
              <button className="flex items-center justify-center gap-3 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <MessageSquare className="w-4 h-4 text-green-500" />
                Live Chat Support
              </button>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="text-sm">
              <span className="text-gray-500">Remember your password?</span><br />
              <button 
                onClick={onBackToLogin}
                className="font-semibold text-blue-600 hover:underline mt-1"
              >
                Back to Login
              </button>
            </div>

            {/* Security Notice */}
            <div className="bg-[#EBF5FF] border border-blue-100 rounded-xl p-4 flex gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
              <div className="space-y-1">
                <p className="text-xs font-bold text-blue-900">Your Security Matters</p>
                <p className="text-[10px] leading-relaxed text-blue-700">
                  We use industry-standard encryption to protect your account. Reset links expire in 30 minutes for your security.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-[11px] font-medium text-gray-400 mb-4">Still having trouble?</p>
              <div className="flex items-center justify-center gap-6">
                <button className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold hover:text-gray-800">
                  <HelpCircle className="w-3.5 h-3.5" /> FAQ
                </button>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <button className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold hover:text-gray-800">
                  <Headphones className="w-3.5 h-3.5" /> Support
                </button>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <button className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold hover:text-gray-800">
                  <BookOpen className="w-3.5 h-3.5" /> Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
