import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, Menu, X, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { PRODUCTS, Product } from '../constants';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onViewDetails: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onViewDetails }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const navLinks = [
    { name: 'Collections', href: '#' },
    { name: 'Archive', href: '#' },
    { name: 'Studio', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-10',
        isScrolled ? 'py-6 bg-primary/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-3xl font-black tracking-tighter text-white">LUXE.</span>
        </div>

        {/* Desktop Menu - Minimalist */}
        <div className="hidden lg:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[10px] font-black text-white/40 hover:text-white transition-colors uppercase tracking-[0.3em] group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-3 text-white group"
          >
            <span className="text-[10px] font-black tracking-widest uppercase hidden sm:block text-white/40 group-hover:text-white transition-colors">SEARCH</span>
            <Search size={20} className="group-hover:text-accent transition-colors" />
          </button>

          <button 
            onClick={onOpenCart}
            className="flex items-center gap-3 text-white group"
          >
            <span className="text-[10px] font-black tracking-widest uppercase hidden sm:block text-white/40 group-hover:text-white transition-colors">BAG</span>
            <div className="relative">
              <ShoppingBag size={20} className="group-hover:text-accent transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-white text-[8px] font-black flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </button>
          
          <button 
            className="p-2 text-white hover:text-accent transition-colors lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full Screen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary z-[100] flex flex-col p-12 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex items-center justify-between mb-24">
                <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">SEARCH THE ARCHIVE</span>
                <button 
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="p-4 text-white hover:text-accent transition-colors"
                >
                  <X size={40} />
                </button>
              </div>

              <div className="relative group mb-24">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="TYPE TO SEARCH..."
                  className="w-full bg-transparent border-b-2 border-white/10 py-12 text-5xl md:text-8xl font-black uppercase focus:outline-none focus:border-accent transition-all placeholder:text-white/5 tracking-tighter"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-focus-within:w-full transition-all duration-1000" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      onViewDetails(product);
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="group cursor-pointer border-b border-white/5 pb-8 flex items-center gap-8"
                  >
                    <div className="w-24 h-24 overflow-hidden bg-white/5">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-black text-accent tracking-widest uppercase mb-2">{product.category}</div>
                      <h3 className="text-2xl font-black text-white group-hover:text-accent transition-colors uppercase tracking-tighter">{product.name}</h3>
                      <div className="text-white/40 text-sm font-light mt-1">${product.price.toFixed(2)}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </motion.div>
                ))}

                {searchQuery && filteredProducts.length === 0 && (
                  <div className="col-span-full py-24 text-center">
                    <p className="text-white/20 text-2xl font-light italic">NO RESULTS FOUND FOR "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-primary z-[60] flex flex-col items-center justify-center gap-12 p-12"
          >
            <button 
              className="absolute top-10 right-10 p-4 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={40} />
            </button>
            
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={link.href}
                className="text-6xl md:text-8xl font-black text-white hover:text-accent transition-colors tracking-tighter uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-8"
            >
              <a href="#" className="text-xs font-black tracking-widest text-white/40 hover:text-white">INSTAGRAM</a>
              <a href="#" className="text-xs font-black tracking-widest text-white/40 hover:text-white">TWITTER</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

