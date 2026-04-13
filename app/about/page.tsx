"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Target, Users, ShieldCheck, Cpu, TrendingUp, Globe } from "lucide-react";
import Container from "@/components/ui/Container";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-0 relative overflow-x-hidden">

         
            {/* 2. The Strategic Philosophy (Leadership Section) */}
            <section id="founder" className="py-24 relative overflow-hidden bg-white">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        
                        {/* Visual Column */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                <Image
                                    src="/images/founder.jpg"
                                    alt="Darshan P V"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                            </div>

                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-slate-100 rounded-[3rem] -z-10" />
                        </motion.div>

                        {/* Text Column */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 space-y-8"
                        >
                            <div>
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Philosophy</span>
                                <h2 className="text-slate-900 text-4xl md:text-5xl leading-tight">
                                    Vision Guided by <br />
                                    <span className="text-secondary">Two Decades of Insight.</span>
                                </h2>
                            </div>

                            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                                Founded by <strong>Darshan P V</strong>, Catalyst was built to bridge the gap between enterprise complexity and agile execution. Our methodology isn&apos;t just about code—it&apos;s about engineering resilient ecosystems for growth.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="p-6 bg-slate-50/50 border border-slate-100/50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                    </div>
                                    <h4 className="text-slate-900 font-bold text-base mb-2">Compound Growth</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">Frameworks audited for ROI by global leaders like Toyota and Kotak Securities.</p>
                                </div>
                                <div className="p-6 bg-slate-50/50 border border-slate-100/50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                                        <Globe className="w-5 h-5 text-secondary" />
                                    </div>
                                    <h4 className="text-slate-900 font-bold text-base mb-2">Global Reach</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">Directing digital strategies for 50+ brands across international markets.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* 3. Our Mission (Cinematic Visual Break) */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-premium opacity-5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.02] tracking-tighter select-none">
                    LEGACY
                </div>
                
                <Container className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 block">Our North Star</span>
                        <h2 className="text-white mb-10">We believe in digital <span className="text-primary">transformation</span> as a catalyst for human hypergrowth.</h2>
                        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed italic font-light">
                            &quot;Our mission is to empower businesses with the strategic infrastructure, elite talent, and cloud-native frameworks needed to outpace competition and thrive in the autonomous age.&quot;
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* 4. Core Methodology (Service Reimagined) */}
            <section className="py-24 bg-white relative">
                <Container>
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Framework</span>
                        <h2 className="text-slate-900">How we deliver <span className="text-gradient">Precision.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100 p-6 md:p-8 flex flex-col"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                                <Cpu className="w-7 h-7 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">Enterprise Systems</h3>
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 font-medium flex-grow">
                                We specialize in custom application engineering and legacy system migrations that prioritize security, scalability, and seamless user experiences.
                            </p>
                            <Link href="/solutions" className="text-slate-900 font-bold flex items-center gap-2 group/btn">
                                Explore Architecture <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100 p-6 md:p-8 flex flex-col"
                        >
                            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-secondary transition-all duration-300">
                                <Target className="w-7 h-7 text-secondary group-hover:text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">Strategic Cohorts</h3>
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 font-medium flex-grow">
                                Our training programs aren&apos;t just tutorials. They are immersive, project-led incubators designed by industry veterans to build market-ready talent.
                            </p>
                            <Link href="/training" className="text-slate-900 font-bold flex items-center gap-2 group/btn">
                                Join our Cohort <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* 5. Differentiation (Why Catalyst) */}
            <section className="py-24 bg-slate-50/50 relative overflow-hidden border-t border-slate-100">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-slate-900 text-3xl md:text-5xl tracking-tight">Why Industry Leaders <span className="text-gradient">Choose Us.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "ROI Blueprint", desc: "Data-driven logic ensuring every dollar works towards your revenue goals.", icon: TrendingUp },
                            { title: "Cloud Native", desc: "Using the latest in edge computing and serverless for massive scale.", icon: Zap },
                            { title: "Elite Talent", desc: "Mentorship by developers with 15+ years of production experience.", icon: Users },
                            { title: "Sovereign Security", desc: "Bank-grade encryption protocols for all custom deployments.", icon: ShieldCheck }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 text-primary shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h4 className="text-slate-900 font-bold text-base md:text-lg mb-2 tracking-tight">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

        </div>
    );
}
