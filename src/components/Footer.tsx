import React from 'react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

import logoImg from '../assets/images/friendly_dental_logo_1780754309322.png';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={logoImg} 
                alt="Clínica de Odontopediatria Curitiba Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-base text-brand-dark leading-none">OdontoPediatria</span>
                <span className="text-[10px] text-brand-primary font-bold tracking-wider uppercase">Curitiba</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Clínica especializada em odontopediatria e ortodontia infantil estruturada para máxima excelência e conforto.
            </p>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="font-bold text-brand-dark mb-6 uppercase text-sm tracking-wider">Contato</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Av. Cândido de Abreu, 70 <br/>Centro Cívico, Curitiba - PR<br/>80530-000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span>(41) 3233-9624<br/>(41) 99221-6674 (WhatsApp)</span>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-bold text-brand-dark mb-6 uppercase text-sm tracking-wider">Horário</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <p className="font-medium text-brand-dark">Segunda a Sexta</p>
                  <p>08:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-brand-dark mb-6 uppercase text-sm tracking-wider">Redes Sociais</h4>
            <a 
              href="https://instagram.com/clinicadeodontopediatria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-primary transition-colors font-medium border border-slate-200 px-4 py-2 rounded-full hover:border-brand-primary/30"
            >
              <Instagram className="w-5 h-5" />
              @clinicadeodontopediatria
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Clínica de Odontopediatria Curitiba Ltda. Direitos reservados.
          </p>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            DESIGNED FOR PREMIUM CLINICS
          </p>
        </div>
      </div>
    </footer>
  );
}
