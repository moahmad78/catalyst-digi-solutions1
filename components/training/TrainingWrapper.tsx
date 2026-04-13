"use client";

import Image from 'next/image';
import * as Icons from 'lucide-react';
import EnrollmentForm from '@/components/EnrollmentForm';
import { motion } from 'framer-motion';
import Container from "@/components/ui/Container";

const iconsMap = Icons as unknown as Record<string, React.ElementType>;

interface TrainingModule {
    title: string;
    desc: string;
}

interface TrainingProgram {
    id: string;
    title: string;
    description: string;
    duration: string;
    icon: string;
    color: string;
    heroImage: string;
    modules: TrainingModule[];
    stack: { name: string; icon: string }[];
    careerFocus: string;
}

interface TrainingWrapperProps {
    data: TrainingProgram;
}

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function TrainingWrapper({ data }: TrainingWrapperProps) {
    const MainIcon = iconsMap[data.icon] || Icons.HelpCircle;

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Cinematic Hero Section */}
            <section className="relative h-[60vh] md:h-[75vh] flex items-center overflow-hidden">
                <Image
                    src={data.heroImage}
                    alt={data.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent md:bg-gradient-to-r md:from-white md:via-white/90 md:to-transparent" />
                
                <Container className="relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl"
                    >
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6 font-bold text-sm ${data.color}`}>
                            <MainIcon className="w-4 h-4" /> {data.duration} Professional Track
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-space text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            {data.title.split(' ').map((word, i) => (
                                i === data.title.split(' ').length - 1 ? 
                                <span key={i} className="text-primary">{word}</span> : 
                                <span key={i}>{word} </span>
                            ))}
                        </h1>
                        <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-2xl">
                            {data.description}
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* 2. Program Details & Enrollment */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2" />
                
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Modules & Stack (8 Cols) */}
                        <div className="lg:col-span-8 space-y-16">
                            {/* Tech Stack */}
                            <motion.div {...fadeIn}>
                                <h2 className="text-3xl font-bold mb-8 font-space">The <span className="text-gradient">Tech Ecosystem</span></h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {data.stack.map((item, idx) => {
                                        const StackIcon = iconsMap[item.icon] || Icons.HelpCircle;
                                        return (
                                            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-all">
                                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                    <StackIcon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                                                </div>
                                                <span className="font-bold text-slate-900">{item.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Curriculum */}
                            <motion.div {...fadeIn}>
                                <h2 className="text-3xl font-bold mb-10 font-space">Module <span className="text-gradient">Curriculum</span></h2>
                                <div className="space-y-4">
                                    {data.modules.map((module, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex gap-6 items-start group hover:border-primary/20 transition-all">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                0{idx + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
                                                <p className="text-slate-500 font-medium">{module.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Career Focus */}
                            <motion.div 
                                {...fadeIn}
                                className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-grid-premium opacity-5" />
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-6">Career Mastery</h2>
                                    <p className="text-slate-400 text-xl leading-relaxed">
                                        {data.careerFocus}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sticky Enrollment Form (4 Cols) */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                <EnrollmentForm pageType="training" activeService={data.title} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
