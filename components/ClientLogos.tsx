"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const clients = [
    { name: "Lao Government", id: 1 },
    { name: "MGA Electricals", id: 2 },
    { name: "Voomet", id: 3 },
    { name: "FinCorp Global", id: 4 },
    { name: "MedTech Plus", id: 5 },
];

export default function ClientLogos() {
    const controls = useAnimationControls();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: "-50%",
                transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, controls]);

    return (
        <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
            <div className="container px-6 mx-auto mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-slate-400 text-xs font-bold tracking-[0.2em] uppercase"
                >
                    Strategic Partners & Global Clients
                </motion.p>
            </div>

            {/* Seamless Marquee */}
            <div
                className="relative w-full overflow-hidden mb-12"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="flex gap-20 items-center whitespace-nowrap"
                    animate={controls}
                    initial={{ x: "0%" }}
                    style={{ width: "fit-content" }}
                >
                    {/* Multi-replication for guaranteed seamlessness across all resolutions */}
                    {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
                        <div
                            key={`${client.id}-${idx}`}
                            className="flex items-center justify-center px-10 py-6 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
                        >
                            <span className="text-slate-900 font-bold text-2xl tracking-tighter font-space">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Premium Metrics Grid */}
            <div className="container px-6 mx-auto border-t border-slate-50 pt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
                    {[
                        { value: "500+", label: "Strategic Projects" },
                        { value: "98%", label: "Retention Rate" },
                        { value: "24/7", label: "Global Support" },
                        { value: "20+", label: "Years Experience" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 font-space group-hover:text-primary transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
