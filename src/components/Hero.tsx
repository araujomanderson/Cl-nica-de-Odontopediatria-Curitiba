import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, MessageCircle } from 'lucide-react';
// Using the generated images
import heroImage from '../assets/images/hero_dentist_1780753638895.png';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden items-center flex min-h-screen">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-brand-light/50 -z-20"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-primary/20 shadow-sm mb-6">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-sm font-bold text-slate-600">5 estrelas no Google</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-6">
              Vem sorrir com a gente! <span className="text-brand-primary">Carinho</span> e <span className="text-brand-secondary">cuidado</span> em cada detalhe.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Especialistas em odontopediatria e ortodontia para crianças e adolescentes em Curitiba. Um ambiente pensado para transformar a ida ao dentista em um momento leve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5541992216674"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_8px_30px_rgb(110,193,228,0.3)] hover:shadow-[0_8px_30px_rgb(110,193,228,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar no WhatsApp
              </a>
              <a 
                href="#especialidades"
                className="bg-white hover:bg-slate-50 text-brand-dark border border-slate-200 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center"
              >
                Ver Especialidades
              </a>
            </div>

            <div className="mt-10 flex items-center justify-start gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-secondary" />
                <span className="text-sm font-medium text-slate-600">Convênios e Particulares</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-brand-secondary" />
                <span className="text-sm font-medium text-slate-600">Atendimento Humanizado</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Visual Frame Decor */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/30 to-brand-secondary/30 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white">
               <img 
                 src={heroImage} 
                 alt="Dentista odontopediatra atendendo criança em clínica moderna" 
                 className="w-full h-full object-cover object-center"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -left-6 bottom-12 bg-white/90 backdrop-blur-md rounded-full p-3 pr-6 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-brand-primary/20"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shadow-inner">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide">Especialistas em</p>
                <p className="text-base font-extrabold text-brand-dark">Sorrisos Infantis</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
