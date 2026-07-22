import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Upload, 
  CheckCircle, 
  Phone, 
  Clock, 
  MapPin, 
  User, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { createWhatsAppOrderUrl } from '../utils/whatsapp';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Belaganj, Gaya',
    medicineRequired: initialMedicineName,
    hasPrescription: 'Yes',
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'Immediate / As soon as possible'
  });

  const [uploadSuccess, setUploadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileSimulate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        hasPrescription: 'Yes',
        prescriptionFileName: file.name
      }));
      setUploadSuccess(true);
    }
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.mobileNumber || !formData.medicineRequired) {
      alert('Please fill in your Name, Phone Number, and Medicine Required.');
      return;
    }

    const whatsappUrl = createWhatsAppOrderUrl(formData);
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 transition-all relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A]/10 text-[#0A8F6A] flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">
                WhatsApp Medicine Order
              </h3>
              <p className="text-xs text-slate-400">
                Pihu Medical Hall • Quick Delivery in Belaganj, Gaya
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Order Modal"
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmitWhatsApp} className="space-y-4 pt-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="customerName"
                required
                placeholder="Enter your full name"
                value={formData.customerName}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-3 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  name="mobileNumber"
                  required
                  placeholder="10-digit phone number"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  name="preferredDeliveryTime"
                  value={formData.preferredDeliveryTime}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 text-xs font-semibold bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none transition-all cursor-pointer"
                >
                  <option value="Immediate / As soon as possible">Immediate / Urgent</option>
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4:00 PM - 9:00 PM)">Evening (4 PM - 9 PM)</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name(s) Required <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <textarea
                name="medicineRequired"
                required
                rows={3}
                placeholder="E.g., Dolo 650 (2 strips), Pantocid D (1 strip), Accu-Chek Strips"
                value={formData.medicineRequired}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-3 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Delivery / Pickup Address
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="address"
                placeholder="Village / Area, Belaganj, Gaya"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-3 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none transition-all"
              />
            </div>
          </div>

          {/* Upload Prescription Section */}
          <div className="p-4 bg-[#0A8F6A]/5 border border-[#0A8F6A]/20 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#0A8F6A] flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5" />
                Upload Doctor Prescription (Photo / PDF)
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Optional</span>
            </div>

            <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-[#0A8F6A]/30 rounded-xl cursor-pointer bg-white dark:bg-slate-900 hover:bg-[#0A8F6A]/5 transition-colors text-center">
              {uploadSuccess ? (
                <div className="flex items-center gap-2 text-[#0A8F6A] font-semibold text-xs">
                  <CheckCircle className="w-4 h-4" />
                  <span>Prescription attached: {formData.prescriptionFileName}</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Click to attach prescription photo from device
                  </p>
                  <p className="text-[10px] text-slate-400">Supported: JPG, PNG, PDF (Max 10MB)</p>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*,.pdf" 
                onChange={handleFileSimulate} 
                className="hidden" 
              />
            </label>

            <div className="mt-2.5 flex items-center gap-3">
              <span className="text-xs text-slate-600 dark:text-slate-400">Do you have a prescription?</span>
              <label className="inline-flex items-center gap-1 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                <input
                  type="radio"
                  name="hasPrescription"
                  value="Yes"
                  checked={formData.hasPrescription === 'Yes'}
                  onChange={handleInputChange}
                  className="text-[#0A8F6A] focus:ring-[#0A8F6A]"
                />
                Yes
              </label>
              <label className="inline-flex items-center gap-1 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                <input
                  type="radio"
                  name="hasPrescription"
                  value="No"
                  checked={formData.hasPrescription === 'No'}
                  onChange={handleInputChange}
                  className="text-[#0A8F6A] focus:ring-[#0A8F6A]"
                />
                No (OTC)
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Special Message / Instructions
            </label>
            <input
              type="text"
              name="message"
              placeholder="E.g., Please send cold ice pack for insulin"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none transition-all"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-[#0A8F6A]/20 transition-all text-xs uppercase tracking-wide"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all text-xs uppercase tracking-wide"
            >
              <Phone className="w-4 h-4 text-[#0A8F6A]" />
              <span>Call Store Directly</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 justify-center text-[10px] text-slate-400">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Prescription medications will be verified by our pharmacist upon dispatch.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
