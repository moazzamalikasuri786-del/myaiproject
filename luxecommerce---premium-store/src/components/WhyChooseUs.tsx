import React from 'react';
import { Zap, Award, CreditCard, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: <Zap className="text-accent" size={32} />,
    title: "INSTANT DELIVERY",
    description: "Lightning-fast shipping on all premium orders. Your time is our priority."
  },
  {
    icon: <CreditCard className="text-accent" size={32} />,
    title: "SECURE PAYMENT",
    description: "Industry-leading encryption ensures your transactions are always safe."
  },
  {
    icon: <Award className="text-accent" size={32} />,
    title: "WORLD CLASS",
    description: "Every item is handpicked and tested to meet the highest global standards."
  },
  {
    icon: <RefreshCcw className="text-accent" size={32} />,
    title: "SEAMLESS RETURNS",
    description: "Not satisfied? Our frictionless return process makes exchanges effortless."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-48 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left - Editorial Title */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-8 block">OUR PROMISE</span>
              <h2 className="editorial-text text-white mb-12">
                WHY <br />
                <span className="text-accent italic">LUXE?</span>
              </h2>
              <p className="text-slate-400 text-xl font-light leading-tight max-w-sm">
                We combine futuristic technology with human-centric design to provide you with the best shopping experience on the planet.
              </p>
            </motion.div>
          </div>

          {/* Right - Broken Grid Features */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-12 glass-card rounded-2xl border-white/5 group ${index % 2 === 1 ? 'sm:mt-24' : ''}`}
                >
                  <div className="mb-12 text-accent group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">{feature.title}</h3>
                  <p className="text-slate-400 text-lg leading-tight font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Text */}
      <div className="absolute left-0 bottom-0 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-black tracking-tighter leading-none uppercase">PROMISE</span>
      </div>
    </section>
  );
};

