"use client";

import { useState, FormEvent } from "react";
import { User, Mail, Phone, AlignLeft, ArrowRight, GraduationCap, Building2, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FormInput, FormTextarea } from "@/components/forms/FormInput";

interface EnrollmentFormContentProps {
    pageType: "solutions" | "training";
    activeService?: string;
    onSuccess: () => void;
}

const serviceData = {
    "Virtual Office Trainings": { title: "Virtual Office Training Enrollment", placeholder: "Tell us about your current office role...", type: "training" },
    "Software Training": { title: "Software Development Training", placeholder: "Which programming language...", type: "training" },
    "Digital Marketing Training": { title: "Digital Marketing Certification", placeholder: "Are you interested in SEO, Social Media...", type: "training" },
    "Digital Marketing": { title: "Brand Growth & Marketing Strategy", placeholder: "Please share your website...", type: "solutions" },
    "Digital Transformations": { title: "Business Digital Transformation", placeholder: "What process do you want to automate?", type: "solutions" },
    "Data Intelligence": { title: "Secure Data & Analytics Solution", placeholder: "Tell us about your data volume...", type: "solutions" }
} as const;

type ServiceKey = keyof typeof serviceData;

export default function EnrollmentFormContent({ pageType, activeService, onSuccess }: EnrollmentFormContentProps) {
    const defaultSelection: ServiceKey = pageType === "solutions" ? "Digital Marketing" : "Virtual Office Trainings";
    const selectedService: ServiceKey =
        activeService && Object.keys(serviceData).includes(activeService)
            ? (activeService as ServiceKey)
            : defaultSelection;
    const [overrideService, setOverrideService] = useState<ServiceKey | null>(null);
    const resolvedService = overrideService ?? selectedService;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSuccess();
    };

    const activeData = serviceData[resolvedService] || serviceData[defaultSelection];
    const isTraining = pageType === "training";

    return (
        <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -20, filter: "blur(5px)" }} transition={{ duration: 0.4 }} className="w-full relative z-10">
            <div className="mb-8">
                <AnimatePresence mode="wait">
                    <motion.h3 key={activeData.title} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="text-2xl font-bold text-slate-900 mb-2 font-space leading-tight">
                        {activeData.title}
                    </motion.h3>
                </AnimatePresence>
                <p className="text-slate-500 text-sm mt-2">
                    {isTraining ? "Ready to start your journey? Fill out the form below to enroll." : "Looking for digital growth? Tell us about your project."}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Choose Service <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <Briefcase className="h-4 w-4 text-slate-600" />
                        </div>
                        <select required value={resolvedService} onChange={(e) => setOverrideService(e.target.value as ServiceKey)} className="w-full bg-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl pl-11 pr-4 py-3 text-slate-900 focus:border-primary transition-all text-sm md:text-base appearance-none hover:border-slate-300 outline-none shadow-sm cursor-pointer">
                            {pageType === "training" && (
                                <optgroup label="Training Options">
                                    <option value="Virtual Office Trainings">Virtual Office Trainings</option>
                                    <option value="Software Training">Software Training</option>
                                    <option value="Digital Marketing Training">Digital Marketing Training</option>
                                </optgroup>
                            )}
                            {pageType === "solutions" && (
                                <optgroup label="Solutions Options">
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Data Intelligence">Data Intelligence</option>
                                    <option value="Other">Other</option>
                                </optgroup>
                            )}
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <FormInput label="Full Name" icon={User} required placeholder="John Doe" />
                    <FormInput type="email" label="Email Address" icon={Mail} required placeholder="john@company.com" />
                </div>

                <AnimatePresence mode="popLayout">
                    {isTraining ? (
                        <motion.div key="training" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid md:grid-cols-2 gap-5">
                            <FormInput type="tel" label="Phone Number" icon={Phone} required placeholder="+1 (555) 000-0000" />
                            <FormInput type="text" label="College / Current Year" icon={GraduationCap} required placeholder="3rd Year, XYZ College" />
                        </motion.div>
                    ) : (
                        <motion.div key="solutions" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-5">
                            <FormInput type="text" label="Business / Company Name" icon={Building2} required placeholder="Acme Corp" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-5">
                    <FormTextarea label={isTraining ? "Additional Information" : "Project Details"} icon={AlignLeft} rows={4} required placeholder={activeData.placeholder} />
                </div>

                <button type="submit" className={`w-full text-white font-bold py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 mt-6 shadow-lg group hover:-translate-y-1 bg-primary hover:bg-primary/90 shadow-primary/20`}>
                    {isTraining ? "Submit Enrollment" : "Request Proposal"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </motion.div>
    );
}
