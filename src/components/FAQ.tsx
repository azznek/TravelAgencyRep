import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Est-ce dangereux?',
      answer: 'Absolument pas! Notre technologie chrono-stabilisante est certifiée par les normes galactiques les plus strictes. Chaque voyage est accompagné d\'un guide expert et d\'un équipement de protection avancé. Notre taux de satisfaction est de 99.98%.',
    },
    {
      question: 'Politique de remboursement?',
      answer: 'Nous offrons un remboursement intégral jusqu\'à 30 jours avant le départ. Entre 30 et 15 jours, 50% du montant est remboursable. Moins de 15 jours, aucun remboursement n\'est possible sauf circonstances exceptionnelles validées par notre équipe.',
    },
    {
      question: 'Vaccins nécessaires?',
      answer: 'Chaque époque nécessite des vaccinations spécifiques. Pour le Moyen Âge et la Renaissance, des vaccins contre la peste et diverses maladies sont obligatoires. Pour le Crétacé, un traitement d\'acclimatation à l\'oxygène est requis. Tout est inclus dans notre forfait médical premium.',
    },
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            QUESTIONS FRÉQUENTES
          </h2>
          <p className="text-xl text-gray-400">
            Tout ce que vous devez savoir avant de voyager dans le temps
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-nebula rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-amber-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-amber-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
