"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Rocket, TrendingUp, ShieldCheck, Cpu } from "lucide-react";

const slides = [
    {
        title: "Scalable Digital Solutions for Bold Brands.",
        description: "We engineer resilient digital ecosystems that transform complex business challenges into seamless market leadership and hypergrowth.",
        primaryCTA: "Launch Project",
        secondaryCTA: "Our Frameworks",
        image: "/generated/hero_dashboard.png",
        accent: "primary"
    },
    {
        title: "Future-Proof Your Legacy with Precision Cloud.",
        description: "Architecting high-performance roadmaps that integrate mission-critical technical depth with modern agile delivery systems.",
        primaryCTA: "Start Transformation",
        secondaryCTA: "View Case Studies",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        accent: "secondary"
    },
    {
        title: "Turn Data Insights into Explosive Revenue.",
        description: "Data-driven marketing strategies meticulously crafted by performance experts to deliver measurable growth and unmatched ROI.",
        primaryCTA: "Scale Your ROI",
        secondaryCTA: "Strategy Audit",
        image: "/generated/hero_fintech.png",
        accent: "primary"
    }
];

const SLIDE_DURATION = 5;

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION * 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column: Content Slider */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative w-full">
                <div className="min-h-[360px] lg:min-h-[420px] w-full flex flex-col justify-center relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="space-y-10 will-change-opacity"
                        >
                            <h1 className="text-slate-900 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-2xl mx-auto lg:mx-0">
                                {slides[current].title.split(" ").map((word, i) => (
                                    <span key={i} className={i >= slides[current].title.split(" ").length - 3 ? "text-gradient inline-block" : ""}>{word}{" "}</span>
                                ))}
                            </h1>

                            <p className="text-slate-500 text-lg md:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-90">
                                {slides[current].description}
                            </p>

                            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-5 justify-center lg:justify-start pt-4">
                                <Link href="/contact" className="btn-primary w-full sm:w-auto sm:min-w-[220px] group shadow-xl hover:shadow-primary/30 py-4 sm:py-5 flex items-center justify-center">
                                    {slides[current].primaryCTA}
                                    <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-2" />
                                </Link>
                                <Link href="#services" className="btn-secondary w-full sm:w-auto sm:min-w-[200px] group border-slate-200 py-4 sm:py-5 flex items-center justify-center">
                                    {slides[current].secondaryCTA}
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Social Proof with Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-10 sm:pt-16 border-t border-slate-100 max-w-lg w-full">
                    {[
                        { label: "Trusted Brands", value: "50+", progress: 85 },
                        { label: "Success Rate", value: "98%", progress: 98 },
                        { label: "Global Support", value: "24/7", progress: 100 }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-3">
                            <div className="text-slate-900 font-bold text-3xl font-space">{stat.value}</div>
                            <div className="space-y-2">
                                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${stat.progress}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }}
                                        className="h-full bg-primary/20 bg-gradient-to-r from-primary/40 to-primary"
                                    />
                                </div>
                                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block leading-tight">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Progress Bar */}
                <div className="w-full max-w-2xl pt-10 space-y-8">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden relative">
                        <motion.div 
                            key={current}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: SLIDE_DURATION, ease: "linear" }}
                            style={{ originX: 0 }}
                            className="h-full bg-primary w-full will-change-transform"
                        />
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] font-space">
                            0{current + 1} <span className="mx-2 text-slate-200">/</span> 0{slides.length}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Visual Component */}
            <div className="relative flex justify-center lg:justify-end h-[400px] sm:h-[500px] lg:h-[600px] w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 group max-w-2xl ml-auto will-change-opacity"
                    >
                        <motion.div
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: SLIDE_DURATION, ease: "easeOut" }}
                            className="relative w-full h-full will-change-transform"
                        >
                            <Image
                                src={slides[current].image}
                                alt={slides[current].title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                        
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700" />
                        
                        {/* Floating Metric Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 right-4 sm:right-10 p-6 sm:p-10 bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl sm:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-8">
                                <div className="p-4 sm:p-5 bg-primary/10 text-primary rounded-2xl sm:rounded-3xl shadow-inner shrink-0">
                                    {current === 0 && <TrendingUp className="w-10 h-10" />}
                                    {current === 1 && <Cpu className="w-10 h-10" />}
                                    {current === 2 && <ShieldCheck className="w-10 h-10" />}
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-xl sm:text-2xl leading-none tracking-tight">
                                        {current === 0 && "Enterprise Growth"}
                                        {current === 1 && "Precision Delivery"}
                                        {current === 2 && "Secured Revenue"}
                                    </h4>
                                    <p className="text-sm sm:text-base font-semibold text-slate-500 mt-2">
                                        {current === 0 && "Proprietary high-ROI tracking framework."}
                                        {current === 1 && "Mission-critical technical architecture."}
                                        {current === 2 && "Encrypted data-driven environments."}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
