import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Clock, Users, AlertTriangle } from 'lucide-react';

interface DestinationDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
  destination: {
    title: string;
    subtitle: string;
    period: string;
    icon: string;
    price: string;
    activities: string[];
    danger: string;
    duration: string;
  };
}

const DestinationDetailsModal = ({
  isOpen,
  onClose,
  onBook,
  destination,
}: DestinationDetailsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gray-800 rounded-3xl max-w-2xl w-full border border-amber-500/20 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 p-8 border-b border-amber-500/20">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-6xl mb-3">{destination.icon}</p>
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">
                      {destination.title}
                    </h3>
                    <p className="text-gray-300 text-lg">{destination.subtitle}</p>
                    <div className="flex items-center space-x-4 mt-4">
                      <span className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold">
                        {destination.period}
                      </span>
                      <span className="text-amber-400 font-serif text-2xl font-bold">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <h4 className="text-xl font-serif font-bold text-white">
                      Durée du séjour
                    </h4>
                  </div>
                  <p className="text-gray-300">{destination.duration}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="w-5 h-5 text-amber-500" />
                    <h4 className="text-xl font-serif font-bold text-white">
                      Activités incluses
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {destination.activities.map((activity, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <h4 className="text-xl font-serif font-bold text-white">
                      Niveau de dangerosité
                    </h4>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <p className="text-gray-300">{destination.danger}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="w-5 h-5 text-green-500" />
                    <h4 className="text-xl font-serif font-bold text-white">
                      Mesures de sécurité
                    </h4>
                  </div>
                  <p className="text-gray-300">
                    Équipement de protection complet, guide expert historien, balise de
                    localisation temporelle, assurance voyage temporel premium.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onBook();
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all"
                >
                  Réserver cette destination
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DestinationDetailsModal;
