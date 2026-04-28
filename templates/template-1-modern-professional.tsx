'use client';

import { motion } from 'framer-motion';
import { Wrench, MapPin, Clock, Phone, ChevronRight, Star } from 'lucide-react';

export default function ModernProfessionalTemplate() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-950" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-blue-600 p-4 rounded-full">
              <Wrench size={48} />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mobile Mechanic
            <span className="text-blue-400 block">On Demand</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Professional automotive repair services that come to you. Expert mechanics, quality service, zero hassle.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2"
          >
            Book a Service <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </header>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-900 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { number: '500+', label: 'Vehicles Serviced' },
            { number: '24/7', label: 'Available' },
            { number: '50+', label: 'Expert Mechanics' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold mb-16 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: 'General Repairs', desc: 'Engine, transmission, and component repairs' },
              { icon: Clock, title: 'Scheduled Service', desc: 'Oil changes, filters, fluid checks' },
              { icon: MapPin, title: 'On-Site Diagnostics', desc: 'Mobile diagnostic equipment included' },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-600 transition"
              >
                <service.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold mb-16 text-center"
          >
            Why Choose Us?
          </motion.h2>
          <div className="space-y-6">
            {[
              'Licensed and insured professionals',
              'Same-day service availability',
              'Transparent pricing with no hidden fees',
              'Quality parts and warranty coverage',
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="flex items-center gap-4 text-lg"
              >
                <Star className="text-blue-400 flex-shrink-0" size={24} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold mb-6"
          >
            Ready to Get Your Vehicle Fixed?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-xl text-slate-300 mb-8"
          >
            Contact us today for a free quote
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-8 py-4 rounded-lg font-semibold"
            >
              Schedule Online
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
