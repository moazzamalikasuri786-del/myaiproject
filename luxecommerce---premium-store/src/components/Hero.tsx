import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -z-10" />
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-40 right-[5%] w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" 
      />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-12 gap-4 items-start">
          {/* Left Content - Asymmetrical */}
          <div className="col-span-12 lg:col-span-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] w-12 bg-accent" />
                <span className="text-xs font-black tracking-[0.4em] text-accent uppercase">
                  ESTABLISHED 2026
                </span>
              </div>
              
              <h1 className="editorial-text text-white mb-12">
                DEFINING <br />
                <span className="text-accent">THE NEW</span> <br />
                STANDARD.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md ml-auto lg:mr-24"
            >
              <p className="text-xl text-slate-400 mb-12 leading-tight font-light">
                We don't just sell products. We curate experiences for those who demand excellence in every detail of their digital life.
              </p>
              
              <div className="flex items-center gap-12">
                <motion.button
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 text-xl font-black tracking-tighter text-white"
                >
                  EXPLORE SHOP
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={20} />
                  </div>
                </motion.button>
                
                <div className="hidden sm:flex items-center gap-4 text-slate-600">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-black tracking-widest uppercase">Premium Only</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Overlapping & Asymmetrical */}
          <div className="col-span-12 lg:col-span-4 mt-24 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] group"
            >
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full -z-10 group-hover:bg-accent/30 transition-all duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" 
                alt="Featured Product"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              
              {/* Floating Label */}
              <motion.div 
                style={{ y: y2 }}
                className="absolute -bottom-12 -left-12 glass-panel p-8 rounded-2xl border-white/10 backdrop-blur-3xl hidden sm:block"
              >
                <p className="text-accent text-xs font-black tracking-widest mb-2">FEATURED PIECE</p>
                <h3 className="text-2xl font-black text-white leading-none">THE MINIMALIST <br />CHRONO</h3>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Vertical Text Accent */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="text-[10px] font-black tracking-[1em] text-white/10 uppercase vertical-text rotate-180" style={{ writingMode: 'vertical-rl' }}>
          SCROLL TO DISCOVER
        </span>
      </div>
    </section>
  );
};

