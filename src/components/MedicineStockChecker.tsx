import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, RefreshCw, ShieldCheck, FileCheck } from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { Medicine } from '../types';
import { createWhatsAppDirectItemUrl } from '../utils/whatsapp';

interface MedicineStockCheckerProps {
  onOpenWhatsAppModalWithMed?: (medName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onOpenWhatsAppModalWithMed }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const medicinesList = medicineData as Medicine[];

  const categories = useMemo(() => {
    const cats = Array.from(new Set(medicinesList.map(m => m.category)));
    return ['All', ...cats];
  }, [medicinesList]);

  const filteredMedicines = useMemo(() => {
    return medicinesList.filter(med => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (med.genericName && med.genericName.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus, medicinesList]);

  const handleWhatsAppDirectOrder = (medName: string, mrp: number) => {
    if (onOpenWhatsAppModalWithMed) {
      onOpenWhatsAppModalWithMed(medName);
    } else {
      const url = createWhatsAppDirectItemUrl(medName, mrp);
      window.open(url, '_blank');
    }
  };

  return (
    <div id="stock-checker" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all">
      {/* Title Header Bar */}
      <div className="p-6 sm:p-8 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-6 bg-[#0A8F6A] rounded-full"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
              Medicine Stock Checker
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider pl-4">
            Check Live Availability • Belaganj, Gaya
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A8F6A]/10 text-[#0A8F6A] text-xs font-bold border border-[#0A8F6A]/20">
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{medicinesList.length} Items Listed</span>
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col h-full">
        {/* Search Input and Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
          {/* Main Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
            <input
              type="text"
              placeholder="Search medicine name (e.g. Paracetamol, Dolo, Amoxicillin)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-10 text-sm focus:ring-2 focus:ring-[#0A8F6A] transition-all text-slate-800 dark:text-white placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-4 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="md:col-span-3 relative">
            <Filter className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-4 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-800 dark:text-white text-xs font-bold focus:ring-2 focus:ring-[#0A8F6A] transition-all appearance-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              {categories.filter(c => c !== 'All').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="md:col-span-3 relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-4 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-800 dark:text-white text-xs font-bold focus:ring-2 focus:ring-[#0A8F6A] transition-all cursor-pointer"
            >
              <option value="All">All Availability Status</option>
              <option value="Available">Available Only</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Stock Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.map((med) => {
            const isAvailable = med.status === 'Available';
            const isLimited = med.status === 'Limited Stock';
            const isOut = med.status === 'Out of Stock';

            return (
              <div
                key={med.id}
                className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:border-[#0A8F6A]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {med.category}
                    </span>

                    <span
                      className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${
                        isAvailable
                          ? 'bg-green-100 text-green-700 dark:bg-emerald-950/80 dark:text-emerald-300'
                          : isLimited
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {med.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-[#0A8F6A] transition-colors">
                    {med.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-0.5">
                    {med.brand} {med.genericName ? `• ${med.genericName}` : ''}
                  </p>

                  <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#0A8F6A]">
                      ₹{med.discountedPrice || med.mrp}
                      {med.discountedPrice && (
                        <span className="text-xs font-normal text-slate-400 line-through ml-1">
                          ₹{med.mrp}
                        </span>
                      )}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Exp: {med.expiry}</span>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  {med.requiresPrescription && (
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold mb-1.5 flex items-center gap-1">
                      <FileCheck className="w-3 h-3" /> Prescription Required
                    </p>
                  )}
                  <button
                    onClick={() => handleWhatsAppDirectOrder(med.name, med.discountedPrice || med.mrp)}
                    disabled={isOut}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isOut
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        : 'bg-[#0A8F6A] hover:bg-[#087a5a] text-white shadow-md shadow-[#0A8F6A]/20'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isOut ? 'Restocking Soon' : 'Order via WhatsApp'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12 px-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800">
            <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No medicine matching "{searchQuery}"
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
              Don't worry! We carry over 5,000+ unlisted medicines. Send us your prescription photo directly on WhatsApp and our pharmacist will check store stock immediately.
            </p>
            <button
              onClick={() => handleWhatsAppDirectOrder(searchQuery || 'General Medicine Inquire', 0)}
              className="mt-4 inline-flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wide transition-all shadow-md"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Inquire Stock on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
