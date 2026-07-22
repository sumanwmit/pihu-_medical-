import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy load actual React pages as mandated
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Scroll To Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Fallback Spinner for Suspense Lazy Loading
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4" />
      <p className="text-xs font-bold text-slate-500 animate-pulse">Loading Pihu Medical Hall...</p>
    </div>
  );
}

export function AppContent() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedMedicineName, setSelectedMedicineName] = useState('');

  const handleOpenWhatsAppModal = (medicineName: string = '') => {
    setSelectedMedicineName(medicineName);
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
    setSelectedMedicineName('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors">
      <ScrollToTop />

      {/* Header Navigation */}
      <Header onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />

      {/* Main Page Lazy Content */}
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} 
                  onOpenWhatsAppModalWithMed={(med) => handleOpenWhatsAppModal(med)}
                />
              } 
            />
            <Route path="/about" element={<About />} />
            <Route 
              path="/services" 
              element={
                <Services 
                  onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} 
                  onOpenWhatsAppModalWithMed={(med) => handleOpenWhatsAppModal(med)}
                />
              } 
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="*" 
              element={
                <Home 
                  onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} 
                  onOpenWhatsAppModalWithMed={(med) => handleOpenWhatsAppModal(med)}
                />
              } 
            />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call, WhatsApp & Back-To-Top Buttons */}
      <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />

      {/* WhatsApp Medicine Order Modal Form */}
      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={handleCloseWhatsAppModal}
        initialMedicineName={selectedMedicineName}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
