// src/components/Services.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Server, 
  Shield, 
  TrendingUp, 
  X 
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Web Development",
    short: "Custom, responsive & performant websites",
    details: [
      "Full-stack development with React & Node.js",
      "Pixel-perfect, mobile-first design",
      "SEO-friendly and lightning-fast loading",
      "Third-party API integration (Stripe, etc.)",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    short: "Beautiful and intuitive interfaces",
    details: [
      "Modern, clean and trendy designs",
      "Figma prototypes & design systems",
      "User research & wireframing",
      "Dark mode & accessibility ready",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    short: "Robust and scalable server solutions",
    details: [
      "REST & GraphQL APIs",
      "Database design (MongoDB, PostgreSQL)",
      "Authentication & authorization",
      "Deployment on Vercel / Render / AWS",
    ],
  },
  {
    icon: Shield,
    title: "Web Security",
    short: "Protect your site from threats",
    details: [
      "Security audits & vulnerability scanning",
      "HTTPS/SSL setup",
      "Rate limiting & CORS protection",
      "Secure headers & best practices",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    short: "Rank higher on Google",
    details: [
      "Technical SEO audit & fixes",
      "Page speed optimization (95+ Lighthouse)",
      "Structured data & schema markup",
      "Core Web Vitals improvement",
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="min-h-screen flex items-center justify-center relative overflow-hidden section">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">What I offer</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -20 }}
              onClick={() => setSelected(service)}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-200 dark:border-gray-700">
                <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white mb-6 group-hover:scale-110 transition">
                  <service.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.short}</p>
                
                <span className="mt-8 inline-block text-purple-600 font-semibold group-hover:text-pink-600">
                  View More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-3xl p-10 max-w-2xl w-full max-h-screen overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <selected.icon size={36} />
                  </div>
                  <h3 className="text-3xl font-bold">{selected.title}</h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                >
                  <X size={28} />
                </button>
              </div>

              <ul className="space-y-5">
                {selected.details.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex-shrink-0 flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}