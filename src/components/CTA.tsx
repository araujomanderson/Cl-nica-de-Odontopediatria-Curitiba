import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl border border-slate-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Agende uma consulta com nossa equipe.
          </h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg">
            Estamos prontos para receber você e seu filho com todo o cuidado, profissionalismo e carinho que merecem.
          </p>
          
          <a 
            href="https://wa.me/5541992216674"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_8px_30px_rgb(110,193,228,0.4)] hover:shadow-[0_8px_40px_rgb(110,193,228,0.6)] hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </a>

          <p className="mt-6 text-sm text-slate-500 font-medium">
            (41) 99221-6674 • Atendimento em Curitiba - PR
          </p>
        </motion.div>

      </div>
    </section>
  );
}
