import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-48 pb-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16 mb-48">
          {/* Brand & Mission */}
          <div className="col-span-12 lg:col-span-6 space-y-12">
            <h2 className="text-[12vw] lg:text-[8vw] font-black tracking-tighter leading-none uppercase">
              LUXE<span className="text-accent">.</span>
            </h2>
            <p className="text-slate-400 text-3xl font-light leading-tight max-w-xl">
              Redefining the digital shopping experience with futuristic design, world-class quality, and a relentless pursuit of perfection.
            </p>
            <div className="flex items-center gap-8">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-white/20 hover:text-accent transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pt-12">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">NAVIGATION</h4>
              <ul className="flex flex-col gap-4 text-white/40 text-xs font-black tracking-widest uppercase">
                {['Shop All', 'New Arrivals', 'Best Sellers', 'Collections'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">SUPPORT</h4>
              <ul className="flex flex-col gap-4 text-white/40 text-xs font-black tracking-widest uppercase">
                {['Shipping', 'Returns', 'Tracking', 'Privacy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">CONTACT</h4>
              <ul className="flex flex-col gap-4 text-white/40 text-xs font-black tracking-widest uppercase">
                <li><a href="mailto:hello@luxe.com" className="hover:text-white transition-colors">HELLO@LUXE.COM</a></li>
                <li><a href="tel:+15550001234" className="hover:text-white transition-colors">+1 (555) 000-1234</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
              © 2026 LUXE EXPERIENCE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-8 opacity-10 grayscale hover:opacity-40 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3" />
            </div>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase text-white/40 hover:text-accent transition-colors"
          >
            BACK TO TOP
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all -rotate-90">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

