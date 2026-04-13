"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, ShieldCheck, TrendingUp, GraduationCap, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";


export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-slate-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[140px] pointer-events-none" />
            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left: Text & Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10 lg:space-y-12 w-full text-center md:text-left order-1"
                    >
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                            >
                                <Sparkles className="w-3.5 h-3.5" /> High-Density Performance
                            </motion.div>
                            <h2 className="text-slate-900 leading-[1.1] tracking-tight text-3xl md:text-5xl lg:text-6xl font-bold">
                                Why industry leaders <br />
                                <span className="text-secondary text-gradient">Choose Catalyst.</span>
                            </h2>
                            <p className="text-slate-500 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mt-6 md:mt-8">
                                We combine deep industrial legacy with cloud-native agility to solve the most complex digital engineering challenges.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            {[
                                { title: "Strategic Transition", icon: Cpu, desc: "Fundamentally shifting business operations into legacy-compatible cloud ecosystems." },
                                { title: "Sovereign Data Security", icon: ShieldCheck, desc: "Enterprise-grade encryption and audited document digitization for total peace of mind." },
                                { title: "ROI-Focused Growth", icon: TrendingUp, desc: "Performance marketing frameworks crafted to deliver measurable, compound revenue growth." },
                                { title: "Industry-Ready cohort", icon: GraduationCap, desc: "Practical, project-based training bridging the gap between theory and technical reality." }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group flex flex-col gap-6"
                                    >
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-slate-900 text-lg md:text-xl tracking-tight leading-snug mb-2 md:mb-3">{item.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right: Visual Trust Asset */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-md mx-auto lg:max-w-none mt-10 lg:mt-0 order-2"
                    >
                        <div className="aspect-[4/5] rounded-[4rem] bg-white relative overflow-hidden border border-slate-100 shadow-premium group">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                                alt="Innovation Lab"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 saturate-[0.8]"
                            />
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700" />
                            
                            {/* Metric Overlay Overlay */}
                            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 p-6 sm:p-10 bg-white border border-slate-100 rounded-3xl sm:rounded-[3rem] shadow-2xl">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-sm shrink-0">
                                                <Image src={`https://i.pravatar.cc/100?u=${i+20}`} alt="User" width={56} height={56} />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold text-lg sm:text-xl leading-none tracking-tight">50+ Global Clients</p>
                                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2 leading-none">Enterprise & Startups</p>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-50 h-2.5 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "98%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "circOut" }}
                                        className="bg-primary h-full" 
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Customer Satisfaction: 98%</p>
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
