'use client';

import { motion } from 'framer-motion';
import { Zap, AlertCircle, Users, MapPin, Award, ArrowRight } from 'lucide-react';

export default function ClassicServiceFocusedTemplate() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-600">AutoCare Mobile</div>
          <div className="flex gap-8">
            <a href="#services" className="hover:text-orange-600 transition">Services</a>
            <a href="#about" className="hover:text-orange-600 transition">About</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-[600px] bg-gradient-to-r from-orange-50 to-amber-50 flex items-center px-4">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
              Professional Auto Repair
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              We Come to You
              <span className="text-orange-600 block">For Quality Service</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experienced mechanics with over 15 years in the industry. We handle everything from routine maintenance to complex repairs—right at your location.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 bg-gray-300 rounded-lg overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
              <Zap size={120} className="text-white opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services We Offer</h2>
            <p className="text-xl text-gray-600">Everything your vehicle needs, done at your convenience</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Zap,
                title: 'Engine Diagnostics',
                items: ['Check Engine Light', 'Performance Issues', 'Emissions Testing'],
              },
              {
                icon: AlertCircle,
                title: 'Brake Service',
                items: ['Brake Pads & Rotors', 'Fluid Inspection', 'Emergency Repairs'],
              },
              {
                icon: Users,
                title: 'Routine Maintenance',
                items: ['Oil Changes', 'Filter Replacements', 'Fluid Top-ups'],
              },
              {
                icon: Award,
                title: 'Electrical Work',
                items: ['Battery Replacement', 'Starter Issues', 'Alternator Repair'],
              },
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <service.icon className="text-orange-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-8"
          >
            Why Local Businesses Trust Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              { num: '10+', text: 'Years Experience' },
              { num: '2000+', text: 'Happy Customers' },
              { num: '100%', text: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-orange-500 mb-2">{stat.num}</div>
                <p className="text-gray-400">{stat.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-4 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Schedule Service?</h2>
          <p className="text-xl mb-8">Call us now or book online for same-day service</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold"
            >
              Call: (555) 123-4567
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition"
            >
              Book Online
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
