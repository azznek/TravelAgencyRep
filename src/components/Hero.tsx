import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// IMPORT DE LA VIDÉO DU HERO (Depuis assets)
import mainVideo from '../assets/hero-main.mp4'; 

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* On utilise la variable importée ici */}
          <source src={mainVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          EXPLOREZ L'HISTOIRE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            RÉINVENTÉE
          </span>
        </motion.h1>
        
        <button onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })} className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-full mt-8">
          Commencer le Voyage
        </button>
      </div>
    </section>
  );
};

export default Hero;
