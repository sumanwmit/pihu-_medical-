import React from 'react';
import { 
  Pill, 
  Bandage, 
  Activity, 
  Syringe, 
  HeartPulse, 
  ShieldPlus, 
  Baby, 
  Sparkles, 
  CheckCircle, 
  MessageSquare, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { SERVICES_DATA } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModalWithMed?: (medName: string) => void;
  onOpenWhatsAppModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenWhatsAppModalWithMed,
  onOpenWhatsAppModal
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return Pill;
      case 'Bandage': return Bandage;
      case 'Activity': return Activity;
      case 'Syringe': return Syringe;
      case 'HeartPulse': return HeartPulse;
      case 'ShieldPlus': return ShieldPlus;
      case 'Baby': return Baby;
      case 'Sparkles': return Sparkles;
      default: return Pill;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="Services & Medicine Categories - Pihu Medical Hall"
        description="Explore 8 comprehensive healthcare categories at Pihu Medical Hall: Prescription Drugs, OTC Remedies, Health Monitors, Surgical Equipment, Baby Care, and Supplements in Belaganj."
      />

      {/* Page Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A8F6A]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] text-[10px] font-bold uppercase tracking-widest mb-3 border border-[#0A8F6A]/30">
            <Pill className="w-3.5 h-3.5 text-[#0A8F6A]" />
            <span>Complete Healthcare & Pharmacy Range</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Services & Medicine Categories
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
            From prescribed allopathic formulations to digital BP monitors, baby diapers, and surgical dressings — all under one trusted roof in Belaganj.
          </p>
        </div>
      </section>

      {/* Medicine Stock Checker Feature Section */}
      <section className="py-12 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOpenWhatsAppModalWithMed={onOpenWhatsAppModalWithMed} />
        </div>
      </section>

      {/* Comprehensive Category Service Cards */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
              Category-Wise Healthcare Range
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
              Detailed Pharmacy Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((srv) => {
              const IconComp = getCategoryIcon(srv.iconName);

              return (
                <div
                  key={srv.id}
                  className="bg-slate-50/50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#0A8F6A]/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold group-hover:bg-[#0A8F6A] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-[#0A8F6A] bg-[#0A8F6A]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {srv.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-[#0A8F6A] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                      {srv.fullDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-6 space-y-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Key Service Highlights
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                        {srv.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#0A8F6A] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Popular Items Pills */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Popular Items in Stock:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {srv.popularItems.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full text-slate-700 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenWhatsAppModalWithMed ? onOpenWhatsAppModalWithMed(srv.title) : onOpenWhatsAppModal()}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-[#0A8F6A]/20 transition-all text-xs uppercase tracking-wide"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Order Category on WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prescription Requirement Banner */}
      <section className="py-12 bg-slate-50/50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center mx-auto font-bold">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              Do You Need Prescription Drugs?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              In strict accordance with Indian pharmacy regulations, Schedule H and Schedule H1 drugs (antibiotics, cardiac medicines, psychiatric drugs) require a valid doctor prescription. Send us your prescription photo via WhatsApp for swift verification.
            </p>
            <button
              onClick={onOpenWhatsAppModal}
              className="inline-flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-[#0A8F6A]/20 text-xs uppercase tracking-wide transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Upload Prescription Photo</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
