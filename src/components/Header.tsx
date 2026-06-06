import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Building2 } from 'lucide-react';

import logoImg from '../assets/images/friendly_dental_logo_1780754309322.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Nossa Equipe', href: '#clinica' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <img 
              src={logoImg} 
              alt="Clínica de Odontopediatria Curitiba Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className={`flex flex-col ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
              <span className="font-bold text-lg leading-none tracking-tight">OdontoPediatria</span>
              <span className="text-xs text-brand-primary font-medium tracking-wide">CURITIBA</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/5541992216674" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              (41) 99221-6674
            </a>
            <a 
              href="https://wa.me/5541992216674" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_4px_14px_0_rgba(110,193,228,0.39)] hover:shadow-[0_6px_20px_rgba(110,193,228,0.23)] hover:-translate-y-0.5"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2 text-brand-dark bg-white rounded-full shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-brand-primary hover:bg-brand-light p-3 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5541992216674" 
              className="mt-2 bg-brand-primary text-white p-4 rounded-xl text-center font-semibold shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Agendar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
