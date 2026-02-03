import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    title: string;
    price: string;
    icon: string;
  };
}

const BookingModal = ({ isOpen, onClose, destination }: BookingModalProps) => {
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (departureDate && returnDate && travelers > 0) {
      setIsConfirmed(true);
      setTimeout(() => {
        setIsConfirmed(false);
        onClose();
        setDepartureDate('');
        setReturnDate('');
        setTravelers(1);
      }, 3000);
    }
  };

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
            <div className="bg-gray-800 rounded-3xl max-w-lg w-full border border-amber-500/20 shadow-2xl overflow-hidden">
              {!isConfirmed ? (
                <>
                  <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 p-6 border-b border-amber-500/20">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-4xl mb-2">{destination.icon}</p>
                        <h3 className="text-2xl font-serif font-bold text-white">
                          Réserver {destination.title}
                        </h3>
                        <p className="text-amber-400 font-semibold text-lg mt-2">
                          {destination.price}
                        </p>
                      </div>
                      <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-semibold text-gray-300 mb-2">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        <span>Date de départ</span>
                      </label>
                      <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 border border-gray-600"
                      />
                    </div>

                    <div>
                      <label className="flex items-center space-x-2 text-sm font-semibold text-gray-300 mb-2">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        <span>Date de retour</span>
                      </label>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 border border-gray-600"
                      />
                    </div>

                    <div>
                      <label className="flex items-center space-x-2 text-sm font-semibold text-gray-300 mb-2">
                        <Users className="w-4 h-4 text-amber-500" />
                        <span>Nombre de voyageurs</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={travelers}
                        onChange={(e) => setTravelers(parseInt(e.target.value))}
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 border border-gray-600"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleConfirm}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all"
                    >
                      Confirmer la réservation
                    </motion.button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                  >
                    <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">
                    Réservation confirmée!
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Votre voyage vers {destination.title} est maintenant confirmé.
                    Vous recevrez un email de confirmation sous peu.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
