// src/components/Skills.jsx — GOD-TIER 2025 VERSION
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Palette, Zap } from 'lucide-react';

const skillsData = [
  {
    title: "Frontend Mastery",
    icon: Code2,
    years: "4+ Years",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React / Next.js", percentage: 94 },
      { name: "TypeScript", percentage: 90 },
      { name: "Tailwind CSS", percentage: 96 },
      { name: "Framer Motion", percentage: 92 },
      { name: "HTML & Accessibility", percentage: 98 },
    ],
  },
  {
    title: "Backend & DevOps",
    icon: Server,
    years: "4+ Years",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Node.js & Express", percentage: 92 },
      { name: "MongoDB", percentage: 88 },
      { name: "REST & GraphQL", percentage: 85 },
      { name: "Firebase", percentage: 87 },
    ],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    years: "3+ Years",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Figma & UI Design", percentage: 88 },
      { name: "Git & GitHub", percentage: 95 },
      { name: "Performance Optimization", percentage: 90 },
      { name: "SEO & Analytics", percentage: 85 },
      { name: "Problem Solving", percentage: 93 },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="flex items-center justify-center relative overflow-hidden section">
      <div className="container mx-auto px-6">
        {/* Epic Title */}
       <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Superpowers</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-light">
            Tools & technologies I wield with precision
          </p>
          <div className="flex justify-center mt-6">
            <Zap className="w-12 h-12 text-yellow-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Skill Cards Grid */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-10">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 80 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
            >
              {/* Gradient Orb Background */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${category.color} opacity-20 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-xl`}>
                    <category.icon size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{category.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{category.years}</p>
                  </div>
                </div>

                <div className="space-y-7">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                        >
                          {skill.percentage}%
                        </motion.span>
                      </div>

                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.percentage}%` } : {}}
                          transition={{ duration: 1.8, delay: index * 0.15 + i * 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.color} relative rounded-full shadow-lg`}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}