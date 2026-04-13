"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Database, Cpu, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

const categories = [
    {
        id: "digital-transformation",
        title: "Digital Transformation",
        description: "Building resilient, high-performance digital foundations using cutting-edge tech stacks and serverless architecture.",
        tags: ["Cloud Native", "ERP Bridge", "Modernization"],
        icon: Cpu,
        span: "md:col-span-1",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "digital-marketing",
        title: "Growth & Branding",
        description: "Scaling brands with ROI-driven marketing and high-density performance identity design.",
        tags: ["SEO 2.0", "Paid Performance", "Viral Loops"],
        icon: Zap,
        span: "md:col-span-1",
        color: "text-amber-500",
        bg: "bg-amber-50",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "record-management",
        title: "Data Intelligence",
        description: "Unlocking business vision through secured digitization and record automation systems.",
        tags: ["Security", "AI Analytics", "OCR"],
        icon: Database,
        span: "md:col-span-1",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
];

export default function ServicesShowcase() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden font-sans border-b border-slate-50">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                    <div className="max-w-3xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-primary" /> Industrial Ecosystem
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-slate-900 leading-[1.05] tracking-tight"
                        >
                            Complete Digital <br />
                            <span className="text-secondary text-gradient">Optimization.</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 text-xl max-w-sm mb-2 font-medium leading-relaxed"
                    >
                        We bridge the gap between deep-tech engineering and high-conversion market growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100"
                        >
                            {/* Visual Asset Block At TOP */}
                            <div className="relative h-48 md:h-56 w-full shrink-0 overflow-hidden border-b border-slate-50 relative">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.9] group-hover:saturate-100"
                                />
                                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
                                
                                {/* Overlay Icon */}
                                <div className={`absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 rounded-xl ${category.bg} ${category.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 z-10 bg-white/90 backdrop-blur-sm border border-slate-100/50`}>
                                    <category.icon className="w-6 h-6 md:w-7 md:h-7" />
                                </div>
                            </div>

                            <div className="relative z-10 p-6 md:p-8 flex flex-col items-start flex-grow">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight font-space">
                                    {category.title}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base mb-6 font-medium leading-relaxed flex-grow">
                                    {category.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {category.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 tracking-wider uppercase group-hover:text-primary transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-5 border-t border-slate-50 w-full flex items-center justify-between group/footer">
                                    <Link 
                                        href={`/solutions/${category.id}`}
                                        className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-primary transition-all group/link text-sm md:text-base"
                                    >
                                        Case Study 
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                    <Sparkles className="w-4 h-4 text-slate-200 group-hover/footer:text-primary/20 transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
