
import React, { useState } from 'react';
import { 
  Lock, 
  ChevronRight, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  HelpCircle,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  AlertCircle
} from 'lucide-react';

interface PaymentPageProps {
  onSuccess: () => void;
  onBack: () => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ onSuccess, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bank'>('card');

  return (
    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 pb-20 animate-in fade-in zoom-in-95 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-2 gap-4">
        <div className="flex items-center gap-3 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
          <button onClick={onBack} className="hover:text-gray-900 transition-colors">Review</button>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-amber-500">Payment</span>
        </div>
        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-100 shadow-sm shrink-0">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="text-[9px] font-black uppercase tracking-wider">Secure Connection</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Left Column: Payment Details */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 px-2">
          <div className="bg-white rounded-[28px] sm:rounded-[40px] border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8 sm:space-y-10">
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-black text-gray-900">Choose Payment Method</h1>
              <p className="text-xs sm:text-sm font-medium text-gray-400">Select how you'd like to pay</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'card', label: 'Card', icon: <CreditCard className="w-5 h-5" /> },
                { id: 'paypal', label: 'PayPal', icon: <div className="font-black italic text-blue-800 text-sm">PP</div> },
                { id: 'bank', label: 'Bank', icon: <Briefcase className="w-5 h-5" /> }
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id as any)}
                  className={`p-5 sm:p-6 rounded-2xl border-2 transition-all flex flex-row sm:flex-col items-center gap-4 relative ${
                    paymentMethod === method.id 
                      ? 'bg-amber-50 border-amber-400 shadow-md' 
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${paymentMethod === method.id ? 'bg-white text-amber-600 shadow-sm' : 'bg-gray-50 text-gray-400'}`}>
                    {method.icon}
                  </div>
                  <span className={`text-[13px] font-black ${paymentMethod === method.id ? 'text-gray-900' : 'text-gray-400'}`}>
                    {method.label}
                  </span>
                </button>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <div className="space-y-5 sm:space-y-6 pt-2 animate-in slide-in-from-top-2 duration-300">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Cardholder Name</label>
                  <input type="text" placeholder="Full name on card" className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-4 text-[14px] font-bold text-black outline-none focus:border-amber-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-4 text-[14px] font-bold text-black outline-none focus:border-amber-400" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Expiry</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-4 text-[14px] font-bold text-black outline-none focus:border-amber-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">CVV</label>
                    <input type="password" placeholder="***" maxLength={3} className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-4 text-[14px] font-bold text-black outline-none focus:border-amber-400" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 shrink-0" />
            <div className="space-y-1">
              <p className="text-[13px] sm:text-[14px] font-black text-amber-900 leading-tight">100% Guarantee</p>
              <p className="text-[11px] sm:text-[13px] text-amber-700 font-medium opacity-80 leading-relaxed italic">
                Full refund within 14 days if not satisfied.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 px-2">
          <div className="bg-white rounded-[28px] sm:rounded-[40px] border border-gray-100 p-8 sm:p-10 shadow-xl shadow-gray-200/50 space-y-6 sm:space-y-8 lg:sticky lg:top-28">
            <h3 className="text-xl font-black text-gray-900">Summary</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[14px] font-black text-gray-900 leading-tight">Corporate Internship</h4>
                  <p className="text-[11px] font-bold text-gray-400 italic">Summer 2025</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-[13px] font-bold text-gray-500">
                  <span>Reg. Fee</span>
                  <span className="text-gray-900 font-black">$350.00</span>
                </div>
                <div className="flex justify-between items-center text-[13px] font-bold text-green-500">
                  <span>Discount</span>
                  <span className="font-black">-$101.00</span>
                </div>
                <div className="h-px bg-gray-50 my-2"></div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-black text-gray-900">Total</span>
                  <span className="text-2xl sm:text-3xl font-black text-gray-900">$299.00</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button onClick={onSuccess} className="w-full bg-gray-900 hover:bg-black text-white font-black py-4 sm:py-5 rounded-xl sm:rounded-[24px] shadow-lg flex items-center justify-center gap-3 transition-all active:scale-95">
                Pay Securely <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex justify-center items-center gap-2 text-[9px] font-black text-gray-300 uppercase tracking-widest">
                <Lock className="w-3 h-3" /> SSL Secured
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
