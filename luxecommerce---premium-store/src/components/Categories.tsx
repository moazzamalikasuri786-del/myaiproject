import React from 'react';
import { CATEGORIES } from '@/src/constants';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Categories = () => {
  return (
    <section className="py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-8 block"
            >
              EXPLORE UNIVERSE
            </motion.span>
            <h2 className="editorial-text text-white">
              SHOP BY <br />
              <span className="text-accent">GENRE</span>
            </h2>
          </div>
        </div>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="horizontal-scroll-container pb-20 px-6 lg:px-[calc((100vw-80rem)/2)] gap-12 no-scrollbar">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="horizontal-scroll-item group relative w-[300px] md:w-[450px] aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase">0{index + 1}</span>
                <h3 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                
                <div className="flex items-center gap-4 text-white/40 group-hover:text-white transition-colors">
                  <span className="text-xs font-black tracking-widest uppercase">Explore Collection</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer for horizontal scroll */}
        <div className="w-24 shrink-0" />
      </div>
    </section>
  );
};

