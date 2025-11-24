// src/components/Portfolio.jsx
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink, Github } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [

  {
    title: "Motion Flow",
    desc: "A React-based animated component code generator for interactive UI elements.",
    img: "/motion.png",
    live: "https://siam-gits.github.io/motion-flow/",
    code: "https://github.com/siam-gits/motion-flow",
    tech: ["React", "Framer Motion", "Tailwind"],
  },

  {
    title: "AI Resume Analyzer",
    desc: "An AI-driven web app that matches resumes with job listings by analyzing candidate suitability, managing job posts and resume uploads, and delivering a smooth hiring workflow through a React + React Router frontend integrated with Puter.js for data handling and storage.",
    img: "/resumind.png",
    live: "https://puter.com/app/ai-resume-analyzer-siam",
    code: "https://github.com/siam-gits/ai-resume-analyzer",
    tech: ["React","Typescript", "Tailwind", "Puter.js"],
  },
  {
    title: "Veltrix E-commerce",
    desc: "Veltrix is a React-based e-commerce website featuring product browsing, detailed product pages, a real-time shopping cart, and a responsive, modern UI built for smooth performance and easy scalability.",
    img: "/veltrix.png",
    live: "https://siam-gits.github.io/veltrix-ecommerce/",
    code: "https://github.com/siam-gits/veltrix-ecommerce",
    tech: ["React", "Typescript", "Framer Motion", "Tailwind", "Firebase"],
  },

    {
    title: "AI Quiz App",
    desc: "An interactive AI-powered quiz app with timed tests, dynamic questions, real-time analytics, Google Sheets result tracking, and a polished UX with animations, audio feedback, and answer filtering.",
    img: "/quiz.png",
    live: "  https://siam-gits.github.io/ai-quiz-app/",
    code: "https://github.com/siam-gits/ai-quiz-app",
    tech: ["React", "Tailwind", "Gemini", "Google Sheets"],
  },
  {
    title: "Portfolio Website (This One!)",
    desc: "You're looking at it! Animated React portfolio with Framer Motion",
    img: "/portfolio.png",
    live: "#",
    code: "https://github.com/siam-gits/siam-portfolio-react",
    tech: ["React", "Framer Motion", "Tailwind","Formspree"],
  },
    {
    title: "E-Learning Platform",
    desc: "E-Learning Platform",
    img: "/e-learning.png",
    live: "https://siam-gits.github.io/e-learning",
    code: "https://github.com/siam-gits/e-learning",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "DIU Smart Transport",
    desc: "Real-time bus tracking, smart schedules, alerts, and seat booking — all in one smart platform for DIU students.",
    img: "/DIU_transport.png",
    live: "https://siam-gits.github.io/smartTransport/",
    code: "https://github.com/siam-gits/smartTransport",
    tech: ["HTML", "CSS", "Javascript"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center relative overflow-hidden section">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My most recent work</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="portfolio-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              >
                {/* Image with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{project.desc}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                    >
                      Live Demo <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-semibold hover:border-purple-600 dark:hover:border-purple-400 transition"
                    >
                      <Github size={18} /> Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}