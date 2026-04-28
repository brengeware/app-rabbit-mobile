'use client';

import { motion } from 'framer-motion';
import { Wrench, MapPin, Clock, Phone, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function TealWhiteModernTemplate() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-2xl font-bold text-teal-600"
          >
            <Wrench size={28} />
            <span>Mobile Mechanic Pro</span>
          </motion.div>
          <div className="hidden md:flex gap-8">
            {['Services', 'About', 'Pricing', 'Contact'].map((item, i) => (
              <motion.button
                key={item}
                whileHover={{ color: '#14b8a6', scale: 1.05 }}
                className="font-medium hover:text-teal-600 transition"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-white via-white to-blue-50 flex items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full opacity-30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-semibold"
            >
              ✓ Same-Day Service Available
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Expert Mechanics
              <span className="text-teal-600 block">Come to You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional automotive repair at your location. No waiting rooms, no hidden fees. Just quality service when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(20, 184, 166, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
              >
                Book Service <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-bold transition"
              >
                Call Now
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '1hr', label: 'Avg. Response' },
                { number: '15y+', label: 'Experience' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-teal-600">{stat.number}</div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-12 shadow-2xl"
            >
              <Wrench size={240} className="text-teal-600 opacity-70" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">
              Services We <span className="text-teal-600">Provide</span>
            </h2>
            <p className="text-xl text-gray-600">Complete automotive solutions at your doorstep</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Engine Diagnostics',
                desc: 'Advanced diagnostic equipment for precise problem identification',
              },
              {
                icon: MapPin,
                title: 'On-Site Repair',
                desc: 'Full repair services from brakes to transmission, anywhere',
              },
              {
                icon: Clock,
                title: 'Routine Maintenance',
                desc: 'Oil changes, filters, fluids, and preventive care',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(20, 184, 166, 0.1)' }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl border-2 border-teal-100 hover:border-teal-400 transition"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mb-4 inline-block p-3 bg-teal-100 rounded-lg"
                >
                  <service.icon className="text-teal-600" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-center mb-16"
          >
            Why Choose <span className="text-teal-400">Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              'Licensed, insured, and fully trained mechanics',
              'Same-day service with transparent pricing',
              'Quality parts with warranty guarantee',
              'Available 24/7 for emergency repairs',
              'Advanced diagnostic equipment onsite',
              'Customer satisfaction guaranteed',
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <CheckCircle className="text-teal-400" size={28} />
                </motion.div>
                <span className="text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Ready to Fix Your Vehicle?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Get a free quote or schedule your service today
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call (555) 123-4567
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
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Mobile Mechanic Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
