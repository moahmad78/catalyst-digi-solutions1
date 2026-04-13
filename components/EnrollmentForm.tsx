"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EnrollmentFormContent from "./forms/EnrollmentFormContent";

interface EnrollmentFormProps {
    pageType: "solutions" | "training";
    activeService?: string;
}

export default function EnrollmentForm({ pageType, activeService }: EnrollmentFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] overflow-hidden p-6 md:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] backdrop-blur-md relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-[40px] pointer-events-none" />

            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <EnrollmentFormContent 
                        pageType={pageType} 
                        activeService={activeService} 
                        onSuccess={() => setIsSubmitted(true)}
                    />
                ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-5 px-6 relative z-10 w-full">
                        <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 font-space">Thank you!</h3>
                        <p className="text-slate-600 text-lg max-w-sm mx-auto">Our team will connect with you soon.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
