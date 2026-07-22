import React from 'react';
import { 
  ShieldCheck, 
  Thermometer, 
  Award, 
  HeartHandshake, 
  Clock, 
  Building2, 
  UserCheck, 
  Target, 
  Eye, 
  Sparkles, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { BUSINESS_INFO, TIMELINE_JOURNEY } from '../data/pharmacyData';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="About Us - Pihu Medical Hall Belaganj"
        description="Learn about Pihu Medical Hall's journey, certified pharmacists, cold-chain storage facility, and commitment to genuine medicines in Belaganj, Gaya."
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A8F6A]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] text-[10px] font-bold uppercase tracking-widest mb-3 border border-[#0A8F6A]/30">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0A8F6A]" />
            <span>Established 2016 • Belaganj, Gaya</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Pihu Medical Hall
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
            Your trusted neighborhood retail pharmacy dedicated to 100% authentic medicines, cold-chain life-saving drugs, and compassionate healthcare guidance.
          </p>
        </div>
      </section>

      {/* Business Story & Overview */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block">
                Our Business Story
              </span>

              <h2 className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
                Empowering Rural & Semi-Urban Belaganj with Authentic Medicines
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Pihu Medical Hall was established in 2016 at Balapur, Belaganj, addressing a critical regional need: access to genuine, unadulterated pharmaceutical products directly sourced from licensed manufacturers and company distributors.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the years, under the lead leadership of registered pharmacist Sunil Kumar, we have expanded from a modest medical counter into Belaganj's premier pharmaceutical care destination, equipped with dedicated cold-chain refrigeration units for insulin, vaccines, and pediatric liquid formulations.
              </p>

              <div className="p-4 rounded-2xl bg-[#0A8F6A]/5 dark:bg-[#0A8F6A]/10 border border-[#0A8F6A]/20 flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-[#0A8F6A] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  <p className="font-bold text-slate-800 dark:text-white">Govt Drug License & Registration</p>
                  <p className="mt-0.5">Drug License No: <strong>{BUSINESS_INFO.dlNumber}</strong> | GSTIN: <strong>{BUSINESS_INFO.gstNumber}</strong></p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80"
                  alt="Pihu Medical Hall Front View"
                  className="rounded-3xl object-cover h-64 w-full shadow-lg border border-slate-100 dark:border-slate-800"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80"
                  alt="Medicine Shelves Belaganj"
                  className="rounded-3xl object-cover h-64 w-full shadow-lg border border-slate-100 dark:border-slate-800 mt-8"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
              Our Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-[#0A8F6A]/50 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Our Mission</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                To guarantee 100% genuine, affordable pharmaceutical supplies and medical devices to every household in Belaganj and nearby villages in Gaya district, backed by professional pharmacist consultation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-[#0A8F6A]/50 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Our Vision</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                To stand as Belaganj’s most dependable healthcare partner, recognized for cold-chain drug integrity, emergency availability, and accessible digital ordering via WhatsApp.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-[#0A8F6A]/50 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Core Values</h3>
              <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-2 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" /> Authenticity & Zero Counterfeit</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" /> Patient-First Compassion</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" /> Cold-Chain Integrity</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" /> Fair & Transparent Pricing</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Owner & Lead Pharmacist Message */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-[#0A8F6A] p-1.5 shadow-xl">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-[#0A8F6A] font-extrabold text-3xl">
                    <UserCheck className="w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mt-4">{BUSINESS_INFO.ownerName}</h3>
                <p className="text-xs text-[#0A8F6A] font-bold">Registered Pharmacist & Proprietor</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Pihu Medical Hall • Belaganj</p>
              </div>

              <div className="md:col-span-8 space-y-4 text-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A8F6A]">Message from Pharmacist</span>
                <blockquote className="text-xs sm:text-sm italic leading-relaxed text-slate-300">
                  "Healthcare is not merely a commercial business; it is a solemn responsibility toward human life. At Pihu Medical Hall, every single strip of medicine on our shelves is verified for authenticity, batch number, and expiry before reaching our patients. We take immense pride in serving Belaganj and Gaya with total transparency, dignity, and care."
                </blockquote>
                <div className="pt-2 text-xs text-[#0A8F6A] font-bold">
                  — Serving Belaganj community since 2016
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
              Our Growth Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
              Pihu Medical Hall Timeline
            </h2>
          </div>

          <div className="relative border-l-2 border-[#0A8F6A]/30 ml-4 sm:ml-8 space-y-8">
            {TIMELINE_JOURNEY.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-[#0A8F6A] text-white flex items-center justify-center text-xs font-bold ring-4 ring-slate-50 dark:ring-slate-950">
                  ✓
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-[#0A8F6A]/50 transition-all">
                  <span className="text-[10px] font-bold text-[#0A8F6A] bg-[#0A8F6A]/10 px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white mt-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Overview & Storage Facility */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block">
                Storage & Quality Control
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
                2-8°C Cold Chain & Hygienic Storage Facility
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Many life-saving drugs like Insulin cartridges, vaccines, biological eye drops, and pediatric probiotics lose efficacy if exposed to high ambient heat. At Pihu Medical Hall, we operate medical refrigerators backed by 24/7 power backup systems to safeguard drug potency.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-800 dark:text-slate-200 pt-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Strict 2°C - 8°C Cooling</span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0A8F6A]" />
                  <span>24/7 Generator Backup</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
                alt="Cold Chain Medical Storage Refrigerator"
                className="rounded-3xl object-cover h-80 w-full shadow-xl border border-slate-100 dark:border-slate-800"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
