import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, DollarSign, Shield, Compass, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChronoBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Bonjour! Je suis ChronoBot, passionné d\'histoire et expert en voyages temporels. Je suis là pour vous guider vers votre destination temporelle idéale! Paris 1889, Florence 1504, ou le Crétacé -65M? Posez-moi toutes vos questions!',
      sender: 'bot',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chips = [
    {
      icon: DollarSign,
      label: 'Prix',
      key: 'price',
      response: 'Nos tarifs varient selon l\'époque: Paris 1889 à 15 000€, Florence 1504 à 18 000€, et le Crétacé à 25 000€ par semaine. Tout inclus: transport temporel, hébergement premium, guide expert, équipement de sécurité et assurance voyage.',
    },
    {
      icon: Shield,
      label: 'Sécurité',
      key: 'safety',
      response: 'Votre sécurité est notre priorité absolue! Technologie chrono-stabilisante certifiée, monitoring biologique en temps réel, guides historiens experts, et taux de satisfaction de 99.98%. Chaque voyageur est équipé d\'une balise de localisation temporelle d\'urgence.',
    },
    {
      icon: Compass,
      label: 'Conseil',
      key: 'advice',
      response: 'Je recommande de commencer par notre Chrono-Quiz pour une destination personnalisée! Paris 1889 pour les amateurs de culture urbaine, le Crétacé pour les aventuriers intrépides, et Florence 1504 pour les passionnés d\'art Renaissance.',
    },
  ];

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('coucou')) {
      return 'Bonjour et bienvenue chez TimeTravel Agency! Je suis votre assistant temporel personnel. Passionné d\'histoire et expert en voyages chrono-dimensionnels, je suis là pour vous guider vers l\'époque qui vous correspond. Quelle période vous fait rêver?';
    }

    if (msg.includes('prix') || msg.includes('tarif') || msg.includes('coût') || msg.includes('budget') || msg.includes('€')) {
      return 'Nos forfaits premium incluent absolument tout pour une expérience sans souci! Paris 1889 Belle Époque: 15 000€ | Florence 1504 Renaissance: 18 000€ | Crétacé -65M Aventure Extrême: 25 000€. Tout compris: transport temporel aller-retour, hébergement 5 étoiles époque, guides historiens certifiés, équipement de sécurité dernière génération, et assurance chrono-voyage complète.';
    }

    if (msg.includes('sécurité') || msg.includes('danger') || msg.includes('risque') || msg.includes('sûr') || msg.includes('safe')) {
      return 'La sécurité est notre ADN! Notre technologie chrono-stabilisante est certifiée par l\'Institut Temporel International. Vous bénéficiez d\'un monitoring biologique en temps réel, de guides experts formés aux protocoles historiques, et d\'une balise de localisation temporelle d\'urgence. Avec 99.98% de satisfaction client et zéro incident majeur en 15 ans, vous êtes entre de très bonnes mains!';
    }

    if (msg.includes('paris') || msg.includes('1889') || msg.includes('belle époque') || msg.includes('tour eiffel')) {
      return 'Ah, Paris 1889! Mon coup de cœur personnel. Imaginez: vous déambulez dans l\'Exposition Universelle, vous montez dans la Tour Eiffel fraîchement inaugurée sous les regards émerveillés des parisiens, vous assistez à un spectacle au Moulin Rouge... L\'élégance, l\'innovation, la joie de vivre de la Belle Époque! Pour les amateurs de culture urbaine raffinée. 15 000€ la semaine tout compris.';
    }

    if (msg.includes('florence') || msg.includes('1504') || msg.includes('renaissance') || msg.includes('vinci') || msg.includes('michel-ange')) {
      return 'Florence 1504, le berceau de la Renaissance! Vous côtoierez Léonard de Vinci dans son atelier, observerez Michel-Ange sculpter le David... C\'est l\'âge d\'or de l\'art occidental! Imaginez dîner avec les Médicis, déguster des vins toscans dans leurs villas, apprendre la peinture avec les maîtres... Une expérience culturelle absolument unique. 18 000€ la semaine, expérience inoubliable garantie.';
    }

    if (msg.includes('crétacé') || msg.includes('dinosaure') || msg.includes('préhistoire') || msg.includes('t-rex') || msg.includes('jurassic')) {
      return 'Le Crétacé -65M, notre destination la plus spectaculaire! Pour les aventuriers dans l\'âme. Observez des T-Rex chasser, des Brachiosaures se nourrir, des Vélociraptors en meute... depuis notre camp fortifié ultra-sécurisé bien sûr! L\'atmosphère riche en oxygène vous donnera une énergie incroyable. Safari encadré par des biologistes experts. C\'est intense, c\'est grandiose, c\'est la vie préhistorique authentique! 25 000€ avec formation sécurité incluse.';
    }

    if (msg.includes('réserver') || msg.includes('réservation') || msg.includes('booking') || msg.includes('book')) {
      return 'Excellente décision! Pour réserver, deux options: 1) Cliquez sur le bouton "Réserver" dans notre section Destinations, ou 2) Faites notre Chrono-Quiz pour une recommandation personnalisée! Notre équipe vous contactera sous 24h pour finaliser votre voyage temporel. Des questions avant de vous lancer?';
    }

    if (msg.includes('conseil') || msg.includes('recommandation') || msg.includes('destination') || msg.includes('choisir') || msg.includes('hésiter')) {
      return 'Avec plaisir! Tout dépend de vos passions: Vous aimez l\'art et la culture raffinée? → Florence 1504. L\'effervescence urbaine et l\'innovation? → Paris 1889. L\'aventure extrême et la nature sauvage? → Crétacé. Ou faites notre Chrono-Quiz en haut de page, il analyse vos préférences pour vous recommander LA destination parfaite!';
    }

    if (msg.includes('quiz') || msg.includes('test') || msg.includes('questionnaire')) {
      return 'Notre Chrono-Quiz est conçu pour identifier votre destination temporelle idéale! En 4 questions rapides, il analyse votre personnalité de voyageur et vous recommande l\'époque qui vous correspond le mieux. Cliquez sur "Chrono-Quiz" en haut de la page pour le découvrir!';
    }

    if (msg.includes('durée') || msg.includes('combien de temps') || msg.includes('jours')) {
      return 'Nos forfaits standard sont de 7 jours / 6 nuits, la durée idéale pour une immersion totale sans paradoxe temporel! Des séjours plus courts (3-4 jours) ou plus longs (jusqu\'à 14 jours) sont possibles sur demande. Chaque jour compte quand on voyage dans le temps!';
    }

    if (msg.includes('nourriture') || msg.includes('manger') || msg.includes('cuisine') || msg.includes('repas')) {
      return 'La gastronomie fait partie intégrante de l\'expérience! À Paris 1889: cuisine Belle Époque dans les grands restaurants. À Florence 1504: festins Renaissance, vins toscans exceptionnels. Au Crétacé: nos chefs préparent des repas 5 étoiles dans le camp (désolé, pas de viande de dinosaure, règles temporelles obligent!). Allergies et régimes spéciaux accommodés.';
    }

    if (msg.includes('hébergement') || msg.includes('hôtel') || msg.includes('logement') || msg.includes('dormir')) {
      return 'Vous séjournez dans le luxe de chaque époque! Paris: hôtel particulier Belle Époque. Florence: palazzo Renaissance des Médicis. Crétacé: camp high-tech ultra-confortable avec vue imprenable sur la vallée des dinosaures. Tout le confort moderne (climatisation, wifi temporel, spa) dans un cadre historique authentique!';
    }

    if (msg.includes('vêtement') || msg.includes('habiller') || msg.includes('costume') || msg.includes('s\'habiller')) {
      return 'Nous fournissons tous les costumes d\'époque authentiques! À Paris et Florence, vous serez habillé comme les élites locales (sur-mesure!). Pour le Crétacé: combinaison de protection high-tech mais confortable. Vous pouvez aussi apporter vos propres vêtements, mais attention aux anachronismes qui pourraient perturber la timeline!';
    }

    if (msg.includes('langue') || msg.includes('parler') || msg.includes('communication')) {
      return 'Nos guides sont polyglottes et maîtrisent les dialectes historiques! De plus, chaque voyageur reçoit un traducteur neural temporel (discret, technologie de pointe) qui traduit instantanément toutes les conversations. Vous comprendrez le latin florentin, le français Belle Époque, et même les rugissements de T-Rex... enfin, ceux-là n\'ont pas besoin de traduction!';
    }

    if (msg.includes('merci') || msg.includes('thank')) {
      return 'Avec grand plaisir! C\'est ma passion de partager l\'histoire vivante avec les voyageurs. N\'hésitez pas si vous avez d\'autres questions sur nos destinations temporelles. À bientôt dans le passé!';
    }

    if (msg.includes('qui es-tu') || msg.includes('qui êtes-vous') || msg.includes('vous êtes')) {
      return 'Je suis ChronoBot, l\'assistant virtuel de TimeTravel Agency et fervent passionné d\'histoire! J\'ai été programmé par nos meilleurs chrononautes pour vous conseiller sur les voyages temporels. Je connais chaque époque sur le bout des circuits, et mon plus grand plaisir est de vous aider à choisir votre aventure temporelle idéale!';
    }

    return 'Excellente question! Je suis là pour vous renseigner sur nos trois destinations (Paris 1889, Florence 1504, Crétacé -65M), les tarifs, la sécurité, l\'hébergement, les activités... N\'hésitez pas à me poser vos questions, je suis passionné par chaque époque! Vous pouvez aussi faire notre Chrono-Quiz pour une recommandation personnalisée.';
  };

  const handleChipClick = (chip: typeof chips[0]) => {
    const userMsg: Message = {
      id: messages.length + 1,
      text: chip.label,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: messages.length + 2,
        text: chip.response,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };

    const messageToSend = inputText;
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(messageToSend);
      const botMsg: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-8rem)] sm:h-[32rem] max-h-[600px] glass-nebula rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden border border-white/10"
          >
            <div className="bg-gradient-to-r from-amber-400 to-purple-600 p-5 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">ChronoBot</h3>
                  <p className="text-xs text-white/80">Assistant Temporel</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: message.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-amber-400 to-purple-600 text-white'
                        : 'bg-white/10 text-white border border-white/20'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 text-white border border-white/20 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-amber-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-amber-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-amber-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="p-4 border-t border-white/10">
                <p className="text-xs text-gray-400 mb-3 text-center">Suggestions rapides</p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {chips.map((chip) => (
                    <motion.button
                      key={chip.key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleChipClick(chip)}
                      className="glass-nebula p-2 rounded-xl hover:bg-white/10 transition-colors flex flex-col items-center space-y-1"
                    >
                      <chip.icon className="w-5 h-5 text-amber-400" />
                      <span className="text-xs text-white font-medium">{chip.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Posez-moi vos questions sur les voyages temporels..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-3 border border-white/20 focus:border-amber-400 focus:outline-none transition-colors text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-gradient-to-r from-amber-400 to-purple-600 p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
        whileHover="hover"
      >
        <AnimatePresence>
          <motion.div
            variants={{
              hover: { opacity: 1, x: -10, scale: 1 },
            }}
            initial={{ opacity: 0, x: 0, scale: 0.8 }}
            className="absolute right-20 top-1/2 -translate-y-1/2 bg-slate-800/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl border border-white/20 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100"
          >
            <p className="text-sm font-semibold">Besoin d'aide?</p>
            <p className="text-xs text-gray-400">Discutez avec ChronoBot</p>
          </motion.div>
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-purple-600 rounded-full shadow-2xl flex items-center justify-center glow-nebula relative"
        >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-slate-950 flex items-center justify-center"
            >
              <span className="text-white text-xs font-bold">!</span>
            </motion.div>
          )}
        </AnimatePresence>
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-amber-400 to-purple-600 rounded-full opacity-50"
        />
      </motion.button>
      </motion.div>
    </>
  );
};

export default ChronoBot;
