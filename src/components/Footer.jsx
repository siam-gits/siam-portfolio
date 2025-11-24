// src/components/Footer.jsx — FINAL COMPACT VERSION
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/akibul.siam71' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/akibulsiam/' },
  { icon: Twitter, href: 'https://twitter.com/siam_akibul' },
  { icon: Instagram, href: 'https://www.instagram.com/akibul.siam/' },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Siam
              </h3>
              <p className="mt-2 text-sm text-gray-400">React Developer & Digital Creator</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Quick Links</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-purple-400 transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Me</h4>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="p-2.5 bg-gray-800 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} All rights reserved to Siam
            </p>
          </div>
        </div>
      </footer>

      {/* Compact Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-xl z-50"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}