"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { useEffect, useState } from "react";

const successStories = [
    {
        name: "Aarav Patel",
        role: "Frontend Developer",
        company: "Zoho",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Zoho_Corporation_logo.png/1200px-Zoho_Corporation_logo.png",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
        quote: "The live projects here helped me crack my interview at Zoho! I built a real CRM dashboard that impressed the interviewers."
    },
    {
        name: "Sneha Reddy",
        role: "UI/UX Designer",
        company: "Swiggy",
        companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        quote: "I learned to think like a designer. The portfolio I built during the training program was the key to my selection."
    },
    {
        name: "Rohan Gupta",
        role: "Full Stack Engineer",
        company: "Freshworks",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Freshworks_Logo.svg/2560px-Freshworks_Logo.svg.png",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        quote: "Practical, hands-on learning. No boring theory. We shipped code to production every week."
    },
    {
        name: "Ananya Singh",
        role: "Digital Marketer",
        company: "Nykaa",
        companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Nykaa_Logo.svg/1200px-Nykaa_Logo.svg.png",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        quote: "Running live ad campaigns gave me the confidence to handle real marketing budgets."
    },
    {
        name: "Vikram Malhotra",
        role: "Flutter Developer",
        company: "Zomato",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        quote: "Building a food delivery app clone from scratch taught me more than 4 years of college."
    }
];

export default function SuccessStories() {
    const controls = useAnimationControls();
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: "-50%",
                transition: {
                    duration: 50,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, controls]);

    return (
        <section id="real-results" className="py-24 bg-white relative overflow-hidden text-center border-t border-slate-100">
            {/* Section Header */}
            <Container className="mb-20 relative z-10 text-center">
                <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Proven Trajectories</span>
                <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-900 mb-6">
                    Real People. <span className="text-gradient">Real Results.</span>
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                    Join the league of 500+ professionals who transformed their careers through our immersive training ecosystem.
                </p>
            </Container>

            {/* Premium Marquee */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="flex gap-10 whitespace-nowrap"
                    animate={controls}
                    initial={{ x: "0%" }}
                    style={{ width: "fit-content" }}
                >
                    {[...successStories, ...successStories, ...successStories].map((story, i) => (
                        <motion.div
                            key={`${story.name}-${i}`}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            className="w-[420px] bg-white border border-slate-100 shadow-premium rounded-[2.5rem] overflow-hidden p-10 flex flex-col items-start text-left transition-all duration-300 group/card cursor-pointer"
                        >
                            <div className="flex items-center gap-5 mb-8 w-full">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-50 group-hover/card:border-primary transition-colors shrink-0">
                                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-slate-900 font-bold text-xl leading-tight">{story.name}</h4>
                                    <p className="text-slate-500 text-sm mt-1">
                                        Joined <span className="text-slate-900 font-bold">{story.company}</span>
                                    </p>
                                </div>
                                <div className="relative w-10 h-10 opacity-30 group-hover/card:opacity-100 grayscale group-hover/card:grayscale-0 transition-all duration-500 shrink-0">
                                    <Image src={story.companyLogo} alt={story.company} fill className="object-contain" />
                                </div>
                            </div>

                            <div className="relative">
                                <Quote className="w-10 h-10 text-primary/10 absolute -top-5 -left-4 transform -scale-x-100" />
                                <p className="text-slate-600 text-lg leading-relaxed relative z-10 font-medium italic">
                                    &quot;{story.quote}&quot;
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
