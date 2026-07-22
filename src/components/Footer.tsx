import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Heart,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const Footer: React.FC = () => {
  // Global Analytics Tracker Hook provided in prompt
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    
    if (!cid) return;
    
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 pt-16 pb-6 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Business Branding & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-bold shadow-md shadow-[#0A8F6A]/20">
                <Pill className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
                  PIHU <span className="text-[#0A8F6A]">MEDICAL</span>
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Belaganj, Gaya, Bihar</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Providing genuine allopathic, ayurvedic, and surgical products with cold-chain storage and local WhatsApp delivery.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-[#0A8F6A] font-medium">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0A8F6A]" />
                Licensed Retail Pharmacy (DL No: {BUSINESS_INFO.dlNumber})
              </span>
              <span className="text-slate-400">Proprietor: {BUSINESS_INFO.ownerName}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { name: 'Home Page', path: '/' },
                { name: 'About Pihu Medical Hall', path: '/about' },
                { name: 'Services & Products', path: '/services' },
                { name: 'Medicine Stock Checker', path: '/services#stock-checker' },
                { name: 'Store Photo Gallery', path: '/gallery' },
                { name: 'Contact & Directions', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#0A8F6A] dark:hover:text-[#0A8F6A] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#0A8F6A]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Working Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">Contact & Hours</h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-[#0A8F6A] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300">
                <Phone className="w-4 h-4 text-[#0A8F6A] flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#0A8F6A] transition-colors font-bold">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300">
                <MessageSquare className="w-4 h-4 text-[#0A8F6A] flex-shrink-0" />
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0A8F6A] transition-colors"
                >
                  WhatsApp: +91 {BUSINESS_INFO.whatsappNumber}
                </a>
              </p>
              
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <p className="flex items-center gap-2 text-xs font-bold text-[#0A8F6A] mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Store Operating Hours
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{BUSINESS_INFO.workingHours.weekdays}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{BUSINESS_INFO.workingHours.sunday}</p>
                <p className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold mt-1">{BUSINESS_INFO.workingHours.emergency}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Google Maps Location Preview */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">Location Map</h4>
            <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 relative group bg-slate-50 dark:bg-slate-800">
              <iframe
                title="Pihu Medical Hall Location Map"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow flex items-center gap-1 transition-colors"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-[11px] text-slate-400">
              Balapur, Belaganj, Gaya-Patna Highway corridor.
            </p>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="py-3.5 px-5 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 mb-8">
          <p className="leading-relaxed">
            <strong className="text-slate-700 dark:text-slate-300">Medical Disclaimer:</strong> Pihu Medical Hall is a licensed retail pharmacy. Medicines requiring a valid prescription (Rx) are dispensed strictly in accordance with Indian Drugs & Cosmetics regulations upon verification by our licensed pharmacist. Information provided on this website is for general awareness and should not replace professional medical advice.
          </p>
        </div>

        {/* Footer Bottom Links & Copyright */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>&copy; {new Date().getFullYear()} Pihu Medical Hall. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <a href="/about" className="hover:text-slate-600 dark:hover:text-slate-200">Privacy Policy</a>
            <span>•</span>
            <a href="/about" className="hover:text-slate-600 dark:hover:text-slate-200">Terms of Service</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span>Server Status: Online</span>
            </span>
            <span className="text-slate-200 dark:text-slate-700">|</span>
            <span>
              Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="text-[#0A8F6A] font-bold hover:underline">WMIT</a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
