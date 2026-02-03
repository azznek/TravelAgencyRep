import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Flame, Trophy } from 'lucide-react';
import DestinationDetailsModal from './DestinationDetailsModal';
import BookingModal from './BookingModal';

interface DestinationCardProps {
  title: string;
  subtitle: string;
  period: string;
  imageUrl: string;
  videoUrl?: string;
  delay: number;
  badge?: string;
  badgeType?: 'popular' | 'adventure' | 'premium';
  icon: string;
  price: string;
  activities: string[];
  danger: string;
  duration: string;
}

const DestinationCard = ({
  title,
  subtitle,
  period,
  imageUrl,
  videoUrl,
  delay,
  badge,
  badgeType = 'popular',
  icon,
  price,
  activities,
  danger,
  duration,
}: DestinationCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Nouvel état pour détecter le survol

  const badgeStyles = {
    popular: 'bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900',
    adventure: 'bg-gradient-to-r from-red-500 to-red-600 text-white',
    premium: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900',
  };

  const badgeIcons = {
    popular: <Trophy className="w-4 h-4" />,
    adventure: <Flame className="w-4 h-4" />,
    premium: <Trophy className="w-4 h-4" />,
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -15 }}
        onMouseEnter={() => setIsHovered(true)} // Déclenche la vidéo
        onMouseLeave={() => setIsHovered(false)} // Arrête la vidéo
        className="group relative bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300"
      >
        {/* Container Image/Vidéo */}
        <div className="relative h-72 overflow-hidden">
          
          {/* 1. L'IMAGE (Toujours là en fond) */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            animate={{ scale: isHovered ? 1.1 : 1 }} // Zoom doux au survol
            transition={{ duration: 0.6 }}
          />

          {/* 2. LA VIDÉO (Se superpose au survol) */}
          {videoUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }} // Apparition progressive
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          {/* Overlay sombre (Gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none" />

          {/* Badges (Au-dessus de la vidéo) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: delay + 0.3 }}
            className={`absolute top-4 left-4 ${badgeStyles[badgeType]} px-3 py-2 rounded-full text-xs font-bold flex items-center space-x-1 z-10`}
          >
            {badgeIcons[badgeType]}
            <span>{badge}</span>
          </motion.div>

          <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur border border-amber-500/50 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 z-10">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>

        {/* Contenu Texte */}
        <div className="p-7 relative z-20 bg-gray-900">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-3 flex-1">
              <motion.div whileHover={{ scale: 1.2 }} className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-500" />
              </motion.div>
              <h3 className="text-3xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-gray-400 mb-4 leading-relaxed text-sm">{subtitle}</p>

          <div className="mb-6">
            <p className="text-amber-400 font-serif text-2xl font-bold">{price}</p>
            <p className="text-gray-500 text-xs">Par personne / semaine</p>
          </div>

          <div className="flex space-x-3">
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDetails(true)}
              className="flex-1 inline-flex items-center justify-center space-x-2 text-amber-400 font-semibold border border-amber-500/50 hover:bg-amber-500/10 px-4 py-3 rounded-lg transition-all"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBooking(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Réserver
            </motion.button>
          </div>
        </div>

        {/* Bordure brillante au survol */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-2xl transition-colors duration-300 pointer-events-none" />

        {/* Effet de lueur en bas */}
        <motion.div
          className="absolute -bottom-2 -right-2 w-32 h-32 bg-amber-500/20 rounded-full filter blur-2xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      <DestinationDetailsModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        onBook={() => setShowBooking(true)}
        destination={{ title, subtitle, period, icon, price, activities, danger, duration }}
      />

      <BookingModal
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
        destination={{ title, price, icon }}
      />
    </>
  );
};

export default DestinationCard;
