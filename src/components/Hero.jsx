// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Linkedin, Facebook, Twitter, Github, ArrowDown } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/akibulsiam/' },
  { icon: Facebook, href: 'https://www.facebook.com/akibul.siam71' },
  { icon: Twitter, href: 'https://twitter.com/siam_akibul' },
  { icon: Github, href: 'https://github.com/siam-gits' },
];

// Animated blob path (morphing shape)
const blobPath = [
  "M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59 6.34045 33.4827C20.1657 7.96537 58.3314 -3.86947 96.312 1.48787C134.292 6.84521 174.042 10.8571 190.312 36.4879Z",

  "M180 40C205 65 195 110 175 140C155 170 125 185 100 184C75 183 45 160 25 125C5 90 -5 55 10 35C25 15 60 5 100 5C140 5 165 20 180 40Z",

  "M195 38C212 68 208 108 188 138C168 168 132 188 102 187C72 186 42 162 23 128C4 94 -6 58 8 36C22 14 58 8 98 8C138 8 170 18 195 38Z",

  "M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59 6.34045 33.4827C20.1657 7.96537 58.3314 -3.86947 96.312 1.48787C134.292 6.84521 174.042 10.8571 190.312 36.4879Z"
];


export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text & Social */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Social Icons (NOW INLINE and SCROLLABLE)
            Using 'flex' and 'gap-5' to display horizontally.
          */}
          <div className="flex gap-5 mb-8">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Siam</span>
          </h1>

          <div className="h-16 lg:h-20 mt-4">
            <TypeAnimation
              sequence={[
                'React Developer',
                2000,
                'Frontend Engineer',
                2000,
                
              ]}
              wrapper="h2"
              speed={30}
              className="text-3xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400"
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Passionate about creating dynamic and responsive web applications. Skilled in React and front-end development, delivering high-quality solutions.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition"
          >
            Contact Me <span className="text-xl">✈</span>
          </motion.a>

          {/* Scroll Down Indicator */}
          <motion.a
            href="#about"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-600 dark:text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm">Scroll down</span>
            <ArrowDown size={28} />
          </motion.a>
        </motion.div>

        {/* Right Side - Animated Blob Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.svg
            width="450"
            height="450"
            viewBox="0 0 200 187"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>

            <motion.path
              d={blobPath[0]}
              fill="url(#blobGradient)"
              animate={{
                d: blobPath,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <image
              href="/pic2.png"  // Put your photo in public/pic2.png
              x="12"
              y="18"
              width="176"
              height="176"
              className="rounded-full"
              clipPath="url(#blobMask)"
            />

            <clipPath id="blobMask">
              <motion.path
                d={blobPath[0]}
                animate={{
                  d: blobPath,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </clipPath>
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}