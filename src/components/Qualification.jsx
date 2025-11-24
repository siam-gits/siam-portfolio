// src/components/Qualification.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const education = [
  { title: "Computer Science & Engineering", institution: "Daffodil International University", year: "2021 - 2025" },
  { title: "Web Development", institution: "Programming Hero", year: "2021 - 2022" },
  { title: "Web Design", institution: "Creative IT Institute", year: "2018 - 2019" },
  { title: "Advanced Digital Marketing", institution: "Webcoder IT", year: "2019 - 2020" },
];

const work = [
  { title: "Front-End Developer", company: "6am Tech", year: "2023 - 2024" },
  { title: "Software Engineer", company: "Prism IT Limited", year: "2022 - 2023" },
  { title: "Digital Marketing Specialist", company: "Webcoder IT", year: "2021 - 2022" },
];

export default function Qualification() {
  const [activeTab, setActiveTab] = useState('education');
  const data = activeTab === 'education' ? education : work;

  return (
    <section id="qualification" className="min-h-screen flex items-center justify-center relative overflow-hidden section">
      <div className="container">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Qualification</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My personal journey</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex rounded-full bg-gray-200 dark:bg-gray-800 p-2">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <GraduationCap size={24} /> Education
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <Briefcase size={24} /> Work
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-16 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-full sm:w-5/12 text-center sm:${index % 2 === 0 ? 'text-right sm:pr-12' : 'text-left sm:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">{item.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    {activeTab === 'education' ? item.institution : item.company}
                  </p>
                  <div className="flex items-center gap-2 mt-4 justify-center sm:justify-start sm:justify-end text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={18} />
                    {item.year}
                  </div>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 sm:mt-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <div className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
