'use client';

import { motion } from 'motion/react';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AppData } from '@/data/apps';

interface AppCardProps {
  app: AppData;
  onDownload: (app: AppData) => void;
}

export default function AppCard({ app, onDownload }: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-terminal-accent rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
      
      <div className="relative terminal-card h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-terminal-border">
            <Image
              src={app.icon}
              alt={app.name}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-terminal-dim">
            {app.type}
          </span>
        </div>

        <Link href={`/app/${app.id}`} className="block group/title">
          <h3 className="text-lg font-bold mb-1 group-hover/title:text-terminal-accent transition-colors text-white">
            {app.name}
          </h3>
        </Link>
        <p className="text-sm text-terminal-dim line-clamp-2 mb-6 flex-grow">
          {app.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button
            onClick={() => onDownload(app)}
            className="flex items-center justify-center gap-2 py-2.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium text-white"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          <Link
            href={app.website}
            target="_blank"
            className="flex items-center justify-center gap-2 py-2.5 rounded-md bg-terminal-accent hover:bg-terminal-accent/90 text-terminal-bg font-bold transition-all text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Website
          </Link>
        </div>

        <Link 
          href={`/app/${app.id}`}
          className="mt-4 flex items-center justify-center gap-2 text-xs text-terminal-dim hover:text-white transition-colors py-1"
        >
          View Details <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
}
