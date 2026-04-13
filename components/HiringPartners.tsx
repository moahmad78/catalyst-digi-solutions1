"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Award, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import { useEffect, useState } from "react";

const companies = [
    { name: "Google", color: "#4285F4" },
    { name: "Microsoft", color: "#F25022" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Infosys", color: "#007CC3" },
    { name: "TCS", color: "#E71D73" },
    { name: "Wipro", color: "#1D9A6C" },
    { name: "Zoho", color: "#DF2128" },
    { name: "Accenture", color: "#A100FF" },
    { name: "Swiggy", color: "#FC8019" },
    { name: "Zomato", color: "#CB202D" }
];

const alumni = [
    {
        name: "Rahul S.",
        role: "Frontend Dev",
        company: "Swiggy",
        package: "12 LPA",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Priya M.",
        role: "UX Designer",
        company: "Zoho",
        package: "8 LPA",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Amit K.",
        role: "Full Stack",
        company: "Accenture",
        package: "6.5 LPA",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Sneha R.",
        role: "Data Analyst",
        company: "TCS",
        package: "5.5 LPA",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
];

export default function HiringPartners() {
    const controls = useAnimationControls();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: "-50%",
                transition: {
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, controls]);

    return (
        <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
            <Container className="relative z-10">
                {/* 1. Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                        <Award className="w-4 h-4" /> Global Recognition
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-900 mb-6 leading-tight">
                        Accepted by <span className="text-gradient">50+ Industry Titans.</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Our professional training and live project certificates are recognized by leading startups and MNCs globally.
                    </p>
                </div>

                {/* 2. Seamless Logo Marquee */}
                <div 
                    className="relative w-full overflow-hidden mb-24"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                    }}
                >
                    <motion.div
                        className="flex items-center gap-16 whitespace-nowrap"
                        animate={controls}
                        initial={{ x: "0%" }}
                        style={{ width: "fit-content" }}
                    >
                        {[...companies, ...companies, ...companies].map((company, index) => (
                            <div key={index} className="flex flex-col items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 transform hover:scale-110">
                                <span 
                                    className="text-3xl font-bold font-space px-8 py-4 rounded-3xl border border-slate-50 shadow-sm bg-white"
                                    style={{ color: company.color }}
                                >
                                    {company.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* 3. Success Grid */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 font-space tracking-tight">Recent Career Breakthroughs</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {alumni.map((alum, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-slate-100 shadow-premium p-8 rounded-[2.5rem] hover:border-primary/50 transition-all group hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24 mb-6">
                                    <Image
                                        src={alum.image}
                                        alt={alum.name}
                                        fill
                                        className="rounded-full object-cover border-4 border-slate-50 group-hover:border-primary transition-colors"
                                    />
                                    <div className="absolute bottom-1 right-1 bg-green-500 rounded-full p-1.5 border-2 border-white shadow-lg">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-1">{alum.name}</h4>
                                <p className="text-sm text-slate-500 mb-6 font-medium">{alum.role}</p>

                                <div className="w-full pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-base font-bold text-slate-900">{alum.company}</span>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                                        <TrendingUp className="w-3.5 h-3.5" />
                                        <span className="text-xs font-bold tracking-tight">{alum.package}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
