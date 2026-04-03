'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export default function Button({ children, onClick, className = '', variant = 'primary' }: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]',
    secondary: 'bg-white text-black hover:bg-white/90',
    outline: 'border border-white/20 text-white hover:bg-white/5',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
