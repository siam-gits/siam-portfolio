// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  CheckCircle 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/mgvqvoow', {  // ← Replace with your Formspree ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden section">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Let's work together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            {[
              { icon: Phone, title: "Call Me", info: "+880 1995204871" },
              { icon: Mail, title: "Email", info: "siam.official71@gmail.com" },
              { icon: MapPin, title: "Location", info: "Dhaka, Bangladesh" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-6 bg-white dark:bg-gray-800/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                  <item.icon size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800/50 rounded-3xl p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:border-purple-600 focus:outline-none transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:border-purple-600 focus:outline-none transition"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your Message"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:border-purple-600 focus:outline-none transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={24} /> Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message <Send size={24} />
                  </>
                )}
              </motion.button>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}