import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Renata Ribeiro Arruda",
      role: "Local Guide",
      text: "Gostei muito da clínica. Aconchegante, organizada, pensada para as crianças com gibis e livrinhos na recepção. Meus filhos foram atendidos que foi muito atenciosa e profissional na consulta. A secretaria também foi muito cordial.",
      rating: 5
    },
    {
      name: "Victoria Cavalcanti",
      role: "Mãe de paciente",
      text: "Dr Pedro Okazaki muito paciente e cuidadoso, profissional perfeito!",
      rating: 5
    },
    {
      name: "Berenice Schmoeller",
      role: "Paciente",
      text: "Dr. Mariana uma excelente profissional. Muito simpática e carinhosa com os pacientes.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#1E3A5F] relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 opacity-10 blur-3xl w-96 h-96 bg-[#6EC1E4] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-yellow-400 font-medium">5,0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-white/80 ml-2">Avaliações reais no Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que os pais dizem sobre nós
          </h2>
          <p className="text-brand-primary/80 max-w-2xl mx-auto">
            A confiança da sua família é o nosso maior orgulho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{review.name}</h4>
                  <p className="text-brand-primary/70 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
