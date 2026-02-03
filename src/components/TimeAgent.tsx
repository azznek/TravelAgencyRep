import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Zap, Shield, Clock } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  type?: 'message' | 'info';
}

const TimeAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Bienvenue auprès de TimeTravel Agency! Je suis Chronos, votre Guide Historien personnel de luxe. Comment puis-je enrichir votre expérience temporelle aujourd\'hui?',
      sender: 'agent',
      timestamp: new Date(),
      type: 'message',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const suggestedQuestions = [
    { text: 'Quels sont les dangers ?', key: 'dangers' },
    { text: 'Comment payer ?', key: 'payment' },
    { text: 'Quelle destination choisir ?', key: 'destination' },
  ];

  const responses: Record<string, string> = {
    dangers: 'Distingué voyageur, chaque époque présente ses propres défis. Paris 1889 offre un risque faible dans un cadre urbain civilisé. Le Crétacé, quant à lui, nécessite une vigilance extrême face aux prédateurs apex - une aventure pour les âmes courageuses uniquement. Florence 1504 présente un risque modéré lié aux tensions politiques de la Renaissance. Rassurez-vous, notre équipement de protection dernier cri et nos guides experts garantissent votre sécurité absolue.',
    payment: 'Nous acceptons tous les moyens de paiement premium : cartes bancaires internationales, virements, cryptomonnaies, et même l\'or physique pour nos clients les plus traditionnels. Un acompte de 30% est requis à la réservation, le solde étant dû 15 jours avant le départ. Des facilités de paiement en plusieurs fois sont disponibles pour les voyages excédant 20 000 €. Chaque transaction est sécurisée par cryptage temporel quantique.',
    destination: 'Ah, quelle question fascinante! Permettez-moi de vous guider tel un conseiller historique. Êtes-vous passionné d\'art et de culture raffinée? Florence 1504 vous émerveillera. Recherchez-vous l\'effervescence urbaine et la modernité naissante? Paris 1889 est fait pour vous. Ou bien êtes-vous une âme aventureuse en quête de sensations primordiales? Le Crétacé vous attend. Je vous recommande vivement notre Chrono-Quiz pour une recommandation personnalisée basée sur vos préférences.',
    general: 'Excellente question, cher voyageur temporel! En tant qu\'historien et guide de luxe, je suis à votre entière disposition pour éclairer votre parcours à travers les âges. N\'hésitez pas à explorer nos destinations, tarifs, ou modalités de voyage. L\'histoire vous attend!',
  };

  const handleSuggestedQuestion = (key: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: suggestedQuestions.find((q) => q.key === key)?.text || 'Question',
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const agentMessage: Message = {
        id: messages.length + 2,
        text: responses[key],
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
    }, 800);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const agentMessage: Message = {
        id: messages.length + 2,
        text: responses.general,
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-full sm:w-96 h-[36rem] bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-amber-500/20 flex flex-col z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-500/20 via-amber-600/20 to-amber-700/10 backdrop-blur-md p-5 border-b border-amber-500/20 flex justify-between items-start">
              <div className="flex items-start space-x-3 flex-1">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <Clock className="w-6 h-6 text-gray-900" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-white text-lg">Chronos</h3>
                  <p className="text-xs text-amber-300 font-semibold">Guide Historien Premium</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-amber-400 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-br-none'
                        : 'bg-gray-700/60 text-gray-100 rounded-bl-none border border-gray-600/50'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('fr-FR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {messages.length === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-5 py-4 border-t border-gray-700"
              >
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-3">
                  Questions rapides
                </p>
                <div className="space-y-2">
                  {suggestedQuestions.map((q) => (
                    <motion.button
                      key={q.key}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSuggestedQuestion(q.key)}
                      className="w-full text-left text-sm bg-gray-700/40 hover:bg-amber-500/20 border border-gray-600/50 hover:border-amber-500/50 text-gray-300 hover:text-amber-400 px-3 py-2 rounded-lg transition-all"
                    >
                      {q.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="p-5 border-t border-gray-700 bg-gray-900/50">
              <div className="flex space-x-2 mb-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-gray-700/60 border border-gray-600/50 text-white rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-500 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-full p-3 hover:shadow-lg hover:shadow-amber-500/50 transition-all"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% sécurisé</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Réponse instantanée</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-amber-500 via-amber-500 to-amber-600 rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-amber-500/50 transition-all group glow-gold"
      >
        <MessageCircle className="w-8 h-8 text-gray-900 group-hover:scale-110 transition-transform" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-2 border-amber-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
        />
      </motion.button>
    </>
  );
};

export default TimeAgent;
