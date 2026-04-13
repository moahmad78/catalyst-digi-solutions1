"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Clock, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function TrainingHub() {
    return (
        <section id="training" className="py-24 bg-white relative">
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6"
                    >
                        <GraduationCap className="w-3.5 h-3.5 text-primary" /> Career Acceleration
                    </motion.div>
                    <h2 className="text-slate-900 tracking-tight leading-[1.1] text-3xl md:text-5xl lg:text-5xl font-bold">
                        Project-Led <br />
                        <span className="text-secondary text-gradient">Training Hub.</span>
                    </h2>
                    <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto font-medium mt-6 sm:mt-8 leading-relaxed">
                        Bridging the gap between theory and industry through immersive, project-centric cohorts.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <TrainingCard
                        image="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop"
                        title="Virtual Office Immersion"
                        duration="6 Weeks"
                        level="Beginner to Pro"
                        description="Master high-performance remote collaboration and virtual management in a simulated environment."
                        href="/training/virtual-office-trainings"
                        delay={0.1}
                    />
                    <TrainingCard
                        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                        title="Full-Stack Engineering"
                        duration="12 Weeks"
                        level="Advanced"
                        description="An intensive curriculum focused on React, Cloud Architecture, and mission-critical production code."
                        href="/training/software-training"
                        delay={0.2}
                    />
                    <TrainingCard
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                        title="Performance Marketing"
                        duration="8 Weeks"
                        level="Strategic"
                        description="Learn core mechanics of SEO, Paid Ads, and Growth Hacking within a data-driven ROI ecosystem."
                        href="/training/digital-marketing"
                        delay={0.3}
                    />
                </div>
            </Container>
        </section>
    );
}

const TrainingCard = ({ image, title, description, duration, level, href, delay }: { image: string, title: string, description: string, duration: string, level: string, href: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
        <div className="p-6 md:p-8 flex flex-col flex-grow order-1 md:order-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight font-space group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed flex-grow font-medium">{description}</p>
            <Link href={href} className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all group/btn pt-5 border-t border-slate-50 text-sm md:text-base">
                Join cohort <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:text-primary transition-all" />
            </Link>
        </div>
        <div className="aspect-video relative overflow-hidden order-2 md:order-1">
            <Image src={image} alt={title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8]" />
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {duration}
                </span>
                <span className="px-4 py-2 bg-white text-slate-900 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg border border-slate-100">
                    <Award className="w-3.5 h-3.5 text-secondary" /> {level}
                </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
    </motion.div>
);
