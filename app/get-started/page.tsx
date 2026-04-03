'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { Sparkles, Users, BookOpen, Star, Zap, Building2 } from 'lucide-react';

export default function GetStartedPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-terminal-bg relative overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-terminal-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-terminal-dim text-xs font-medium mb-12"
        >
          <Zap className="w-3 h-3 text-terminal-accent" />
          SYSTEM STATUS: ONLINE
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 max-w-5xl leading-[1.1] text-white"
        >
          ACCESS THE <span className="text-terminal-accent">VIP STUDY</span> ECOSYSTEM
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-terminal-dim text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Premium study resources, MOD APKs, and exclusive educational tools. Designed for the next generation of toppers and leaders.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <button
            onClick={() => router.push('/apps')}
            className="flex items-center gap-2 px-8 py-4 rounded-lg bg-terminal-accent hover:bg-terminal-accent/90 text-terminal-bg font-bold transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)]"
          >
            <BookOpen className="w-5 h-5" />
            INITIALIZE APPS
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all"
          >
            <Zap className="w-5 h-5 text-terminal-accent" />
            JOIN COMMUNITY
          </button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { icon: Users, value: '15K+', label: 'Active Learners' },
            { icon: BookOpen, value: '1200+', label: 'Premium Apps' },
            { icon: Star, value: '98%', label: 'Uptime Rate' },
            { icon: Zap, value: '24/7', label: 'Instant Access' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="terminal-card flex flex-col items-center justify-center text-center"
            >
              <stat.icon className="w-5 h-5 text-terminal-accent mb-4" />
              <div className="text-2xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-terminal-dim font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 flex items-center gap-2 text-terminal-accent font-bold text-lg"
        >
          <Building2 className="w-6 h-6" />
          VIP STUDY PARTNERS
        </motion.div>
      </Container>
    </main>
  );
}
