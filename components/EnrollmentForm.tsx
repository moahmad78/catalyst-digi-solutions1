"use client";

import { useState } from "react";
import { User, Mail, Phone, MessageCircle, GraduationCap, BookOpen, BarChart, AlignLeft, ArrowRight, Building2, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EnrollmentFormProps {
    category?: "solutions" | "training"; // Made optional to allow default via state if needed
}

const serviceContentMap: Record<string, { title: string; placeholder: string }> = {
    // Training Options
    "virtual-office": {
        title: "Virtual Office Training Enrollment",
        placeholder: "Tell us about your background and why you want to join our virtual office training..."
    },
    "software-training": {
        title: "Software Training Enrollment",
        placeholder: "What software skills are you looking to master?"
    },
    "digital-marketing-training": {
        title: "Digital Marketing Training Enrollment",
        placeholder: "What are your goals in digital marketing?"
    },
    // Solutions Options
    "digital-marketing": {
        title: "Digital Marketing Inquiry",
        placeholder: "Tell us about your target audience and marketing goals..."
    },
    "digital-transformations": {
        title: "Digital Transformation Inquiry",
        placeholder: "Describe the processes you want to digitize or improve..."
    },
    "data-management": {
        title: "Data Management Inquiry",
        placeholder: "What are your data challenges and how can we help?"
    }
};

export default function EnrollmentForm({ category = "training" }: EnrollmentFormProps) {
    // Dynamic State for Form Category
    const [formCategory, setFormCategory] = useState<"solutions" | "training">(category);

    // Dynamic State for Selected Service
    const [selectedService, setSelectedService] = useState<string>("");

    const handleCategoryChange = (newCategory: "solutions" | "training") => {
        setFormCategory(newCategory);
        setSelectedService(""); // Reset selected service when switching tabs
    };

    const content = selectedService && serviceContentMap[selectedService]
        ? serviceContentMap[selectedService]
        : {
            title: formCategory === "training" ? "Enrollment Application" : "Project Inquiry",
            placeholder: formCategory === "training" ? "Tell us about your goals..." : "Tell us about your project requirements..."
        };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10 mb-8">
                <AnimatePresence mode="wait">
                    <motion.h3
                        key={content.title}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl font-bold text-white mb-2 font-space"
                    >
                        {content.title}
                    </motion.h3>
                </AnimatePresence>
                <p className="text-slate-400 text-sm">
                    {formCategory === "training"
                        ? "Ready to start your journey? Fill out the form below to enroll."
                        : "Looking for digital growth? Tell us about your project."}
                </p>
            </div>

            {/* Category Toggle */}
            <div className="relative z-10 flex bg-slate-900/50 p-1.5 rounded-2xl mb-8 border border-white/5">
                <button
                    type="button"
                    onClick={() => handleCategoryChange("training")}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${formCategory === "training"
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                >
                    Training
                </button>
                <button
                    type="button"
                    onClick={() => handleCategoryChange("solutions")}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${formCategory === "solutions"
                        ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                >
                    Digital Solutions
                </button>
            </div>

            <motion.form
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="space-y-5 relative z-10"
            >
                {/* ---------------- SHARED FIELDS ---------------- */}
                <div className="grid md:grid-cols-2 gap-5">
                    {/* Full Name */}
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

                    {/* Email Address */}
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
                    {formCategory === "training" && (
                        <motion.div
                            key="training-fields"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-5"
                        >
                            <div className="grid md:grid-cols-2 gap-5">
                                {/* Phone Number */}
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
                                {/* Current Year/College */}
                                <div className="relative">
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                        Current Year / College <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                            <GraduationCap className="h-4 w-4 text-slate-500" />
                                        </div>
                                        <input type="text" required placeholder="3rd Year, XYZ College" className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base" />
                                    </div>
                                </div>
                            </div>

                            {/* Select Training Program */}
                            <div className="relative">
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    Select Training Program <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
                                        <BookOpen className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <select
                                        required
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base appearance-none relative z-0"
                                    >
                                        <option value="" disabled hidden className="text-slate-600">Select a program</option>
                                        <option value="virtual-office" className="bg-slate-900">Virtual Office Trainings</option>
                                        <option value="software-training" className="bg-slate-900">Software Training</option>
                                        <option value="digital-marketing-training" className="bg-slate-900">Digital Marketing Training</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ---------------- SOLUTIONS SPECIFIC FIELDS ---------------- */}
                    {formCategory === "solutions" && (
                        <motion.div
                            key="solutions-fields"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-5"
                        >
                            {/* Business Name */}
                            <div className="relative">
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    Business Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <Building2 className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <input type="text" required placeholder="Acme Corp" className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm md:text-base" />
                                </div>
                            </div>

                            {/* Service Required Dropdown */}
                            <div className="relative">
                                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    Service Required <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
                                        <Briefcase className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <select
                                        required
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-sm md:text-base appearance-none relative z-0"
                                    >
                                        <option value="" disabled hidden className="text-slate-600">Select a service</option>
                                        <option value="digital-marketing" className="bg-slate-900">Digital Marketing</option>
                                        <option value="digital-transformations" className="bg-slate-900">Digital Transformations</option>
                                        <option value="data-management" className="bg-slate-900">Data Management</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ---------------- SHARED: ADDITIONAL DETAILS ---------------- */}
                <motion.div variants={slideUp} className="relative !mt-5">
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        {formCategory === "training" ? "Any Message/Notes" : "Project Details"}
                    </label>
                    <div className="relative">
                        <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none">
                            <AlignLeft className="h-4 w-4 text-slate-500" />
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.textarea
                                key={content.placeholder}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                rows={3}
                                placeholder={content.placeholder}
                                className={`w-full bg-slate-900/50 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all text-sm md:text-base resize-none ${formCategory === "training" ? "focus:border-primary focus:ring-primary" : "focus:border-secondary focus:ring-secondary"}`}
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                    variants={slideUp}
                    type="submit"
                    className={`w-full text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-6 shadow-lg group text-sm md:text-base ${formCategory === "training"
                            ? "bg-gradient-to-r from-primary to-purple-500 shadow-primary/25"
                            : "bg-gradient-to-r from-secondary to-blue-500 shadow-secondary/25"
                        }`}
                >
                    {formCategory === "training" ? "Submit Application" : "Request Proposal"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </motion.form>
        </div>
    );
}
