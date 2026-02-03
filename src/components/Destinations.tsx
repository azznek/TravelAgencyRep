import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';
import hero2 from '../assets/hero2.png';
import hero1 from '../assets/hero1.png';
import hero3 from '../assets/hero3.png';

const destinations = [
  {
    title: 'Paris 1889',
    subtitle: 'Belle Époque',
    period: '1889',
    imageUrl: hero2,
    badge: 'Populaire',
    badgeType: 'popular' as const,
    icon: '🗼',
    price: '15 000 €',
    duration: '7 jours / 6 nuits',
    activities: [
      'Visite guidée de l\'Exposition Universelle de 1889',
      'Ascension exclusive de la Tour Eiffel fraîchement inaugurée',
      'Soirée dans les cabarets mythiques du Moulin Rouge',
      'Dégustation de cuisine Belle Époque dans les grands restaurants parisiens',
      'Rencontre avec des artistes et intellectuels de l\'époque',
    ],
    danger: 'Faible - Environnement urbain sécurisé. Nécessite une adaptation aux normes d\'hygiène et de transport de l\'époque. Surveillance médicale recommandée.',
  },
  {
    title: 'Crétacé -65M',
    subtitle: 'Dinosaures',
    period: '-65M années',
    imageUrl: hero1,
    badge: 'Aventure',
    badgeType: 'adventure' as const,
    icon: '🦖',
    price: '25 000 €',
    duration: '7 jours / 6 nuits',
    activities: [
      'Safari d\'observation des dinosaures herbivores (Brachiosaures, Tricératops)',
      'Exploration guidée des forêts préhistoriques primitives',
      'Découverte des écosystèmes marins du Mésozoïque',
      'Observation nocturne sécurisée depuis un camp fortifié',
      'Documentation scientifique avec biologistes experts',
    ],
    danger: 'Élevé - Présence de prédateurs apex (T-Rex, Vélociraptors). Équipement de protection obligatoire. Atmosphère riche en oxygène nécessitant acclimatation. Formation de survie requise.',
  },
  {
    title: 'Florence 1504',
    subtitle: 'Renaissance',
    period: '1504',
    imageUrl: hero3,
    badge: 'Premium',
    badgeType: 'premium' as const,
    icon: '🎨',
    price: '18 000 €',
    duration: '7 jours / 6 nuits',
    activities: [
      'Visite privée de l\'atelier de Léonard de Vinci et Michel-Ange',
      'Observation de la création du David de Michel-Ange',
      'Dégustation de vins toscans dans les villas des Médicis',
      'Cours de peinture Renaissance avec maîtres de l\'époque',
      'Dîners aristocratiques dans les palais florentins',
    ],
    danger: 'Modéré - Contexte historique de conflits politiques. Épidémies sporadiques nécessitant vaccinations préventives. Environnement urbain médiéval exigeant vigilance.',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            NOS <span className="text-gradient-nebula">DESTINATIONS</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Trois univers extraordinaires où le temps se suspend
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
