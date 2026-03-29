import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingCart, Heart, ArrowLeft, Shield, Truck, RotateCcw, ChevronRight, X } from 'lucide-react';
import { Product } from '@/src/constants';
import { cn } from '@/src/lib/utils';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.variants.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.variants.colors[0].name);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto no-scrollbar"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-[110] w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-accent transition-all group"
      >
        <X size={24} className="group-hover:rotate-90 transition-transform" />
      </button>

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col lg:flex-row items-center">
        {/* Left - Large Image */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden">
          <motion.img
            layoutId={`product-image-${product.id}`}
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 p-8 lg:p-24 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">
              {product.category}
            </span>
            <h1 className="editorial-text text-white mb-8">
              {product.name}
            </h1>
            <div className="flex items-center gap-8 text-white/40">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-white/10"}
                  />
                ))}
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase">{product.rating} / 5.0</span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase">{product.reviews.length} REVIEWS</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-2xl font-light leading-tight max-w-xl"
          >
            {product.description}
          </motion.p>

          {/* Selection */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12 pt-12 border-t border-white/5"
          >
            {/* Colors */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">COLORWAY</h3>
              <div className="flex items-center gap-4">
                {product.variants.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={cn(
                      "w-12 h-12 rounded-full border transition-all p-1",
                      selectedColor === color.name ? "border-accent scale-110" : "border-transparent opacity-40 hover:opacity-100"
                    )}
                  >
                    <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-6">
              <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">SELECT SIZE</h3>
              <div className="flex flex-wrap gap-4">
                {product.variants.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-8 py-4 border text-xs font-black tracking-[0.2em] transition-all uppercase",
                      selectedSize === size
                        ? "bg-accent border-accent text-white"
                        : "bg-transparent border-white/10 text-white/40 hover:border-white/30"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 pt-12"
          >
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 py-8 bg-accent text-white font-black text-xs tracking-[0.5em] uppercase hover:bg-blue-600 transition-all flex items-center justify-center gap-4 group"
            >
              <ShoppingCart size={16} />
              ADD TO BAG — ${product.price.toFixed(2)}
            </button>
            <button className="p-8 border border-white/10 text-white hover:bg-white/5 transition-all">
              <Heart size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Immersive Storytelling Section */}
      <section className="py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-24">
            {product.highlights.map((highlight, idx) => (
              <React.Fragment key={idx}>
                <div className={cn(
                  "col-span-12 lg:col-span-6 space-y-12",
                  idx % 2 === 1 ? "lg:order-2" : ""
                )}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-8 block">FEATURE 0{idx + 1}</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase mb-12">
                      {highlight}
                    </h2>
                    <p className="text-slate-400 text-2xl font-light leading-tight">
                      Engineered with precision and crafted for performance. Every detail is designed to enhance your experience and provide unmatched value in your daily life.
                    </p>
                  </motion.div>
                </div>
                <div className={cn(
                  "col-span-12 lg:col-span-6",
                  idx % 2 === 1 ? "lg:order-1" : ""
                )}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
                  >
                    <img
                      src={product.images[(idx + 1) % product.images.length]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-48 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            {product.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000",
                  idx === 0 ? "col-span-12 lg:col-span-8 aspect-video" : "col-span-12 lg:col-span-4 aspect-square"
                )}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <div className="flex flex-col items-center text-center space-y-6">
              <Truck className="text-accent" size={32} />
              <h4 className="text-white font-black tracking-widest uppercase text-xs">Global Shipping</h4>
              <p className="text-slate-500 text-sm font-light">Complimentary express delivery on all orders worldwide.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
              <Shield className="text-accent" size={32} />
              <h4 className="text-white font-black tracking-widest uppercase text-xs">Secure Checkout</h4>
              <p className="text-slate-500 text-sm font-light">Your security is our priority. Encrypted transactions.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
              <RotateCcw className="text-accent" size={32} />
              <h4 className="text-white font-black tracking-widest uppercase text-xs">30-Day Returns</h4>
              <p className="text-slate-500 text-sm font-light">Frictionless returns and exchanges for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
