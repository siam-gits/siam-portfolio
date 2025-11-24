// src/components/Project.jsx — GOD-TIER VERSION
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Project() {
  const isBrowser = typeof window !== 'undefined';
  
  return (
    <section className="flex items-center justify-center relative py-32 lg:py-40 overflow-hidden">
      {/* Epic Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #c084fc 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #f472b6 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, #ec4899 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, #a855f7 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, #c084fc 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-rose-900/40" />
      </div>

      {/* Floating Magic Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm"
          initial={{ 
            x: isBrowser ? Math.random() * window.innerWidth : 0,
            y: -50 
          }}
          animate={{ 
            y: isBrowser ? window.innerHeight + 50 : 1000,
            x: isBrowser ? Math.random() * window.innerWidth : 0
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Side — Pure Fire */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="text-center lg:text-left"
          >
            <motion.h2 
              className="text-5xl lg:text-8xl font-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Conditional Text Color */}
              <span className="text-gray-900 dark:text-white">Got a</span> <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                crazy idea?
              </span>
            </motion.h2>

           <motion.p 
  className="mt-8 text-xl lg:text-2xl font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed text-gray-900 dark:text-white/90"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  Let's turn your vision into a jaw-dropping digital experience. 
  From wild concepts to pixel-perfect reality, I make magic happen.
</motion.p>


            {/* Ultimate CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center gap-4 bg-white text-gray-900 px-12 py-7 rounded-full text-2xl font-bold shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-8 h-8 text-purple-600" />
                Let's Build Something Epic
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />

                {/* Shiny hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Side — Heroic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", stiffness: 70 }}
            className="flex justify-center lg:justify-end"
            whileHover={{ scale: 1.03, rotate: 2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-70 animate-pulse"></div>
              <img
                src="/pic1.png"
                alt="Ready for your project"
                className="relative z-10 rounded-3xl shadow-3xl max-w-lg w-full border-8 border-white/30"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}