'use client';

import { motion } from 'framer-motion';
import { Wrench, Zap, Shield, Clock, MapPin, CheckCircle, Phone } from 'lucide-react';

export default function VibrantDynamicTemplate() {
  const floatingVariants = {
    initial: { y: 0 },
    animate: { y: [0, -20, 0], transition: { duration: 4, repeat: Infinity } },
  };

  const slideIn = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-2xl font-bold">
          <Wrench className="text-purple-400" />
          <span>MechPro Mobile</span>
        </motion.div>
        <div className="hidden md:flex gap-8">
          {['Services', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              whileHover={{ color: '#a78bfa', scale: 1.05 }}
              className="cursor-pointer transition"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero with Animated Background */}
      <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 right-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.div className="inline-block mb-6 px-4 py-2 bg-purple-500/30 border border-purple-400 rounded-full">
              <span className="text-purple-300 font-semibold">🚗 Mobile Mechanic Service</span>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Your Car
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Fixed Fast
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Professional mechanics right at your doorstep. No waiting in line, no tow truck needed. Same-day appointments available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-4 rounded-lg font-bold transition"
              >
                Learn More
              </motion.button>
            </div>
            <div className="flex gap-8 text-sm">
              {[
                { icon: '⚡', text: '1-Hour Response' },
                { icon: '🔒', text: 'Licensed & Insured' },
                { icon: '💰', text: 'Transparent Pricing' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }}>
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-slate-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={floatingVariants} initial="initial" animate="animate" className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/50 rounded-2xl p-12 backdrop-blur-sm">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <Wrench size={200} className="text-purple-400 opacity-80" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold text-center mb-16">
            What We <span className="text-purple-400">Fix</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Engine Repair', color: 'from-yellow-500' },
              { icon: Shield, title: 'Brake Service', color: 'from-red-500' },
              { icon: Clock, title: 'Routine Service', color: 'from-green-500' },
              { icon: MapPin, title: 'On-Site Diagnostics', color: 'from-blue-500' },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...slideIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)' }}
                className={`bg-gradient-to-br ${service.color} to-purple-900 p-8 rounded-xl border border-purple-400/30 hover:border-purple-400 transition cursor-pointer`}
              >
                <service.icon size={40} className="mb-4" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold text-center mb-16">
            How It <span className="text-purple-400">Works</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: '1', title: 'Book', desc: 'Choose time & location' },
              { num: '2', title: 'We Arrive', desc: 'Mechanic comes to you' },
              { num: '3', title: 'Fixed & Done', desc: 'Pay and enjoy your car' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                <div className="flex items-center gap-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0"
                  >
                    {step.num}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold text-center mb-16">
            What Customers <span className="text-purple-400">Say</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', quote: 'Best service ever! Saved me so much time.', rating: 5 },
              { name: 'John D.', quote: 'Professional, reliable, and affordable.', rating: 5 },
              { name: 'Mike T.', quote: 'Will definitely use again!', rating: 5 },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-purple-900/30 border border-purple-400/30 rounded-xl p-8 backdrop-blur-sm hover:border-purple-400 transition"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j}>⭐</span>
                  ))}
                </div>
                <p className="mb-4 text-slate-300">"{testimonial.quote}"</p>
                <p className="font-bold text-purple-300">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-6xl font-bold mb-6">Ready to Get Your Car Fixed?</h2>
          <p className="text-2xl text-slate-400 mb-8">Join hundreds of satisfied customers</p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-12 py-6 rounded-lg font-bold text-2xl"
          >
            Book a Service Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
