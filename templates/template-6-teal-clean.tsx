'use client';

import { motion } from 'framer-motion';
import { Wrench, Clock, MapPin, Phone, CheckCircle2, Zap, Shield, ArrowRight } from 'lucide-react';

export default function TealCleanTemplate() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <Wrench size={24} className="text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">MechPro</span>
          </motion.div>

          <div className="flex gap-12">
            <a href="#services" className="text-gray-600 hover:text-teal-600 font-medium transition">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-teal-600 font-medium transition">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600 font-medium transition">
              Contact
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold"
          >
            Book Now
          </motion.button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-teal-600 font-bold mb-4 text-sm tracking-widest uppercase"
              >
                Professional Mobile Repair
              </motion.span>

              <h1 className="text-7xl md:text-8xl font-black leading-tight text-gray-900 mb-6">
                Mechanics
                <span className="text-teal-600 block">At Your Door</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Expert automotive service without leaving your home. Licensed technicians with advanced diagnostics—available same-day.
              </p>

              <div className="flex gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(20, 184, 166, 0.25)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2"
                >
                  Schedule Now <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-bold transition"
                >
                  Call Us
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: '24/7', desc: 'Available' },
                  { label: 'Same-Day', desc: 'Service' },
                  { label: '500+', desc: 'Clients' },
                  { label: '100%', desc: 'Satisfaction' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="font-bold text-2xl text-teal-600">{item.label}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/50 to-blue-200/50 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-12 shadow-2xl border border-teal-200">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Wrench size={300} className="text-teal-600 opacity-70" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-black text-gray-900 mb-4">
              Complete <span className="text-teal-600">Auto Care</span>
            </h2>
            <p className="text-xl text-gray-600">Every service your vehicle needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Diagnostics',
                items: ['Check Engine Light', 'Full System Scan', 'Electrical Issues'],
              },
              {
                icon: Shield,
                title: 'Maintenance',
                items: ['Oil Changes', 'Fluid Checks', 'Filter Replacements'],
              },
              {
                icon: Wrench,
                title: 'Repairs',
                items: ['Engine Work', 'Brake Service', 'Transmission'],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12, boxShadow: '0 25px 50px rgba(20, 184, 166, 0.12)' }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200 hover:border-teal-400 transition group"
              >
                <motion.div
                  whileHover={{ scale: 1.25, rotate: 15 }}
                  className="inline-block p-4 bg-teal-100 rounded-xl mb-6 group-hover:bg-teal-200 transition"
                >
                  <service.icon className="text-teal-600" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 size={18} className="text-teal-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-32 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl font-black text-center mb-16"
          >
            Why <span className="text-teal-400">Choose Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: CheckCircle2,
                title: 'Licensed & Insured',
                desc: 'Full licensing and insurance coverage for your peace of mind',
              },
              {
                icon: Clock,
                title: '1-Hour Response',
                desc: 'Average 1-hour response time for urgent repairs',
              },
              {
                icon: MapPin,
                title: 'On-Site Service',
                desc: 'Full service right at your home or workplace',
              },
              {
                icon: Phone,
                title: '24/7 Support',
                desc: 'Always available when you need us most',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-xl hover:bg-blue-800/50 transition"
              >
                <motion.div whileHover={{ scale: 1.3, rotate: 360 }} transition={{ type: 'spring', stiffness: 200 }}>
                  <feature.icon size={40} className="text-teal-400 flex-shrink-0" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-blue-200">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-black mb-6"
          >
            Don't Wait for Repairs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10 opacity-95"
          >
            Get your car fixed today with our mobile mechanic service
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 rounded-lg font-bold text-lg transition"
            >
              Book Online
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center border-t border-gray-800">
        <p>© 2024 MechPro Mobile. Licensed • Insured • Professional</p>
      </footer>
    </div>
  );
}
