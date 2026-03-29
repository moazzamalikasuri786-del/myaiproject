import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-12 left-1/2 z-[120] px-8 py-4 bg-accent text-white shadow-2xl flex items-center gap-4"
        >
          <span className="text-[10px] font-black tracking-[0.3em] uppercase whitespace-nowrap">
            {message}
          </span>
          <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
