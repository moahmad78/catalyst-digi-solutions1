"use client";

import Image from 'next/image';
import { Megaphone, TrendingUp, Search, Mail, PlayCircle, BookOpen, SlidersHorizontal, GraduationCap, ArrowRight, Award, Zap, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import TrainingSidebar from '@/components/TrainingSidebar';
import Container from "@/components/ui/Container";

export default function DigitalMarketingTrainingPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        animate: {
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50/50 pt-32 pb-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Main Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* 1. Cinematic Hero */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative"
                        >
                            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-premium relative group">
                                <Image
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                                    alt="Marketing Analytics Training"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
                                
                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                                        <Megaphone className="w-4 h-4" /> Growth Track
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold font-space text-white leading-[1.1] max-w-2xl tracking-tight">
                                        Data-Driven <br />
                                        <span className="text-primary text-gradient">Market Dominance.</span>
                                    </h1>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Abstract / Description */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="card-solid p-10 md:p-14 border-l-4 border-l-primary"
                        >
                            <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium">
                                We teach the science of high-velocity growth. Our marketing cohorts move beyond basic social media to master behavioral attribution, technical SEO, and conversion-led Lifecycle automation.
                            </p>
                        </motion.div>

                        {/* 3. Core Modules Grid */}
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {[
                                { title: "Growth Mechanics", icon: TrendingUp, desc: "Mastering the funnel from cold acquisition to compound organic growth.", color: "pink" },
                                { title: "Social Authority", icon: Megaphone, desc: "Building high-intent communities and executing viral social performance.", color: "purple" },
                                { title: "Technical SEO", icon: Search, desc: "Dominating SERPs with semantic depth and mission-critical site performance.", color: "blue" },
                                { title: "Lifecycle Logic", icon: Mail, desc: "Automating retention with data-driven email and SMS orchestration.", color: "emerald" }
                            ].map((item, id) => (
                                <motion.div
                                    key={id}
                                    variants={fadeIn}
                                    className="card-solid p-8 group border-transparent hover:border-slate-100"
                                >
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* 4. Curriculum Depth */}
                        <section className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-10 bg-primary rounded-full" />
                                <h2 className="text-4xl font-bold tracking-tight">The Growth Blueprint.</h2>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                {[
                                    { title: "Behavioral Analytics", icon: BookOpen, desc: "Decoding user intent through heatmaps, session recording, and A/B experimental design.", color: "blue" },
                                    { title: "Performance Paid Media", icon: PlayCircle, desc: "Scaling Google and Meta Ads with massive efficiency and proprietary bidding strategies.", color: "purple" },
                                    { title: "Content Architecture", icon: SlidersHorizontal, desc: "Engineering content that ranks and converts using 'Information Gain' frameworks.", color: "emerald" }
                                ].map((item, id) => (
                                    <motion.div
                                        key={id}
                                        variants={fadeIn}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true }}
                                        className="card-solid p-10 flex flex-col md:flex-row gap-10 items-center justify-between"
                                    >
                                        <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                                            <div className="w-16 h-16 bg-slate-50 shadow-inner rounded-3xl flex items-center justify-center shrink-0">
                                                <item.icon className="w-8 h-8 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-slate-500 text-base leading-relaxed max-w-xl">{item.desc}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-8 h-8 text-slate-200 hidden md:block" />
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* 5. Success Metric Section */}
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-[3rem] p-12 md:p-16 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-grid-premium opacity-5 pointer-events-none" />
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
                                <div>
                                    <h2 className="text-white text-3xl md:text-4xl mb-6">Expert Growth Hub.</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        Join a cohort of data-first marketers and graduate with a portfolio of audited real-world growth results.
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold flex items-center gap-3">
                                            <Award className="w-5 h-5 text-primary" /> ROI Certification
                                        </div>
                                        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold flex items-center gap-3">
                                            <Zap className="w-5 h-5 text-secondary" /> Rapid Scaling
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] text-center">
                                    <Gauge className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <p className="text-white text-5xl font-bold mb-2">3.5x</p>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Avg. Client ROI Post-Grad</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Sidebar (4 Cols) */}
                    <div className="lg:col-span-4">
                        <TrainingSidebar />
                    </div>

                </div>
            </Container>
        </div>
    );
}
