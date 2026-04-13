"use client";

import Image from 'next/image';
import { Monitor, Settings, Calendar, PlayCircle, BookOpen, SlidersHorizontal, GraduationCap, ArrowRight, Award, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import TrainingSidebar from '@/components/TrainingSidebar';
import Container from "@/components/ui/Container";

export default function VirtualOfficeTrainingPage() {
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
                                    src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2664&auto=format&fit=crop"
                                    alt="Virtual Office Training"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
                                
                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                                        <GraduationCap className="w-4 h-4" /> Career Accelerator
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold font-space text-white leading-[1.1] max-w-2xl tracking-tight">
                                        Professional <br />
                                        <span className="text-primary text-gradient">Virtual Excellence.</span>
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
                                We bridge the gap between classroom theory and technical reality. Our cohorts are immersive, project-centric environments where you build real-world systems under expert mentorship.
                            </p>
                        </motion.div>

                        {/* 3. Core Features Grid */}
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {[
                                { title: "Elite Mentors", icon: Monitor, desc: "Led daily by industry veterans with 10+ years of production experience." },
                                { title: "Project-Led", icon: Settings, desc: "Minimizing abstract theory for massive hands-on practical application." },
                                { title: "Hybrid Learning", icon: Calendar, desc: "Flexible, high-octane slots designed for working professionals." }
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

                        {/* 4. Program Mechanics (Modernized Info Section) */}
                        <section className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-10 bg-primary rounded-full" />
                                <h2 className="text-4xl font-bold tracking-tight">Curriculum Architecture.</h2>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                {[
                                    { title: "Specialized Tracks", icon: BookOpen, desc: "Deep dives into Digital Marketing, Enterprise Architecture, and Cybersecurity frameworks.", color: "blue" },
                                    { title: "Cloud Labs (LMS)", icon: PlayCircle, desc: "24/7 access to our cloud-native labs and proprietary Learning Management System.", color: "purple" },
                                    { title: "Strategic Tailoring", icon: SlidersHorizontal, desc: "Curriculums that adapt to your specific career goals and technical baseline.", color: "emerald" }
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
                                    <h2 className="text-white text-3xl md:text-4xl mb-6">Market-Ready Talent.</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        Our the 'Career Gateway' program includes direct referrals to our global hiring partners and mock audits.
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold flex items-center gap-3">
                                            <Award className="w-5 h-5 text-primary" /> Verified Labs
                                        </div>
                                        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold flex items-center gap-3">
                                            <Zap className="w-5 h-5 text-secondary" /> Rapid Upskill
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] text-center">
                                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <p className="text-white text-5xl font-bold mb-2">92%</p>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Placement Continuity</p>
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
