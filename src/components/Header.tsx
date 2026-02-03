import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Détection du scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'L\'Agence', href: '#about' }, // Assure-toi d'avoir un id="about" dans ton composant About
    { name: 'Concept', href: '#quiz' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-white/10 py-4 shadow-lg'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-amber-500 p-2 rounded-lg">
              <Rocket className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-wider">
              TIME<span className="text-amber-500">TRAVEL</span>
            </span>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
              </a>
            ))}
            
            <button 
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-950 px-6 py-2 rounded-full font-semibold transition-all duration-300"
            >
              Réserver
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-amber-400 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                   setIsMobileMenuOpen(false);
                   document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-lg"
              >
                Réserver
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;