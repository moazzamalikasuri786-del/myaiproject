import React from 'react';
import { PRODUCTS, Product } from '@/src/constants';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onAddToCart, onViewDetails }) => {
  return (
    <section className="py-48 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-12 gap-8 mb-32 items-end">
        <div className="col-span-12 lg:col-span-7">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-8 block"
          >
            SELECTED PIECES
          </motion.span>
          <h2 className="editorial-text text-white">
            THE <br />
            <span className="text-accent">COLLECTION</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:pb-8">
          <p className="text-slate-400 text-xl font-light leading-tight max-w-sm">
            A meticulous selection of objects that bridge the gap between utility and art. Handcrafted for the discerning individual.
          </p>
        </div>
      </div>

      {/* Broken Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-12">
        {PRODUCTS.map((product, index) => {
          // Create a broken grid effect by varying column spans and offsets
          const colSpan = index % 3 === 0 ? 'md:col-span-7' : index % 3 === 1 ? 'md:col-span-5' : 'md:col-span-6 md:col-start-4';
          const marginTop = index % 2 === 0 ? 'md:mt-0' : 'md:mt-32';
          
          return (
            <div key={product.id} className={`${colSpan} ${marginTop}`}>
              <ProductCard 
                product={product} 
                onAddToCart={onAddToCart} 
                onViewDetails={onViewDetails}
                index={index}
              />
            </div>
          );
        })}
      </div>
      
      <div className="mt-48 flex justify-center">
        <button className="group flex items-center gap-6 text-2xl font-black tracking-tighter hover:text-accent transition-colors">
          VIEW ALL ARCHIVE
          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            →
          </div>
        </button>
      </div>
    </section>
  );
};

