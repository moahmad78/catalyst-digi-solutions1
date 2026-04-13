"use client";

import { motion } from "framer-motion";
import { Search, Map, Code, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";

export default function DeploymentBlueprint() {
    return (
        <section className="py-24 bg-slate-50/50 relative overflow-hidden">
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-28"
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Our Methodology</span>
                    <h2 className="text-slate-900 tracking-tight leading-[1.1]">
                        The Deployment <br />
                        <span className="text-gradient">Blueprint.</span>
                    </h2>
                </motion.div>

                {/* Connected Grid Flow */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
                    {/* Blueprint Connection Line */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[1px] bg-slate-200 border-t border-dashed border-slate-300 z-0" />

                    <ProcessStep
                        number="01"
                        title="Discovery"
                        desc="Deep dive into business objectives, technical gaps, and user intent."
                        icon={Search}
                        delay={0}
                    />
                    <ProcessStep
                        number="02"
                        title="Architecture"
                        desc="Engineering a high-performance roadmap and cloud-native infrastructure."
                        icon={Map}
                        delay={0.1}
                    />
                    <ProcessStep
                        number="03"
                        title="Production"
                        desc="Agile execution with frequent feedback loops and modular deployment."
                        icon={Code}
                        delay={0.2}
                    />
                    <ProcessStep
                        number="04"
                        title="Optimization"
                        desc="Iterative scaling based on real-time performance data and ROI metrics."
                        icon={Rocket}
                        delay={0.3}
                    />
                </div>
            </Container>
        </section>
    );
}

const ProcessStep = ({ number, title, desc, icon: Icon, delay }: { number: string, title: string, desc: string, icon: React.ComponentType<{ className?: string }>, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="relative z-10 group"
    >
        <div className="w-28 h-28 rounded-[2rem] bg-white border border-slate-100 shadow-premium flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-primary/20 group-hover:-translate-y-2 group-hover:rotate-3 shadow-inner-light">
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-sm font-bold font-space group-hover:bg-primary transition-all duration-300 shadow-xl group-hover:scale-110">
                {number}
            </div>
            <Icon className="w-10 h-10 text-slate-200 group-hover:text-primary transition-colors" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight font-space">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed font-medium pr-4">{desc}</p>
    </motion.div>
);
