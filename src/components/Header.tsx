import { motion } from 'framer-motion';
import { Clock, Menu } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-amber-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative">
              <Clock className="w-8 h-8 text-amber-500 animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-white tracking-wide">
                TimeTravel
              </span>
              <span className="text-xs text-amber-500 font-semibold uppercase tracking-widest">
                Agency
              </span>
            </div>
          </motion.div>

          <nav className="hidden lg:flex space-x-12">
            {[
              { label: 'Accueil', href: '#accueil' },
              { label: 'Destinations', href: '#destinations' },
              { label: 'Quiz', href: '#quiz' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium text-sm uppercase tracking-widest relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <button className="lg:hidden text-amber-500 hover:text-amber-400 p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
