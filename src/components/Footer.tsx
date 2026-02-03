import { motion } from 'framer-motion';
import { Clock, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-8 h-8 text-amber-500 animate-pulse-glow" />
              <div>
                <span className="text-2xl font-serif font-bold text-white">TimeTravel</span>
                <p className="text-xs text-amber-500 font-semibold uppercase tracking-widest">Agency</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Votre agence de voyages temporels de luxe. Nous créons des expériences uniques à travers l'histoire depuis 2026.
            </p>

            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: '#fbbf24' }}
                  className="text-gray-500 hover:text-amber-400 transition-colors"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:contact@timetravel.agency" className="text-white hover:text-amber-400 transition-colors font-medium">
                    contact@timetravel.agency
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Téléphone</p>
                  <a href="tel:+33123456789" className="text-white hover:text-amber-400 transition-colors font-medium">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Destinations', href: '#destinations' },
                { label: 'Chrono-Quiz', href: '#quiz' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <p className="text-gray-500 text-xs">
              &copy; 2026 TimeTravel Agency. Tous droits réservés.
            </p>
            <div className="text-xs text-gray-500 text-right">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Mentions légales
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-6 border-t border-white/10 text-center"
          >
            <p className="text-gradient-nebula text-sm font-semibold">
              Kenza DAHMANI • TimeTravel Agency
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
