"use client";

import { useState, useEffect, FormEvent } from "react";
import { User, Mail, Phone, AlignLeft, ArrowRight, GraduationCap, Building2, Briefcase, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EnrollmentFormProps {
    pageType: "solutions" | "training";
    activeService?: string; // Passed down from parent Sidebar to auto-sync the dropdown
}

const serviceData = {
    // Training Options
    "Virtual Office Trainings": {
        title: "Virtual Office Training Enrollment",
        placeholder: "Tell us about your current office role or software you use.",
        type: "training"
    },
    "Software Training": {
        title: "Software Development Training",
        placeholder: "Which programming language do you want to master (e.g., React, Python)?",
        type: "training"
    },
    "Digital Marketing Training": {
        title: "Digital Marketing Certification",
        placeholder: "Are you interested in SEO, Social Media, or Google Ads?",
        type: "training"
    },
    // Solutions Options
    "Digital Marketing": {
        title: "Brand Growth & Marketing Strategy",
        placeholder: "Please share your business website or social media handles.",
        type: "solutions"
    },
    "Digital Transformations": {
        title: "Business Digital Transformation",
        placeholder: "What is the biggest manual process you want to automate in your business?",
        type: "solutions"
    },
    "Data Management": {
        title: "Secure Data & Analytics Solution",
        placeholder: "Tell us about your data volume or the storage tools you currently use.",
        type: "solutions"
    }
} as const;

type ServiceKey = keyof typeof serviceData;

export default function EnrollmentForm({ pageType, activeService }: EnrollmentFormProps) {
    const defaultSelection = pageType === "solutions" ? "Digital Marketing" : "Virtual Office Trainings";

    // State for the selected service dropdown
    const [selectedService, setSelectedService] = useState<ServiceKey>(defaultSelection);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Tab-to-Form Sync: Update selectedService if the parent changes the active tab
    useEffect(() => {
        if (activeService && Object.keys(serviceData).includes(activeService)) {
            setSelectedService(activeService as ServiceKey);
        }
    }, [activeService]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // Stop Page Reload
        setIsSubmitted(true); // Trigger Success UI
    };

    const activeData = serviceData[selectedService] || serviceData[defaultSelection];
    const isTraining = pageType === "training";

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] pointer-events-none" />

            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }} // Cinematic Disappearance
                        transition={{ duration: 0.4 }}
                        className="w-full"
                    >
                        <div className="relative z-10 mb-8">
                            <AnimatePresence mode="wait">
                                <motion.h3
                                    key={activeData.title}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-2xl font-bold text-white mb-2 font-space leading-tight"
                                >
                                    {activeData.title}
                                </motion.h3>
                            </AnimatePresence>
                            <p className="text-slate-400 text-sm mt-2">
                                {isTraining
                                    ? "Ready to start your journey? Fill out the form below to enroll."
                                    : "Looking for digital growth? Tell us about your project."}
                            </p>
                        </div>

                        <motion.form
                            onSubmit={handleSubmit}
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                            className="space-y-5 relative z-10"
                        >
                            {/* ---------------- PAGE-BASED FILTERED DROPDOWN ---------------- */}
                            <motion.div variants={slideUp} className="relative">
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    Choose Service <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
                                        <Briefcase className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <select
                                        required
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value as ServiceKey)}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base appearance-none relative z-0"
                                    >
                                        {pageType === "training" && (
                                            <optgroup label="Training Options" className="bg-slate-900">
                                                <option value="Virtual Office Trainings">Virtual Office Trainings</option>
                                                <option value="Software Training">Software Training</option>
                                                <option value="Digital Marketing Training">Digital Marketing Training</option>
                                            </optgroup>
                                        )}
                                        {pageType === "solutions" && (
                                            <optgroup label="Solutions Options" className="bg-slate-900">
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Digital Transformations">Digital Transformations</option>
                                                <option value="Data Management">Data Management</option>
                                            </optgroup>
                                        )}
                                    </select>
                                </div>
                            </motion.div>

                            {/* ---------------- SHARED FIELDS ---------------- */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <motion.div variants={slideUp} className="relative">
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                            <User className="h-4 w-4 text-slate-500" />
                                        </div>
                                        <input type="text" required placeholder="John Doe" className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base" />
                                    </div>
                                </motion.div>
                                <motion.div variants={slideUp} className="relative">
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                            <Mail className="h-4 w-4 text-slate-500" />
                                        </div>
                                        <input type="email" required placeholder="john@company.com" className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base" />
                                    </div>
                                </motion.div>
                            </div>

                            <AnimatePresence mode="popLayout">
                                {/* ---------------- TRAINING SPECIFIC FIELDS ---------------- */}
                                {isTraining && (
                                    <motion.div
                                        key="training-fields"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid md:grid-cols-2 gap-5"
                                    >
                                        <div className="relative">
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                    <Phone className="h-4 w-4 text-slate-500" />
                                                </div>
                                                <input type="tel" required placeholder="+1 (555) 000-0000" className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                                College / Current Year <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                    <GraduationCap className="h-4 w-4 text-slate-500" />
                                                </div>
                                                <input type="text" required placeholder="3rd Year, XYZ College" className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* ---------------- SOLUTIONS SPECIFIC FIELDS ---------------- */}
                                {!isTraining && (
                                    <motion.div
                                        key="solutions-fields"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-5"
                                    >
                                        <div className="relative">
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                                Business / Company Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                    <Building2 className="h-4 w-4 text-slate-500" />
                                                </div>
                                                <input type="text" required placeholder="Acme Corp" className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm md:text-base" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* ---------------- SHARED: DYNAMIC MESSAGE DETAILS ---------------- */}
                            <motion.div variants={slideUp} className="relative !mt-5">
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    {isTraining ? "Additional Information" : "Project Details"}
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none">
                                        <AlignLeft className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <AnimatePresence mode="wait">
                                        <motion.textarea
                                            key={activeData.placeholder}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            required
                                            rows={4}
                                            placeholder={activeData.placeholder}
                                            className={`w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all text-sm md:text-base resize-none ${isTraining ? "focus:border-primary focus:ring-primary" : "focus:border-secondary focus:ring-secondary"}`}
                                        />
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                variants={slideUp}
                                type="submit"
                                className={`w-full text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-6 shadow-lg group text-sm md:text-base ${isTraining
                                        ? "bg-gradient-to-r from-primary to-purple-500 shadow-primary/25"
                                        : "bg-gradient-to-r from-secondary to-blue-500 shadow-secondary/25"
                                    }`}
                            >
                                {isTraining ? "Submit Enrollment" : "Request Proposal"}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.form>
                    </motion.div>
                ) : (
                    // --- CINEMATIC SUCCESS MESSAGE ---
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center space-y-5 px-6 relative z-10 w-full"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                            className="w-24 h-24 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 shadow-[0_0_50px_-10px_rgba(52,211,153,0.3)]"
                        >
                            <CheckCircle2 className="w-12 h-12" />
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-bold text-white font-space"
                        >
                            Thank you!
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-400 text-lg leading-relaxed max-w-sm mx-auto"
                        >
                            Our team will connect with you soon.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
