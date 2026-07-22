import React, { useState } from 'react';
import { Send, Phone, User, HelpCircle } from 'lucide-react';
import { createWhatsAppQuickInquiryUrl } from '../utils/whatsapp';

export const QuickInquiryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !query) return;

    const waUrl = createWhatsAppQuickInquiryUrl(name, phone, query);
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A8F6A]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-6">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-widest block mb-1">
            Direct Pharmacist Consultation
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Have a Question? Ask Our Pharmacist
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Inquire about medicine dosage, substitutes, or stock availability at Belaganj.
          </p>
        </div>

        {submitted ? (
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 text-center">
            <h4 className="text-lg font-bold text-white mb-2">Thank you, {name}!</h4>
            <p className="text-xs text-slate-300">
              Your inquiry has been redirected to our WhatsApp desk. Our pharmacist will respond immediately.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-bold underline text-[#0A8F6A]"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-slate-800/90 border border-slate-700/80 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-slate-800/90 border border-slate-700/80 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Your Query / Medicine Required</label>
              <div className="relative">
                <HelpCircle className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <textarea
                  required
                  rows={3}
                  placeholder="Ask about medicine availability, price, or cold chain insulin..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 bg-slate-800/90 border border-slate-700/80 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-[#0A8F6A]/20 transition-all text-xs uppercase tracking-wide"
            >
              <Send className="w-4 h-4" />
              <span>Submit Inquiry on WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
