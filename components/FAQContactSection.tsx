"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, MapPin, Linkedin, Instagram, Twitter, Facebook, User, AtSign, MessageSquare, Briefcase, Clock, Users, Award } from "lucide-react";

const faqs = [
    {
        question: "Do you provide 100% Live Projects?",
        answer: "Yes, our trainees work on actual client projects to gain real-world experience, setting them apart from textbook learners.",
        icon: Briefcase
    },
    {
        question: "Are the training slots flexible?",
        answer: "Absolutely. We offer highly flexible slots, including evening and weekend batches, so you can learn at your own pace.",
        icon: Clock
    },
    {
        question: "Who will be mentoring me?",
        answer: "You will be mentored directly by Senior Developers and Industry Experts, getting daily code reviews and guidance.",
        icon: Users
    },
    {
        question: "Will I receive certification?",
        answer: "Yes, upon successful completion, you will receive an industry-recognized certification that highlights the live projects you contributed to.",
        icon: Award
    }
];

export default function FAQContactSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    const socials = [
        { icon: Linkedin, name: "LinkedIn", href: "#" },
        { icon: Instagram, name: "Instagram", href: "#" },
        { icon: Twitter, name: "Twitter", href: "#" },
        { icon: Facebook, name: "Facebook", href: "#" }
    ];

    return (
        <section id="faq-contact" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="container px-4 mx-auto relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-sm mb-6 tracking-widest uppercase shadow-lg">
                                Sawal-Jawab
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-6 leading-tight">
                                Frequently Asked <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Questions</span>
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                                Everything you need to know about our training, live projects, and mentorship programs.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index
                                            ? "bg-white/10 border-primary/50 shadow-[0_0_30px_-10px_rgba(124,58,237,0.3)]"
                                            : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                                    >
                                        <div className="flex items-center gap-4 pr-4">
                                            <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${openIndex === index ? "bg-primary/20 text-primary" : "bg-slate-900 text-slate-400 group-hover:text-white"
                                                }`}>
                                                <faq.icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-lg md:text-xl font-bold text-white font-space">
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? "bg-primary text-white" : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                                            }`}>
                                            {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="p-5 md:p-6 pt-0 text-slate-400 text-base md:text-lg leading-relaxed border-t border-white/5 mt-2">
                                                    <div className="pl-[3.5rem] md:pl-[4.25rem]">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Us */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex-1 flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10 mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-space">Send a Message</h3>
                                <p className="text-slate-400 text-base md:text-lg">Ready to start? Fill out the form below.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 flex-1 flex flex-col">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="w-5 h-5 text-slate-500" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base md:text-lg"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <AtSign className="w-5 h-5 text-slate-500" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base md:text-lg"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="space-y-2 flex-1 flex flex-col">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-300 ml-1">Your Message</label>
                                    <div className="relative flex-1 flex flex-col">
                                        <div className="absolute top-4 left-4 pointer-events-none">
                                            <MessageSquare className="w-5 h-5 text-slate-500" />
                                        </div>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            required
                                            className="w-full flex-1 pl-12 pr-4 py-3.5 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-base md:text-lg"
                                            placeholder="How can we help you?"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitted}
                                    className="w-full py-4 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-3 disabled:opacity-70 text-lg group mt-auto"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : submitted ? (
                                        <span className="text-green-300 flex items-center gap-2">
                                            Message Sent ✓
                                        </span>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Office & Socials Footer */}
                            <div className="mt-8 pt-8 border-t border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                                        <MapPin className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div className="text-sm md:text-base">
                                        <p className="font-bold text-white mb-0.5">Gorakhpur</p>
                                        <p className="text-slate-400">Uttar Pradesh, India</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    {socials.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all hover:-translate-y-1 shadow-md"
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
