import { motion } from 'framer-motion';
import { Shield, Sparkles, Eye } from 'lucide-react';

const About = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Protection quantique maximale',
    },
    {
      icon: Sparkles,
      title: 'Luxe',
      description: 'Expérience premium exclusive',
    },
    {
      icon: Eye,
      title: 'Immersion',
      description: 'Authenticité historique totale',
    },
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
            L'AGENCE
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            TimeTravel Agency est la référence mondiale du voyage temporel.
            <br className="hidden sm:block" />
            Sécurité quantique garantie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-nebula rounded-2xl p-8 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-purple-600 mb-6 glow-nebula"
              >
                <badge.icon className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {badge.title}
              </h3>
              <p className="text-gray-400 text-lg">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
