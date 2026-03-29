import React from 'react';
import { motion } from 'motion/react';
import { Product } from '@/src/constants';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-white/5 rounded-sm">
        <motion.img
          src={product.image}
          alt={product.name}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Info Overlay */}
        <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-xs font-black tracking-[0.3em] text-white uppercase">
            View Details
          </span>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">{product.category}</span>
          <span className="text-xs text-white/20 font-mono">0{index + 1}</span>
        </div>
        
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-3xl font-black text-white leading-none tracking-tighter uppercase group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <span className="text-3xl font-light text-white/40 font-display italic">
            ${product.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

