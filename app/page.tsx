'use client';

import { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Wrench, Zap, MapPin, Phone, CheckCircle2, Clock, ArrowRight, Mail, Globe, Heart } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/logo-white.png';

export default function RabbitMobileAutoHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowItems = [
    {
      src: 'https://static.wixstatic.com/media/83aa0d_75ef2632140a418c87418de818969d7f~mv2.jpg/v1/fill/w_1698,h_1075,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/83aa0d_75ef2632140a418c87418de818969d7f~mv2.jpg',
      caption: 'On-site repairs anywhere, anytime.',
    },
    {
      src: 'https://static.wixstatic.com/media/83aa0d_c8bbb8d70570424d96bc167cb475bbeb~mv2.jpg/v1/crop/x_50,y_0,w_2014,h_1592/fill/w_1200,h_675,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PXL_20251214_223836692.jpg',
      caption: 'Trusted mobile mechanic service.',
    },
    {
      src: 'https://static.wixstatic.com/media/83aa0d_505e8313b7e243b8a3b9d83b5612b18d~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/83aa0d_505e8313b7e243b8a3b9d83b5612b18d~mv2.jpg',
      caption: 'Fast response and reliable roadside support.',
    },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((value) => (value + 1) % slideshowItems.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slideshowItems.length]);

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
    <div className="bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="bg-slate-900 shadow-xl sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Image
              src={logo}
              alt="Rabbit Mobile Auto"
              width={160}
              height={160}
              className="h-auto w-auto max-h-20"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-slate-100 text-lg">Rabbit Mobile Auto</div>
              <div className="text-xs text-teal-400">Your local mechanic is only a hop away!</div>
            </div>
          </motion.div>

          <div className="hidden md:flex gap-1">
            {['Services', 'About', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
                className="px-4 py-2 rounded-lg font-medium text-slate-300 hover:text-teal-400 transition"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.a
            href="tel:8657423369"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hidden md:block"
          >
            (865) 742-3369
          </motion.a>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
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
              🐰 Locally Owned & Operated
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 text-slate-100">
              Your Local Mechanic
              <br />
              <span className="text-teal-400">Is Only a Hop Away</span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Professional mobile mechanics that come to you. We handle vehicle diagnostics, preventative maintenance, and repairs—all with transparent pricing and lower costs due to our lower overhead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="tel:8657423369"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(20, 184, 166, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call (865) 742-3369
              </motion.a>
              <motion.a
                href="https://www.rabbitmobileauto.net/book-online"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-bold transition"
              >
                Book Online
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '💰', text: 'You Pick the Parts' },
                { icon: '🚗', text: 'We Come To You' },
                { icon: '❤️', text: 'Totally Inclusive' },
                { icon: '✓', text: 'Transparent Pricing' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-slate-100 font-medium">{item.text}</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-blue-200 rounded-3xl blur-2xl opacity-60" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-slate-950">
              <div className="relative h-96 md:h-[32rem] lg:h-[36rem]">
                {slideshowItems.map((slide, index) => (
                  <motion.div
                    key={slide.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute inset-0 ${currentSlide === index ? 'z-10' : 'z-0'}`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 py-6">
                      <p className="text-sm uppercase tracking-[0.24em] text-teal-300">Rabbit Mobile Auto</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{slide.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {slideshowItems.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full transition ${currentSlide === index ? 'bg-teal-400' : 'bg-white/40 hover:bg-white/70'}`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-24 px-6 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-center mb-16"
          >
            You Pick the Parts
            <span className="text-teal-400 block">We Come To You</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Totally Transparent',
                desc: 'Our technician shops for parts with you on the phone. You can specify preferences, and we never charge more than we spend. We even give you the auto parts store receipt!',
              },
              {
                title: 'Totally On The Go',
                desc: 'Need an oil change while at work? As long as you\'re parked somewhere safe and can give us your key, we can fix most issues wherever you are.',
              },
              {
                title: 'Totally Inclusive',
                desc: 'We\'re owned and operated by people in the LGBT+ community. You should never feel uncomfortable at a mechanic because of who you are.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-xl bg-blue-800/50 border border-teal-400/50 hover:border-teal-400 transition"
              >
                <h3 className="text-2xl font-bold text-teal-400 mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-100 mb-4">
              Our <span className="text-teal-400">Services</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Complete auto care solutions for your vehicle
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: 'Vehicle Diagnosis',
                desc: 'Advanced diagnostic equipment to identify issues quickly and accurately',
              },
              {
                icon: Clock,
                title: 'Preventative Maintenance',
                desc: 'Oil changes, filter replacements, fluid checks, and routine upkeep',
              },
              {
                icon: Wrench,
                title: 'Repair',
                desc: 'Complete repair services from engine work to brake service and more',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(20, 184, 166, 0.15)' }}
                className="group p-8 rounded-2xl border-2 border-slate-800 hover:border-teal-400 transition bg-slate-950"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="inline-block p-3 bg-teal-100 rounded-xl mb-4 group-hover:bg-teal-200 transition"
                >
                  <service.icon className="text-teal-600" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">{service.title}</h3>
                <p className="text-slate-300">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-slate-100 mb-6"
          >
            Our <span className="text-teal-400">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed"
          >
            Our mission is to change the way the automotive industry treats its customers. Ordinarily, mechanics charge four times the price of parts. Where Rabbit Mobile Auto differs is in our lower overhead—without a permanent location, we fix your vehicle for less. As some of the only all-inclusive automotive specialists in our area, we aim to push the industry into a newly equality-driven direction.
          </motion.p>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-32 px-6 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-black mb-8">Contact Us</h2>
            <div className="space-y-6">
              <motion.a
                href="tel:8657423369"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-lg hover:text-teal-400 transition"
              >
                <Phone className="text-teal-400" size={28} />
                <span>(865) 742-3369</span>
              </motion.a>
              <motion.a
                href="mailto:finn@rabbitmobileauto.net"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-lg hover:text-teal-400 transition"
              >
                <span>📧</span>
                <span>finn@rabbitmobileauto.net</span>
              </motion.a>
              <div className="flex gap-4 mt-8">
                {[
                  { icon: Globe, label: 'Website', url: 'https://www.rabbitmobileauto.net/' },
                  { icon: Mail, label: 'Email', url: 'mailto:finn@rabbitmobileauto.net' },
                  { icon: Heart, label: 'Instagram', url: 'https://www.instagram.com/rabbitmobileauto/' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    className="p-3 bg-teal-600 rounded-lg hover:bg-teal-500 transition"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-black mb-8">Working Hours</h2>
            <div className="space-y-4">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-teal-400/50">
                <div className="text-teal-400 font-bold mb-2">Monday - Sunday</div>
                <div className="text-2xl font-black">8:00 AM - 6:30 PM</div>
              </div>
              <p className="text-blue-200 text-lg mt-8">
                Call or email anytime to schedule an appointment. We're here to serve you on your schedule!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">Ready to Book?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Our local mechanics are ready to help you. Call or book online today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:8657423369"
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Now
              </motion.a>
              <motion.a
                href="https://www.rabbitmobileauto.net/book-online"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-200 text-white hover:bg-slate-200 hover:text-slate-900 px-10 py-4 rounded-lg font-bold text-lg transition"
              >
                Book Online
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center border-t border-gray-800">
        <div className="bg-gray-900 text-gray-400 py-8 px-6 text-center border-t border-gray-800 flex flex-col items-center gap-4">
      <Image
              src={logo}
              alt="Rabbit Mobile Auto"
              width={160}
              height={160}
              className="h-auto w-auto max-h-20"
            />
            <p>Support Local</p>
            </div>
        <p>© 2024 Rabbit Mobile Auto.</p>
        <p className='text-green-400'>v0.0.0 -- PROTOTYPE</p>
      </footer>
    </div>
  );
}
