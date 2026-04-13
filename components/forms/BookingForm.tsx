"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Building2, MessageSquare, Calendar, Clock, Phone, Upload, Check, Loader2, FileText } from "lucide-react";
import { FormInput, FormTextarea } from "@/components/forms/FormInput";
import { StepIndicator } from "@/components/forms/StepIndicator";

interface BookingFormProps {
    onSuccess: (email: string) => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [resume, setResume] = useState<File | null>(null);

    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", company: "", designation: "", service: "", challenges: "", date: "", timeSlot: "",
    });

    const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) setResume(e.target.files[0]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        onSuccess(formData.email);
    };

    return (
        <>
            <StepIndicator currentStep={step} totalSteps={3} />

            <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" /> Personal Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormInput label="Full Name" icon={User} placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                <FormInput label="Business Email" icon={Mail} type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormInput label="WhatsApp Number" icon={Phone} type="tel" placeholder="+91 9999999999" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                                <FormInput label="Designation" icon={Building2} placeholder="CEO / Founder" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} required />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-primary" /> Business Info
                            </h3>
                            <FormInput label="Company Name" icon={Building2} placeholder="Acme Corp" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" /> Upload Resume
                            </h3>
                            <div className="relative group">
                                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                <div className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all ${resume ? 'border-primary bg-primary/5' : 'border-slate-200 bg-slate-50 group-hover:border-primary/50 group-hover:bg-slate-100'}`}>
                                    {resume ? (
                                        <>
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                                <Check className="w-6 h-6 text-primary" />
                                            </div>
                                            <p className="text-slate-900 font-medium text-sm">{resume.name}</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                                <Upload className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" />
                                            </div>
                                            <p className="text-slate-500 font-medium text-sm">Click to upload (Max 5MB)</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-primary" /> How can we help?
                            </h3>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase">SERVICE INTERESTED IN</label>
                                <select className="w-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-4 text-slate-900 outline-none hover:border-slate-300 focus:border-primary transition-colors cursor-pointer" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                                    <option value="" disabled>Select a Service</option>
                                    <option value="startup">Startup Strategy</option>
                                    <option value="process">Process Optimization</option>
                                </select>
                            </div>
                            <FormTextarea label="Current Challenges" icon={MessageSquare} placeholder="What is the biggest problem right now?" rows={4} value={formData.challenges} onChange={(e) => setFormData({ ...formData, challenges: e.target.value })} required />
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" /> Select Date & Time
                            </h3>
                            <FormInput label="Preferred Date" icon={Calendar} type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase">Available Time Slots</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {timeSlots.map((slot) => (
                                        <button key={slot} type="button" onClick={() => setFormData({ ...formData, timeSlot: slot })} className={`p-3 rounded-2xl border text-sm font-medium transition-all flex items-center justify-center gap-2 ${formData.timeSlot === slot ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'}`}>
                                            <Clock className="w-4 h-4" /> {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div className="flex gap-4 pt-4 border-t border-slate-200 mt-8">
                    {step > 1 && (
                        <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-slate-900 font-bold hover:bg-slate-50 transition-colors shadow-sm">
                            Back
                        </button>
                    )}
                    {step < 3 ? (
                        <button type="button" onClick={() => setStep(step + 1)} className="flex-1 px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200/50">
                            Next Step
                        </button>
                    ) : (
                        <button type="submit" disabled={isLoading || !formData.date || !formData.timeSlot} className="flex-1 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-2">
                            {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Scheduling...</> : "Confirm Booking"}
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}
