import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1. LA VIDÉO EN ARRIÈRE-PLAN */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Assure-toi d'avoir renommé ton fichier sur GitHub ! */}
          <source src="/hero-main.mp4" type="video/mp4" />
        </video>
        {/* Overlay sombre pour lire le texte */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-950" />
      </div>

      {/* 2. LE CONTENU TEXTE PAR-DESSUS */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
        >
          EXPLOREZ L'HISTOIRE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            RÉINVENTÉE
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 font-light"
        >
          Votre voyage temporel commence ici. Luxe, Sécurité, Immersion.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all"
        >
          Choisir mon Époque
        </motion.button>
      </div>

      {/* Indicateur de scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
