// src/App.jsx
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0,1]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {/*
          Applied 'space-y-24' to create a consistent vertical gap between all child elements
          (Hero, About, Skills, etc.) and 'py-12' for overall vertical padding.
        */}
        <main className="space-y-10 py-12">
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Project />
          <Testimonial />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;