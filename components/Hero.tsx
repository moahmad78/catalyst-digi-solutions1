"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const themes = [
  {
    id: "marketing",
    text: "ROI-Driven Digital Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "software",
    text: "Enterprise Software Solutions",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "development",
    text: "Scalable Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "branding",
    text: "Corporate Branding",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    color: "from-orange-500 to-red-500",
  },
];

export default function Hero() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThemeIndex((prev) => (prev + 1) % themes.length);
    }, 5000); // 5 seconds cycle
    return () => clearInterval(interval);
  }, []);

  const currentTheme = themes[currentThemeIndex];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* 1. Dynamic Backgrounds with Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentTheme.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentTheme.image}
              alt={currentTheme.text}
              fill
              className="object-cover"
              priority
            />
            {/* Left-to-Right Gradient Mask for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

            {/* Bottom Fade for smooth section transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">

          {/* LEFT COLUMN: Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Main Headline (Static) */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-space text-white mb-4 leading-[1.1]">
              Digital Excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Redefined.
              </span>
            </h1>

            {/* Dynamic Synced Sub-headline */}
            <div className="h-20 mb-8 flex items-center justify-center lg:justify-start">
              <div className="w-1 h-12 bg-white/20 mr-6 rounded-full hidden sm:block" /> {/* Deco Line - Hidden on tiny screens */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTheme.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.color}`}
                >
                  {currentTheme.text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Buttons */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              We help businesses scale with data-driven strategies and custom technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-105">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#services-showcase" className="px-8 py-4 bg-black/30 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md">
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Clear View (Empty) */}
          <div className="hidden lg:block">
            {/* This area is intentionally left empty to showcase the background image */}
          </div>

        </div>
      </div>
    </section>
  );
}
