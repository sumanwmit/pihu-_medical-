import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/pharmacyData';
import { SEO } from '../components/SEO';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Store Front', 'Medicine Shelves', 'Health Devices', 'Surgical & Supplies', 'Interior'];

  const filteredItems = selectedCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const activeLightboxItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <SEO
        title="Store Photo Gallery - Pihu Medical Hall Belaganj"
        description="View store photos, medicine shelves, cold-chain storage facilities, digital health devices, and customer counter at Pihu Medical Hall in Belaganj, Gaya."
      />

      {/* Page Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A8F6A]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A8F6A]/20 text-[#0A8F6A] text-[10px] font-bold uppercase tracking-widest mb-3 border border-[#0A8F6A]/30">
            <Camera className="w-3.5 h-3.5 text-[#0A8F6A]" />
            <span>Store Front & Facility Visuals</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Pihu Medical Hall Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
            Take a virtual tour of our clean, well-stocked medical hall, cold storage infrastructure, and health equipment counters at Balapur, Belaganj.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs & Grid */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0A8F6A] text-white shadow-lg shadow-[#0A8F6A]/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer bg-slate-50/50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#0A8F6A]/40"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 text-slate-900 p-3 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-5 h-5 text-[#0A8F6A]" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#0A8F6A] text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-[#0A8F6A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                {activeLightboxItem.category}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative bg-slate-950 flex items-center justify-center min-h-[320px] max-h-[60vh]">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="max-h-[60vh] w-auto max-w-full object-contain"
              />

              {/* Prev & Next Controls */}
              <button
                onClick={handlePrev}
                aria-label="Previous Photo"
                className="absolute left-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Photo"
                className="absolute right-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-slate-900">
              <h3 className="text-lg font-bold text-white">{activeLightboxItem.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {activeLightboxItem.caption}
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
