"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, Globe, Zap } from "lucide-react";
import Container from "@/components/ui/Container";

const projects = [
    {
        id: "lao-app",
        title: "Lao Governance Ecosystem",
        category: "Web & App Dev",
        client: "Lao Government",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        tags: ["Flutter", "Firebase", "Real-time Architecture"],
        metric: "1M+ Users active",
        size: "large", 
    },
    {
        id: "mga-ecommerce",
        title: "MGA Industrial Commerce",
        category: "Web & App Dev",
        client: "MGA Electricals",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Next.js", "Shopify API", "Stripe"],
        metric: "200% Sales Boost",
        size: "normal",
    },
    {
        id: "voomet-branding",
        title: "Voomet Identity Launch",
        category: "Digital Marketing",
        client: "Voomet",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["SEO 2.0", "Growth Loops", "PPC"],
        metric: "10k+ Monthly Leads",
        size: "normal",
    },
    {
        id: "corporate-digitization",
        title: "FinCorp Data Sovereignty",
        category: "Records Management",
        client: "FinCorp Global",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        tags: ["OCR", "Cloud Sovereignty", "Encryption"],
        metric: "Zero Data Leaks",
        size: "large",
    },
    {
        id: "medtech-dashboard",
        title: "HealthPlus Intelligence",
        category: "Web & App Dev",
        client: "HealthPlus",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
        tags: ["React", "D3.js Visualization", "Node.js"],
        metric: "Award Winning UX",
        size: "normal",
    },
    {
        id: "travel-portal",
        title: "Wanderlust Global Engine",
        category: "Web & App Dev",
        client: "Wanderlust",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
        tags: ["Vue.js Engine", "Amadeus API", "Cloud Edge"],
        metric: "50k+ Bookings/Month",
        size: "normal",
    },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All Work");
    const categories = ["All Work", "Web & App Dev", "Digital Marketing", "Records Management"];

    const filteredProjects = activeCategory === "All Work"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50 pt-32 pb-20 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                <div className="absolute inset-0 bg-dot-premium opacity-30" />
            </div>

            <Container className="relative z-10">
                {/* 1. Cinematic Header */}
                <div className="text-center mb-24 space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-xl"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-primary" /> Case Distribution
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold font-space text-slate-900 leading-tight tracking-tighter"
                    >
                        Proven <span className="text-gradient">Impact.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Explore our documented history of engineering market-leading digital products and high-ROI growth frameworks.
                    </motion.p>
                </div>

                {/* 2. Intelligent Filter System */}
                <div className="flex flex-wrap justify-center gap-3 mb-20">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-500 border ${
                                activeCategory === cat
                                ? "bg-slate-900 border-slate-900 text-white shadow-premium -translate-y-1"
                                : "bg-white border-slate-100 text-slate-400 hover:text-slate-900 hover:border-slate-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 3. High-Density Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 auto-rows-[520px]">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative card-solid overflow-hidden bg-white border-slate-100 ${project.size === 'large' ? 'lg:col-span-4' : 'lg:col-span-2'}`}
                            >
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 saturate-[0.7] group-hover:saturate-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                                </div>

                                <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-[10px] font-bold text-white uppercase tracking-widest">
                                                {project.category}
                                            </span>
                                            <div className="h-px flex-1 bg-white/20" />
                                        </div>

                                        <h3 className="text-4xl font-bold text-white tracking-tight leading-tight font-space max-w-lg">
                                            {project.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                    #{tag.replace(/\s/g, '')}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-8 flex items-center justify-between border-t border-white/10">
                                            <div className="flex flex-col">
                                                <span className="text-white font-bold text-lg">{project.metric}</span>
                                                <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-1">ROI / Success Metric</span>
                                            </div>
                                            <Link href={`/portfolio/${project.id}`} className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform active:scale-95">
                                                <ArrowRight className="w-6 h-6" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Container>

            {/* Final CTA: Global Expansion */}
            <section className="mt-32 border-t border-slate-100 bg-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-premium opacity-40" />
                <Container className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter max-w-4xl mx-auto leading-tight">
                            Ready to develop your <br />
                            <span className="text-gradient">Next Masterpiece?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
                            <Link href="/contact" className="btn-primary min-w-[280px] py-6 shadow-2xl group text-lg">
                                Initiate Project <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#portfolio" className="btn-secondary min-w-[200px] py-6 border-slate-200 text-lg">
                                View Architecture
                            </Link>
                        </div>
                        <div className="pt-16 flex items-center justify-center gap-12 text-slate-300">
                             <div className="flex items-center gap-3"><Zap className="w-5 h-5" /> <span className="text-[10px] font-bold uppercase tracking-widest">Rapid Deployment</span></div>
                             <div className="flex items-center gap-3"><Globe className="w-5 h-5" /> <span className="text-[10px] font-bold uppercase tracking-widest">Global Support</span></div>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}
