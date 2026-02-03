import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';

// On garde les imports d'images car ils marchent bien pour les vignettes
import hero2 from '../assets/hero2.png'; // Paris
import hero1 from '../assets/hero1.png'; // Crétacé
import hero3 from '../assets/hero3.png'; // Florence

const destinations = [
  {
    title: 'Paris 1889',
    subtitle: 'Belle Époque',
    period: '1889',
    imageUrl: hero2, 
    videoUrl: '/paris.mp4', // Nouveau nom simple
    badge: 'Populaire',
    badgeType: 'popular' as const,
    icon: '🗼',
    price: '15 000 €',
    duration: '7 jours / 6 nuits',
    activities: ['Exposition Universelle', 'Tour Eiffel', 'Moulin Rouge'],
    danger: 'Faible',
  },
  {
    title: 'Crétacé -65M',
    subtitle: 'Dinosaures',
    period: '-65M années',
    imageUrl: hero1,
    videoUrl: '/dino.mp4', // Nouveau nom simple
    badge: 'Aventure',
    badgeType: 'adventure' as const,
    icon: '🦖',
    price: '25 000 €',
    duration: '7 jours / 6 nuits',
    activities: ['Safari T-Rex', 'Forêts primitives', 'Biologie'],
    danger: 'Élevé',
  },
  {
    title: 'Florence 1504',
    subtitle: 'Renaissance',
    period: '1504',
    imageUrl: hero3,
    videoUrl: '/florence.mp4', // Nouveau nom simple
    badge: 'Premium',
    badgeType: 'premium' as const,
    icon: '🎨',
    price: '18 000 €',
    duration: '7 jours / 6 nuits',
    activities: ['Léonard de Vinci', 'Michel-Ange', 'Vins Toscans'],
    danger: 'Modéré',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Ambiancé */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            NOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-600">DESTINATIONS</span>
          </h2>
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
