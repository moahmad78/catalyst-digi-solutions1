"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, User, AtSign, MessageSquare, Briefcase, Clock, Users, Award, GraduationCap, ShieldCheck, Zap } from "lucide-react";

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
    },
    {
        question: "Do you offer placement assistance?",
        answer: "Our 'Career Gateway' program includes resume building, mock interviews, and direct referrals to our hiring partners.",
        icon: GraduationCap
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
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <section id="faq-contact" className="py-24 relative overflow-hidden bg-white border-t border-slate-50">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[140px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left Column: FAQ (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-12"
                    >
                        <div>
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                                Transparent Intelligence
                            </span>
                            <h2 className="text-slate-900 leading-tight">
                                Common <span className="text-gradient">Inquiries.</span>
                            </h2>
                            <p className="text-slate-500 text-xl leading-relaxed max-w-xl font-medium mt-6">
                                Everything you need to know about our engineering methodology and market-shifting frameworks.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`rounded-3xl transition-all duration-500 overflow-hidden ${openIndex === index
                                        ? "bg-slate-50 border border-primary/20 shadow-md"
                                        : "bg-white border border-slate-100 hover:border-slate-200"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
                                    >
                                        <div className="flex items-center gap-6 pr-4">
                                            <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${openIndex === index ? "bg-primary text-white shadow-lg shadow-primary/20 rotate-12" : "bg-slate-50 text-slate-300 group-hover:text-primary"
                                                }`}>
                                                <faq.icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-xl font-bold text-slate-900 font-space tracking-tight leading-tight">
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? "bg-primary text-white scale-110" : "bg-slate-50 text-slate-300 group-hover:bg-slate-100"
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
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="p-10 pt-0 text-slate-500 text-lg leading-relaxed border-t border-slate-200/50 mt-2">
                                                    <div className="pl-16">
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

                    {/* Right Column: Contact Form (5 cols) */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card-solid p-12 relative flex flex-col h-full bg-white"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/3 rounded-full blur-[80px] pointer-events-none" />

                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                        className="flex-1 flex flex-col"
                                    >
                                        <div className="mb-12">
                                            <h3 className="text-3xl font-bold text-slate-900 mb-4 font-space tracking-tight">Launch Project</h3>
                                            <p className="text-slate-500 text-lg font-medium leading-relaxed">Send us a message and our partners will connect with you within 4 business hours.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-8 flex-1 flex flex-col">
                                            <div className="relative">
                                                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Full Name"
                                                    className="w-full pl-16 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all text-lg text-slate-900 font-medium placeholder:text-slate-400"
                                                />
                                            </div>

                                            <div className="relative">
                                                <AtSign className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Work Email"
                                                    className="w-full pl-16 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all text-lg text-slate-900 font-medium placeholder:text-slate-400"
                                                />
                                            </div>

                                            <div className="flex-1 min-h-[160px] relative">
                                                <MessageSquare className="absolute left-6 top-6 w-5 h-5 text-slate-300" />
                                                <textarea
                                                    required
                                                    placeholder="Brief Project Overview"
                                                    className="w-full h-full pl-16 pr-8 py-6 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all text-lg text-slate-900 font-medium placeholder:text-slate-400 resize-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="btn-primary w-full py-6 group"
                                            >
                                                {isSubmitting ? "Initiating..." : (
                                                    <>
                                                        Send Message
                                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>

                                        {/* Trust Section Improvement (2-Column Layout) */}
                                        <div className="mt-12 pt-10 border-t border-slate-50 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100 shadow-sm">
                                                    <ShieldCheck className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-slate-900 font-bold text-sm leading-tight tracking-tight">Data Privacy</p>
                                                    <p className="text-slate-400 text-[10px] mt-1.5 font-bold uppercase tracking-widest leading-none">Security Standard</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                                                    <Zap className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-slate-900 font-bold text-sm leading-tight tracking-tight">Fast Response</p>
                                                    <p className="text-slate-400 text-[10px] mt-1.5 font-bold uppercase tracking-widest leading-none">Under 4 Hours</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex-1 flex flex-col items-center justify-center text-center py-20"
                                    >
                                        <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-10 border border-emerald-500/20 shadow-xl shadow-emerald-500/10">
                                            <Send className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-4xl font-bold text-slate-900 tracking-tight font-space mb-4">Transmission Success</h3>
                                        <p className="text-slate-500 text-lg max-w-xs mx-auto font-medium">Thank you for reaching out. A partner will be in touch shortly.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
