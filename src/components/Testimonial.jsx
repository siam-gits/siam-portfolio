// src/components/Testimonial.jsx
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Sofia Anderson",
    role: "CEO at TechFlow",
    text: "Siam transformed our outdated website into a modern, high-converting machine. Traffic increased 280% in just 3 months!",
    avatar: "/client1.jpg",
  // Replace with real photos in public folder
  },
  {
    name: "Raul Harris",
    role: "Founder of StartupX",
    text: "Incredible attention to detail and creativity. He doesn’t just code — he builds experiences. Best decision we ever made.",
    avatar: "/client2.jpg",
  },
  {
    name: "Benjamin Chen",
    role: "Product Manager",
    text: "Delivered our React dashboard 2 weeks early and with zero bugs. Communication was flawless throughout the project.",
    avatar: "/client3.jpg",
  },
  {
    name: "Sara Smith",
    role: "Marketing Director",
    text: "Our landing page conversion rate jumped from 1.8% to 9.4% after Siam redesigned it. Absolute game-changer!",
    avatar: "/client4.jpg",
  },
  {
    name: "Emilia Johnson",
    role: "E-commerce Owner",
    text: "He built our full-stack store with Stripe + inventory sync. Went live in 3 weeks and already made back 10× his fee.",
    avatar: "/client5.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">What my clients say</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="testimonial-swiper max-w-5xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800/70 rounded-3xl p-12 shadow-2xl text-center max-w-4xl mx-auto"
              >
                {/* Avatar + Name */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-purple-600 shadow-xl"
                  />
                  <h4 className="text-2xl font-bold mt-6">{t.name}</h4>
                  <p className="text-purple-600 dark:text-purple-400">{t.role}</p>
                </motion.div>

                {/* Stars */}
                <div className="flex justify-center gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl lg:text-2xl italic text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  "{t.text}"
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}