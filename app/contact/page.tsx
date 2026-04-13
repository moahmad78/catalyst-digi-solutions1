"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send, Building2, Layers, MapPin, ShieldCheck, ArrowRight, Zap, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ContactPage() {

    return (
        <div className="min-h-screen bg-slate-50/50 pt-32 pb-20 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                <div className="absolute inset-0 bg-dot-premium opacity-30" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
                    
                    {/* Left Column: Narrative & Details (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-12 xl:col-span-5 space-y-16"
                    >
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                <Sparkles className="w-4 h-4" /> Global Access
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold font-space text-slate-900 leading-[1.05] tracking-tight">
                                Launch Your <br />
                                <span className="text-primary">Transformation.</span>
                            </h1>
                            <p className="text-slate-500 text-xl leading-relaxed font-medium max-w-lg">
                                Whether you&apos;re architecting a new infrastructure or scaling a global campaign, our elite team is ready to deploy.
                            </p>
                        </div>

                        {/* Contact Infrastructure */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
                            {[
                                { title: "Strategic Office", icon: MapPin, desc: "# 214, Divya Deepa, Bendoorwell, Kadri Mangalore - India", detail: "Global HQ" },
                                { title: "Priority Line", icon: Phone, desc: "+91 9880664435", detail: "Mon-Sat, 9AM-7PM" },
                                { title: "Email Pipeline", icon: Mail, desc: "enquiry@catalystdigisolutions.com", detail: "24h Response" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-white shadow-premium rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-slate-900 font-bold tracking-tight">{item.title}</h4>
                                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">/ {item.detail}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Operational Flow */}
                        <div className="card-solid p-10 bg-slate-900 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-grid-premium opacity-5" />
                            <div className="relative z-10">
                                <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest opacity-60">The Deployment Logic</h4>
                                <div className="space-y-8">
                                    {[
                                        { step: "01", title: "Technical Audit", desc: "Our team conducts a deep-dive analysis of your current stack and business objectives." },
                                        { step: "02", title: "Roadmap Approval", desc: "We present a modular execution strategy focused on immediate ROI and long-term scale." }
                                    ].map((flow, i) => (
                                        <div key={i} className="flex gap-6">
                                            <span className="text-primary font-space font-bold text-xl">{flow.step}</span>
                                            <div>
                                                <h5 className="text-white font-bold mb-1 tracking-tight">{flow.title}</h5>
                                                <p className="text-slate-400 text-xs leading-relaxed">{flow.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: High-Conversion Form (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-12 xl:col-span-7"
                    >
                        <div className="card-solid p-8 md:p-14 bg-white relative">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-1.5 h-8 bg-primary rounded-full" />
                                <h2 className="text-3xl font-bold tracking-tight">Request Strategic Intake.</h2>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Full Identity</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                                            <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-slate-900 font-medium placeholder:text-slate-300 focus:outline-none focus:border-primary/30 focus:bg-white transition-all shadow-inner-light" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Response Gateway</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                                            <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-slate-900 font-medium placeholder:text-slate-300 focus:outline-none focus:border-primary/30 focus:bg-white transition-all shadow-inner-light" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Organization</label>
                                        <div className="relative group">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                                            <input type="text" placeholder="Enterprise" className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 text-slate-900 font-medium placeholder:text-slate-300 focus:outline-none focus:border-primary/30 focus:bg-white transition-all shadow-inner-light" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Required Ecosystem</label>
                                        <div className="relative group">
                                            <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-primary transition-colors pointer-events-none" />
                                            <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-10 py-4 text-slate-900 font-medium appearance-none cursor-pointer focus:outline-none focus:border-primary/30 focus:bg-white transition-all shadow-inner-light">
                                                <option>Digital Marketing</option>
                                                <option>Digital Transformation</option>
                                                <option>App Development</option>
                                                <option>Data Intelligence</option>
                                                <option>Corporate Training</option>
                                            </select>
                                            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Market Scope / Objective</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                                        <textarea rows={4} placeholder="Briefly describe your challenge..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-5 text-slate-900 font-medium placeholder:text-slate-300 focus:outline-none focus:border-primary/30 focus:bg-white transition-all resize-none shadow-inner-light" />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-bold text-lg flex items-center justify-center gap-4 group overflow-hidden relative active:translate-y-1 transition-all"
                                    >
                                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                                        <span className="relative z-10">Deploy Message</span>
                                        <Send className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                                    </motion.button>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-10 border-t border-slate-50">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confidential Pipeline</span>
                                    </div>
                                    <div className="flex items-center gap-3 justify-end">
                                        <Zap className="w-5 h-5 text-secondary" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rapid Response Unit</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
