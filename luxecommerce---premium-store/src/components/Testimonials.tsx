import React from 'react';
import { TESTIMONIALS } from '@/src/constants';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-48 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-12 items-center mb-32">
          <div className="col-span-12 lg:col-span-6">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-8 block"
            >
              COMMUNITY
            </motion.span>
            <h2 className="editorial-text text-white">
              LOVED BY <br />
              <span className="text-accent italic">THOUSANDS</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="text-slate-400 text-2xl font-light leading-tight">
              Join our global community of premium shoppers who value quality, innovation, and the art of modern living.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`col-span-12 md:col-span-6 lg:col-span-4 p-12 glass-card rounded-none border-white/5 relative group ${
                index === 1 ? 'lg:-translate-y-12' : index === 2 ? 'lg:translate-y-12' : ''
              }`}
            >
              <div className="flex gap-1 mb-12">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-white text-2xl mb-16 leading-tight font-light tracking-tight italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-white text-lg tracking-tighter uppercase">{testimonial.name}</h4>
                  <p className="text-[10px] text-accent font-black uppercase tracking-[0.3em] mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

