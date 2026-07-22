import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Pill, 
  Clock, 
  HeartHandshake, 
  Thermometer, 
  Truck, 
  Star, 
  ChevronRight, 
  Send,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA, FEATURED_PRODUCTS, REVIEWS_PREVIEW, FAQ_DATA, HEALTH_TIPS } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { QuickInquiryForm } from '../components/QuickInquiryForm';

interface HomeProps {
  onOpenWhatsAppModal: () => void;
  onOpenWhatsAppModalWithMed?: (medName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal, onOpenWhatsAppModalWithMed }) => {
  const featuredServices = SERVICES_DATA.slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="Home - Authentic Pharmacy in Belaganj, Gaya"
        description="Pihu Medical Hall provides genuine medicines, healthcare products, cold-chain insulin, surgical supplies, and baby care at affordable prices in Belaganj, Gaya, Bihar."
      />

      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card */}
          <div className="lg:col-span-8 bg-[#0A8F6A]/5 dark:bg-[#0A8F6A]/10 border border-[#0A8F6A]/15 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-inner">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#0A8F6A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 bg-white dark:bg-slate-900 border border-[#0A8F6A]/30 text-[#0A8F6A] rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  Licensed Retail Pharmacy • DL No: {BUSINESS_INFO.dlNumber}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 dark:text-white tracking-tight leading-tight">
                {BUSINESS_INFO.tagline.split('•')[0]} <br/>
                <span className="text-[#0A8F6A]">Belaganj, Gaya</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-medium">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices across Belaganj & Gaya.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenWhatsAppModal}
                  className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-[#0A8F6A]/30 hover:scale-105 transition-transform flex items-center gap-2 text-sm uppercase tracking-wide"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-slate-800 text-white px-6 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
                >
                  <MapPin className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="relative z-10 pt-8 mt-8 border-t border-[#0A8F6A]/15 grid grid-cols-3 gap-2 text-center sm:text-left text-xs font-bold text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0A8F6A]" />
                <span>100% Certified Stock</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Thermometer className="w-4 h-4 text-[#0A8F6A]" />
                <span>Cold Storage (2-8°C)</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Truck className="w-4 h-4 text-[#0A8F6A]" />
                <span>Belaganj Delivery</span>
              </div>
            </div>

          </div>

          {/* Hero Quick Prescription & Stock Checker Card */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#0A8F6A] uppercase tracking-widest block mb-1">
                  Prescription Upload
                </span>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                  Quick Prescription Order
                </h2>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Upload your doctor's prescription photo directly via WhatsApp to receive instant confirmation and doorstep delivery in Belaganj.
              </p>
            </div>

            <div className="space-y-3 pt-6">
              <button
                onClick={onOpenWhatsAppModal}
                className="w-full flex items-center justify-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-[#0A8F6A]/20 transition-all text-xs uppercase tracking-wide"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Upload Prescription</span>
              </button>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold">
                  Want to check medicine stock live? <br/>
                  <Link to="/services#stock-checker" className="text-[#0A8F6A] underline font-bold">
                    Open Medicine Stock Checker &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Short About Preview Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
                  alt="Pihu Medical Hall Store Interior Belaganj"
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold text-[#0A8F6A] uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                    Serving Belaganj Since 2016
                  </span>
                  <h3 className="text-xl font-bold mt-2">Pihu Medical Hall • Balapur, Belaganj</h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block">
                About Pihu Medical Hall
              </span>
              
              <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white">
                Your Neighborhood Healthcare Partner in Belaganj & Gaya
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded with a vision to eliminate counterfeit medicines and bring certified pharmaceutical care to Belaganj, Pihu Medical Hall has been serving thousands of families with 100% genuine allopathic, ayurvedic, and pediatric healthcare supplies.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-2xl font-black text-[#0A8F6A]">10,000+</span>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Satisfied Local Patients</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-2xl font-black text-[#0A8F6A]">100%</span>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Batch-Certified Stock</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0A8F6A] hover:underline uppercase tracking-wider group"
                >
                  <span>Read Business Story & Mission</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Services Preview Section (Max 6) */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
                Healthcare Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white">
                Featured Medical & Pharmacy Services
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8F6A] hover:underline uppercase tracking-wider"
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-[#0A8F6A]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold mb-4 group-hover:bg-[#0A8F6A] group-hover:text-white transition-colors">
                    <Pill className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-[#0A8F6A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {service.popularItems.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0A8F6A] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={onOpenWhatsAppModal}
                    className="text-xs font-bold text-[#0A8F6A] hover:underline"
                  >
                    Inquire via WhatsApp
                  </button>
                  <Link
                    to="/services"
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
              Why Pihu Medical Hall
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
              Why Belaganj Trusts Us For Medicines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: '100% Genuine Medicines',
                desc: 'Direct sourcing from licensed company distributors. Zero tolerance for unverified batches.'
              },
              {
                icon: Thermometer,
                title: 'Strict Cold-Chain Unit',
                desc: 'Refrigerated temperature control for insulin cartridges, eye drops, and vaccines.'
              },
              {
                icon: Clock,
                title: 'Emergency On-Call Service',
                desc: 'Available 8 AM to 10 PM daily with 24/7 emergency medicine response on call.'
              },
              {
                icon: HeartHandshake,
                title: 'Qualified Pharmacist Guidance',
                desc: 'Free advice on correct dosage, food interactions, and affordable generic alternatives.'
              }
            ].map((feature, i) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
                Bestsellers & Equipment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
                Popular Healthcare Essentials
              </h2>
            </div>
            <Link
              to="/services#stock-checker"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8F6A] hover:underline uppercase tracking-wider"
            >
              <span>Search All Inventory Stock</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#0A8F6A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    {prod.tag}
                  </span>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{prod.category}</span>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white mt-1">{prod.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">{prod.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 line-through mr-1.5">{prod.mrp}</span>
                      <span className="text-base font-extrabold text-[#0A8F6A]">{prod.price}</span>
                    </div>

                    <button
                      onClick={() => onOpenWhatsAppModalWithMed ? onOpenWhatsAppModalWithMed(prod.name) : onOpenWhatsAppModal()}
                      className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white text-xs font-bold px-3 py-2 rounded-xl shadow transition-colors"
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
              Patient Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
              What Local Residents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_PREVIEW.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 dark:text-white">{rev.author}</h3>
                    <p className="text-[10px] text-slate-400">{rev.location}</p>
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="text-[10px] text-[#0A8F6A] font-bold bg-[#0A8F6A]/10 px-2 py-0.5 rounded-full">
                      Verified Patient
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
              Common Queries & Guidelines
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.slice(0, 4).map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
              >
                <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-start gap-2">
                  <span className="text-[#0A8F6A] font-black">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8F6A] hover:underline uppercase tracking-wider"
            >
              <span>Have more questions? Visit Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
              Health Awareness
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
              Healthcare & Wellness Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <span>{tip.category}</span>
                      <span>{tip.readTime}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">{tip.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={onOpenWhatsAppModal}
                    className="text-xs font-bold text-[#0A8F6A] hover:underline"
                  >
                    Consult Pharmacist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Consultation Inquiry Form */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickInquiryForm />
        </div>
      </section>

    </div>
  );
};
