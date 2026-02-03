import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, RotateCcw, Sparkles } from 'lucide-react';

interface Answers {
  experience: string;
  periode: string;
  preference: string;
  activite: string;
}

interface Recommendation {
  destination: string;
  description: string;
  price: string;
  icon: string;
  reasons: string[];
}

const ChronoQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    experience: '',
    periode: '',
    preference: '',
    activite: '',
  });
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'experience',
      title: 'Quel type d\'expérience recherchez-vous ?',
      options: [
        { value: 'culturelle', label: 'Culturelle et artistique', icon: '🎨' },
        { value: 'aventure', label: 'Aventure et nature sauvage', icon: '🦖' },
        { value: 'elegance', label: 'Élégance et raffinement', icon: '✨' },
      ],
    },
    {
      id: 'periode',
      title: 'Votre période historique préférée ?',
      options: [
        { value: 'moderne', label: 'Histoire moderne (XIXe-XXe)', icon: '🏛️' },
        { value: 'ancien', label: 'Temps anciens et origines', icon: '⏳' },
        { value: 'renaissance', label: 'Renaissance et classicisme', icon: '🎭' },
      ],
    },
    {
      id: 'preference',
      title: 'Vous préférez :',
      options: [
        { value: 'urbain', label: 'L\'effervescence urbaine', icon: '🌆' },
        { value: 'nature', label: 'La nature sauvage et vierge', icon: '🌿' },
        { value: 'architecture', label: 'L\'art et l\'architecture', icon: '🏰' },
      ],
    },
    {
      id: 'activite',
      title: 'Votre activité idéale :',
      options: [
        { value: 'monuments', label: 'Visiter des monuments historiques', icon: '🗼' },
        { value: 'faune', label: 'Observer la faune exceptionnelle', icon: '🦕' },
        { value: 'musees', label: 'Explorer musées et ateliers d\'artistes', icon: '🖼️' },
      ],
    },
  ];

  const calculateRecommendation = (): Recommendation => {
    const scores = {
      paris: 0,
      cretace: 0,
      florence: 0,
    };

    if (answers.experience === 'culturelle') {
      scores.florence += 3;
      scores.paris += 2;
    } else if (answers.experience === 'aventure') {
      scores.cretace += 3;
      scores.paris += 1;
    } else if (answers.experience === 'elegance') {
      scores.paris += 3;
      scores.florence += 2;
    }

    if (answers.periode === 'moderne') {
      scores.paris += 3;
    } else if (answers.periode === 'ancien') {
      scores.cretace += 3;
    } else if (answers.periode === 'renaissance') {
      scores.florence += 3;
    }

    if (answers.preference === 'urbain') {
      scores.paris += 2;
      scores.florence += 1;
    } else if (answers.preference === 'nature') {
      scores.cretace += 3;
    } else if (answers.preference === 'architecture') {
      scores.florence += 2;
      scores.paris += 1;
    }

    if (answers.activite === 'monuments') {
      scores.paris += 2;
      scores.florence += 1;
    } else if (answers.activite === 'faune') {
      scores.cretace += 3;
    } else if (answers.activite === 'musees') {
      scores.florence += 3;
      scores.paris += 1;
    }

    const winner = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];

    const recommendations: Record<string, Recommendation> = {
      paris: {
        destination: 'PARIS 1889 - Belle Époque',
        description: 'Votre profil correspond parfaitement à Paris 1889! Vous allez adorer l\'effervescence de l\'Exposition Universelle, la Tour Eiffel fraîchement inaugurée, les cabarets légendaires du Moulin Rouge et l\'atmosphère raffinée de la Belle Époque. Une expérience urbaine élégante et culturellement riche!',
        price: '15 000 €',
        icon: '🗼',
        reasons: [
          'Parfait pour les amateurs de culture urbaine',
          'Architecture innovante et monuments emblématiques',
          'Atmosphère raffinée et élégante',
          'Histoire moderne accessible et fascinante',
        ],
      },
      cretace: {
        destination: 'CRÉTACÉ -65M - Ère des Dinosaures',
        description: 'Votre esprit aventurier vous appelle au Crétacé! Vous êtes fait pour observer les T-Rex, Vélociraptors et Brachiosaures dans leur habitat naturel. Safari sécurisé, nature préhistorique vierge, et l\'expérience la plus extrême de votre vie. Pour les vrais aventuriers!',
        price: '25 000 €',
        icon: '🦖',
        reasons: [
          'Aventure extrême et nature sauvage',
          'Faune préhistorique exceptionnelle',
          'Expérience unique au monde',
          'Pour les explorateurs intrépides',
        ],
      },
      florence: {
        destination: 'FLORENCE 1504 - Renaissance',
        description: 'Florence 1504 est votre destination idéale! Vous allez être émerveillé par les ateliers de Léonard de Vinci et Michel-Ange, le David en cours de création, les palais des Médicis et les vins toscans. Le berceau de la Renaissance vous attend pour une expérience culturelle et artistique inoubliable!',
        price: '18 000 €',
        icon: '🎨',
        reasons: [
          'Berceau de l\'art et de la Renaissance',
          'Rencontres avec les plus grands artistes',
          'Architecture et culture raffinées',
          'Gastronomie et vins toscans d\'exception',
        ],
      },
    };

    return recommendations[winner];
  };

  const handleAnswer = (value: string) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: value,
    };
    setAnswers(newAnswers as Answers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({
      experience: '',
      periode: '',
      preference: '',
      activite: '',
    });
    setShowResult(false);
  };

  return (
    <section id="quiz" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl" />
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
            <span className="text-gradient-nebula">CHRONO-QUIZ</span>
          </h2>
          <p className="text-xl text-gray-400">
            Découvrez votre destination temporelle idéale en 4 questions
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-nebula rounded-3xl p-10 lg:p-14"
            >
              <div className="mb-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-4xl font-bold text-white">
                    {questions[currentQuestion].title}
                  </h3>
                  <span className="text-amber-400 font-bold text-xl">
                    {currentQuestion + 1}/4
                  </span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-amber-400 to-purple-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.value)}
                    className="p-6 text-left glass-nebula hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-purple-600/20 border-2 border-white/10 hover:border-amber-400/50 rounded-2xl transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{option.icon}</span>
                      <span className="text-xl font-semibold text-white group-hover:text-gradient-nebula transition-all">
                        {option.label}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-nebula rounded-3xl p-12 text-center glow-nebula"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="text-8xl mb-8"
              >
                {calculateRecommendation().icon}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <CheckCircle className="w-7 h-7 text-green-500" />
                  <h3 className="text-4xl sm:text-5xl font-bold text-gradient-nebula text-center">
                    {calculateRecommendation().destination}
                  </h3>
                </div>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {calculateRecommendation().description}
                </p>

                <div className="glass-nebula rounded-2xl p-6 mb-8">
                  <h4 className="text-lg font-semibold text-amber-400 mb-4">Pourquoi cette destination ?</h4>
                  <ul className="text-left space-y-2 text-gray-300">
                    {calculateRecommendation().reasons.map((reason, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{reason}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="glass-nebula rounded-2xl p-8 mb-10 inline-block">
                  <p className="text-3xl font-bold text-gradient-nebula mb-2">
                    {calculateRecommendation().price}
                  </p>
                  <p className="text-gray-400">Expérience immersive 7 jours incluse</p>
                </div>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-nebula w-full inline-flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-6 h-6" />
                    <span className="text-xl">Voir l'offre</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={resetQuiz}
                    className="w-full glass-nebula hover:bg-white/10 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Recommencer le quiz</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ChronoQuiz;
