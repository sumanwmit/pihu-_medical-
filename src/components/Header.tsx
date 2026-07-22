import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Pill, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ChevronRight,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenWhatsAppModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsAppModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200">
      {/* Top Emergency / Info Bar */}
      <div className="bg-slate-900 dark:bg-slate-950 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>{BUSINESS_INFO.address}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 font-medium border-l border-slate-800 pl-4 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>08:00 AM - 10:00 PM (24/7 On Call)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:flex items-center gap-1 text-slate-400 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>DL No: {BUSINESS_INFO.dlNumber}</span>
            </span>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs font-bold bg-[#0A8F6A] hover:bg-[#087a5a] text-white px-3 py-1 rounded-full transition-all shadow-sm"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
            <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center shadow-md shadow-[#0A8F6A]/20 group-hover:scale-105 transition-transform">
              <Pill className="w-6 h-6 text-white transform -rotate-12" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
                PIHU <span className="text-[#0A8F6A]">MEDICAL</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                Your Trusted Health Partner
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-200 pb-1 ${
                    isActive
                      ? 'text-[#0A8F6A] border-b-2 border-[#0A8F6A]'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* Order Online CTA */}
            <button
              onClick={onOpenWhatsAppModal}
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all hover:shadow-md flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>Order Online</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[120px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl z-50 p-5 transition-all">
          <div className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'text-[#0A8F6A] bg-[#0A8F6A]/10 font-bold border-l-4 border-[#0A8F6A]'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0A8F6A] text-white font-bold py-3 rounded-xl shadow-md text-xs uppercase tracking-wide"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Upload Prescription / WhatsApp Order</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs"
              >
                <Phone className="w-4 h-4 text-[#0A8F6A]" />
                <span>Call Store: {BUSINESS_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
