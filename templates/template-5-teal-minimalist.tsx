'use client';

import { motion } from 'framer-motion';
import { Wrench, Shield, Users, Zap, MapPin, Phone, Star, ArrowRight } from 'lucide-react';

export default function TealMinimalistTemplate() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center"
            >
              <Wrench size={24} className="text-white" />
            </motion.div>
            <div>
              <div className="font-bold text-gray-900">Mobile Mechanic</div>
              <div className="text-xs text-teal-600">Expert Service</div>
            </div>
          </motion.div>

          <div className="hidden md:flex gap-1">
            {['Home', 'Services', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
                className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-teal-600 transition"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hidden md:block"
          >
            Book Now
          </motion.button>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 pt-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Zap size={16} /> Fast • Reliable • Professional
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 text-gray-900">
              Your Car
              <br />
              <span className="text-teal-600">Fixed Right</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Professional mechanics arrive at your location with everything needed to diagnose and repair your vehicle. Same-day appointments available. No waiting, no hassle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(20, 184, 166, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
              >
                Schedule Service <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-900 hover:border-teal-600 hover:text-teal-600 px-8 py-4 rounded-lg font-bold transition"
              >
                Get Free Quote
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '⚡', text: '1-Hour Response' },
                { icon: '✓', text: '100% Satisfaction' },
                { icon: '$', text: 'Fair Pricing' },
                { icon: '🛡️', text: 'Licensed & Insured' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-200 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-12 shadow-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-96 flex items-center justify-center"
                >
                  <Wrench size={280} className="text-teal-600 opacity-60" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Everything Your <span className="text-teal-600">Car Needs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to complex repairs, our certified mechanics handle it all
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: 'Engine Diagnostics',
                desc: 'State-of-the-art diagnostic tools to pinpoint any issue',
              },
              {
                icon: Shield,
                title: 'Brake Service',
                desc: 'Complete brake system inspection and repair',
              },
              {
                icon: Users,
                title: 'Routine Maintenance',
                desc: 'Oil changes, filters, fluids, and preventive care',
              },
              {
                icon: MapPin,
                title: 'Transmission Repair',
                desc: 'Expert transmission diagnosis and repair services',
              },
              {
                icon: Wrench,
                title: 'Electrical Systems',
                desc: 'Battery, starter, alternator, and wiring issues',
              },
              {
                icon: Star,
                title: 'Emergency Repairs',
                desc: '24/7 availability for urgent automotive needs',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(20, 184, 166, 0.15)' }}
                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-teal-400 transition bg-white"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="inline-block p-3 bg-teal-100 rounded-xl mb-4 group-hover:bg-teal-200 transition"
                >
                  <service.icon className="text-teal-600" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-center mb-20"
          >
            How It <span className="text-teal-400">Works</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              {
                num: '1',
                title: 'Contact Us',
                desc: 'Call or book online for a service appointment',
              },
              {
                num: '2',
                title: 'We Arrive',
                desc: 'Mechanic comes to your location on time',
              },
              {
                num: '3',
                title: 'Diagnose',
                desc: 'We identify the problem and provide a quote',
              },
              {
                num: '4',
                title: 'Fixed & Done',
                desc: 'Service complete with warranty coverage',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 cursor-pointer"
                >
                  {step.num}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-teal-200">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Book your service today and experience the difference of professional mobile mechanics
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} /> (555) 123-4567
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 rounded-lg font-bold text-lg transition"
              >
                Book Online
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
        <p>© 2024 Mobile Mechanic. We bring expertise to your driveway.</p>
      </footer>
    </div>
  );
}
