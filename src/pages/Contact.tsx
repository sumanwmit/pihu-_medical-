import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Building2,
  Navigation
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { createWhatsAppQuickInquiryUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Inquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    const waUrl = createWhatsAppQuickInquiryUrl(
      formData.name,
      formData.phone,
      `[${formData.subject}] ${formData.message}`
    );
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="Contact Us & Directions - Pihu Medical Hall Belaganj"
        description="Contact Pihu Medical Hall in Belaganj, Gaya, Bihar. Address: 02.Balapur, Belaganj, Phone: 6205468847. Store hours, Google map directions, and WhatsApp order desk."
      />

      {/* Page Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A8F6A]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] text-[10px] font-bold uppercase tracking-widest mb-3 border border-[#0A8F6A]/30">
            <MapPin className="w-3.5 h-3.5 text-[#0A8F6A]" />
            <span>Store Location & Direct Contact</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Pihu Medical Hall
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
            We are here to assist you with medicine orders, prescription verifications, and health queries in Belaganj, Gaya.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Working Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
                  Business Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
                  Get In Touch With Us
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  Visit our pharmacy counter at Balapur, Belaganj or reach out directly on phone or WhatsApp for instant delivery assistance.
                </p>
              </div>

              {/* Direct Quick Action CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center hover:bg-[#0A8F6A]/10 hover:border-[#0A8F6A]/30 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#0A8F6A] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 dark:text-white">Call Store</span>
                  <span className="text-[10px] text-slate-400">{BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center hover:bg-[#0A8F6A]/10 hover:border-[#0A8F6A]/30 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-[#0A8F6A] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 dark:text-white">WhatsApp</span>
                  <span className="text-[10px] text-slate-400">Fast Response</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center hover:bg-[#0A8F6A]/10 hover:border-[#0A8F6A]/30 transition-colors group"
                >
                  <Navigation className="w-5 h-5 text-[#0A8F6A] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 dark:text-white">Directions</span>
                  <span className="text-[10px] text-slate-400">Google Maps</span>
                </a>
              </div>

              {/* Detail Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-3xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">Store Address</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.address}</p>
                    <p className="text-[11px] text-[#0A8F6A] mt-1 font-semibold">{BUSINESS_INFO.landmark}</p>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">Working Hours</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.workingHours.weekdays}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-300">{BUSINESS_INFO.workingHours.sunday}</p>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mt-1">
                      {BUSINESS_INFO.workingHours.emergency}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">Government Drug License</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">License No: <strong>{BUSINESS_INFO.dlNumber}</strong></p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Proprietor & Pharmacist: {BUSINESS_INFO.ownerName}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/50 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                  Send Us A Message / Inquiry
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill out the details below to dispatch your message directly to our WhatsApp care desk.
                </p>

                {formSubmitted ? (
                  <div className="p-8 bg-[#0A8F6A]/10 border border-[#0A8F6A]/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#0A8F6A] mx-auto" />
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white">Inquiry Sent via WhatsApp</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you! Your message has been formatted and opened on WhatsApp. Our Belaganj team will verify and reply shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 text-xs font-bold text-[#0A8F6A] underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="yourname@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                          Inquiry Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none cursor-pointer"
                        >
                          <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                          <option value="Cold Chain Insulin / Vaccine">Cold Chain Insulin / Vaccine</option>
                          <option value="Surgical / Device Bulk Order">Surgical / Device Bulk Order</option>
                          <option value="Home Delivery Request">Home Delivery Request</option>
                          <option value="Feedback / Complaint">Feedback / Complaint</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Your Message / Medicine Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Write your question or medicine requirements here..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-[#0A8F6A]/20 text-xs uppercase tracking-wide transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message via WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-12 bg-slate-50/50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#0A8F6A]/10 text-[#0A8F6A] px-3 py-1 rounded-full inline-block mb-2">
              Find Us On Google Maps
            </span>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
              Pihu Medical Hall Location Map
            </h2>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 relative">
            <iframe
              title="Pihu Medical Hall Belaganj Map Location"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
