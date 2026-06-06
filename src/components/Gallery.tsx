import React from 'react';
import { motion } from 'motion/react';
// Use the generated image for reception/gallery
import receptionImg from '../assets/images/clinic_reception_1780753652430.png';
import chairImg from '../assets/images/clinic_room_1780753664741.png';
import antesImg from '../assets/images/tooth_placeholder_antes_1780754674817.png';
import depoisImg from '../assets/images/tooth_placeholder_depois_1780754691990.png';

export default function Gallery() {
  return (
    <section id="clinica" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-secondary font-semibold tracking-wider uppercase text-sm mb-3">Nossa Equipe</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Profissionais <span className="text-brand-primary">apaixonados</span> por sorrisos infantis
            </h3>
            <p className="text-slate-600">
              Nossa equipe é formada por especialistas em odontopediatria altamente qualificados. Trabalhamos com muita paciência, técnica e carinho para garantir um atendimento seguro e acolhedor para as crianças.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-12 gap-6 h-auto md:h-[500px]">
          
          {/* Grid of 4 images for Before/After */}
          <div className="md:col-span-8 flex flex-col gap-4">
            
            {/* Case 1 */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-3xl relative group shadow-sm bg-slate-50 flex items-center justify-center p-2"
              >
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur text-brand-dark text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Antes
                  </span>
                </div>
                <img 
                  src={antesImg} 
                  alt="Antes do procedimento" 
                  className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105 min-h-[160px] md:min-h-[220px]"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="overflow-hidden rounded-3xl relative group shadow-sm bg-brand-light flex items-center justify-center p-2"
              >
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Depois
                  </span>
                </div>
                <img 
                  src={depoisImg} 
                  alt="Depois do procedimento" 
                  className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105 min-h-[160px] md:min-h-[220px]"
                />
              </motion.div>
            </div>

            {/* Case 2 */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-hidden rounded-3xl relative group shadow-sm bg-slate-50 flex items-center justify-center p-2"
              >
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur text-brand-dark text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Antes
                  </span>
                </div>
                <img 
                  src={antesImg} 
                  alt="Antes do procedimento" 
                  className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105 min-h-[160px] md:min-h-[220px]"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="overflow-hidden rounded-3xl relative group shadow-sm bg-brand-light flex items-center justify-center p-2"
              >
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    Depois
                  </span>
                </div>
                <img 
                  src={depoisImg} 
                  alt="Depois do procedimento" 
                  className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105 min-h-[160px] md:min-h-[220px]"
                />
              </motion.div>
            </div>

          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 overflow-hidden rounded-3xl relative group min-h-[240px]"
            >
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src={chairImg} 
                alt="Consultório com cadeira moderna" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-white/90 backdrop-blur text-brand-dark text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  Consultório Clean
                </span>
              </div>
            </motion.div>

            {/* Solid Color block for "Before / After" hint or just text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-primary p-8 rounded-3xl text-white flex flex-col justify-center min-h-[200px]"
            >
               <h4 className="text-xl font-bold mb-2">Equipe Especializada</h4>
               <p className="text-white/90 text-sm leading-relaxed">
                 Profissionais atenciosos, preparados e extremamente carinhosos. Nosso time é focado em transformar cada consulta em um momento de cuidado e segurança para o seu filho.
               </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
