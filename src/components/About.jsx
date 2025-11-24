// src/components/About.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Download } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { value: 5, label: 'Years experience', suffix: '+' },
    { value: 20, label: 'Completed projects', suffix: '+' },
    { value: 3, label: 'Companies worked', suffix: '+' },
  ];

  return (
    <section id="about" className="flex items-center justify-center relative overflow-hidden section pb-20">
      <div className="container">
        {/* Section Title */}
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My introduction</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Image with Tilt Effect */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition"></div>
            <img
              src="/pic.jpg" // Place your photo in public/pic.jpg
              alt="Akibul Siam"
              className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              React Developer with extensive knowledge and years of experience, specializing in creating and maintaining dynamic websites and applications, delivering quality work.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2 }}
                  className="text-center"
                >
                  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {inView && (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    )}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/Siam-CV.pdf" // Put your CV in public folder
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition"
            >
              Download CV <Download size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}