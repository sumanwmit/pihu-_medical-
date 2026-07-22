import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-8 right-6 sm:bottom-10 sm:right-10 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="pointer-events-auto p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all transform hover:scale-110 active:scale-95 border border-slate-800"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Direct Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          aria-label="Call Store Now"
          className="pointer-events-auto flex items-center justify-center p-3.5 rounded-full bg-[#0A8F6A] hover:bg-[#087a5a] text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 group relative"
          title="Call Pihu Medical Hall"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 group-hover:pr-2 transition-all duration-300 font-bold text-xs">
            Call: {BUSINESS_INFO.phone}
          </span>
        </a>

        {/* Chat Tooltip Badge */}
        <div className="pointer-events-auto bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:block animate-bounce">
          Need help? Chat with us!
        </div>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onOpenWhatsAppModal}
          aria-label="Order via WhatsApp"
          className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative group"
        >
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-[#25D366] animate-ping" />
        </button>

      </div>

      {/* Mobile Sticky CTA Bar at very bottom */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs"
        >
          <Phone className="w-4 h-4 text-[#0A8F6A]" />
          <span>Call Store</span>
        </a>

        <button
          onClick={onOpenWhatsAppModal}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A8F6A] text-white font-bold py-2.5 rounded-xl shadow-md text-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Order Medicine</span>
        </button>
      </div>
    </>
  );
};
