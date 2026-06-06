import React from 'react';
import { motion } from 'motion/react';
import { Baby, Activity, Brush, Scissors, ShieldAlert, Target, HeartHandshake } from 'lucide-react';

export default function Specialties() {
  const services = [
    {
      title: "Odontopediatria",
      desc: "Cuidado integral e especializado para a saúde bucal da criança desde os primeiros meses de vida.",
      icon: <Baby className="w-8 h-8" />
    },
    {
      title: "Ortodontia Infantil",
      desc: "Prevenção e correção de problemas de mordida e alinhamento dos dentes no momento certo.",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Limpeza Preventiva",
      desc: "Profilaxia e aplicação de flúor para manter os dentes fortes e livres de cáries.",
      icon: <Brush className="w-8 h-8" />
    },
    {
      title: "Tratamentos Ortodônticos",
      desc: "Aparelhos modernos e discretos, adequados para diferentes fases do desenvolvimento e para adolescentes.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Extrações Seguras",
      desc: "Procedimentos necessários realizados com máximo conforto, anestesia adequada e acolhimento.",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      title: "Acompanhamento do Crescimento",
      desc: "Monitoramento contínuo da troca de dentes e desenvolvimento ósseo da face.",
      icon: <ShieldAlert className="w-8 h-8" />
    }
  ];

  return (
    <section id="especialidades" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-3">Serviços Premium</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Especialidades Clínicas
          </h3>
          <p className="text-slate-600">
            Oferecemos tratamentos completos e modernos com foco no sorriso de longo prazo da criança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="group bg-white rounded-3xl p-8 border border-white hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient effect backing */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-brand-light text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3 leading-tight">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
