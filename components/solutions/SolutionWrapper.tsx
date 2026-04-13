"use client";

import Image from 'next/image';
import * as Icons from 'lucide-react';
import ServiceSidebar from '@/components/ServiceSidebar';
import { motion } from 'framer-motion';
import Container from "@/components/ui/Container";

const iconsMap = Icons as unknown as Record<string, React.ElementType>;

interface Capability {
    title: string;
    icon: string;
    desc: string;
    color: string;
}

interface SolutionData {
    title: string;
    description: string;
    image: string;
    headline: string;
    category: string;
    capabilities: Capability[];
    performancePoints: string[];
    stats: {
        value: string;
        label: string;
    };
}

interface SolutionWrapperProps {
    data: SolutionData;
}

export default function SolutionWrapper({ data }: SolutionWrapperProps) {
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
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-premium relative group">
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />

                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                                        <Icons.Code2 className="w-4 h-4" /> {data.category}
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-bold font-space text-white leading-[1.1] max-w-2xl tracking-tight">
                                        {data.headline.split(' ').map((word, i) => (
                                            i === data.headline.split(' ').length - 1 ?
                                            <span key={i} className="text-secondary text-gradient">{word}</span> :
                                            <span key={i}>{word} </span>
                                        ))}
                                    </h1>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Abstract / Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="card-solid p-10 md:p-14 border-l-4 border-l-secondary"
                        >
                            <p className="text-slate-600 leading-relaxed text-xl md:text-2xl font-medium">
                                {data.description}
                            </p>
                        </motion.div>

                        {/* 3. Core Capabilities Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {data.capabilities.map((item, id) => {
                                const IconComponent = iconsMap[item.icon] || Icons.HelpCircle;
                                return (
                                    <motion.div
                                        key={id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: id * 0.1 }}
                                        className="card-solid p-8 group border-transparent hover:border-slate-200"
                                    >
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" />
                                        </div>
                                        <h3 className="text-slate-900 text-2xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* 4. Performance Standards Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-slate-900 rounded-[3rem] p-12 md:p-16 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-grid-premium opacity-5 pointer-events-none" />
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-white text-3xl md:text-4xl mb-6">Velocity + Performance.</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        We adhere to strict engineering standards that prioritize Core Web Vitals and low-latency response times.
                                    </p>
                                    <ul className="space-y-4">
                                        {data.performancePoints.map((point) => (
                                            <li key={point} className="flex items-center gap-3 text-white font-bold opacity-80">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] text-center">
                                    <Icons.Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <p className="text-white text-4xl font-bold mb-2">{data.stats.value}</p>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">{data.stats.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar (4 Cols) */}
                    <div className="lg:col-span-4">
                        <ServiceSidebar />
                    </div>
                </div>
            </Container>
        </div>
    );
}
