import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Home, Stethoscope, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <HeartPulse className="w-6 h-6 text-brand-primary" />,
      title: "Atendimento Humanizado",
      desc: "Paciência e carinho em cada etapa, respeitando o tempo da criança."
    },
    {
      icon: <Home className="w-6 h-6 text-brand-secondary" />,
      title: "Ambiente Acolhedor",
      desc: "Recepção pensada para o conforto, com gibis, livrinhos e uma atmosfera segura."
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-brand-primary" />,
      title: "Especialistas Infantis",
      desc: "Equipe de odontopediatras dedicada e altamente qualificada."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-secondary" />,
      title: "Tecnologia Odontológica",
      desc: "Equipamentos modernos para diagnósticos precisos e tratamentos confortáveis."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-3">Nossa Abordagem</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Transformando a ida ao dentista em uma <span className="text-brand-secondary">experiência positiva.</span>
            </h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Sabemos que o consultório odontológico pode gerar ansiedade. Por isso, construímos um espaço e uma metodologia baseados no respeito e na empatia. Nosso foco é a odontopediatria e a ortodontia infantil, criando um ambiente organizado, acolhedor e especialmente pensado para o conforto dos pequenos e a segurança dos pais.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Como nossos próprios pacientes dizem, buscamos sempre ser "muito simpáticos e carinhosos", oferecendo um atendimento extremamente profissional. Queremos que cada criança saia daqui gostando de cuidar do próprio sorriso.
            </p>
            
            <div className="p-6 bg-brand-light rounded-2xl border border-brand-primary/10 border-l-4 border-l-brand-primary">
              <p className="italic text-brand-dark font-medium opacity-90">
                “Primeira vez que fui com minha filha, me senti muito aliviada. Estava com medo de ela ficar nervosa, mas estou apaixonada e minha filha também!”
              </p>
              <p className="text-sm text-brand-primary font-semibold mt-3">— Mãe de paciente</p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(110,193,228,0.12)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
