"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ConsultingInquiryForm({ initialService }: { initialService: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600">
                    Our strategy team will review your requirements and contact you within 24 hours to schedule your audit.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-emerald-400 hover:text-emerald-300 text-sm font-bold"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-900/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl px-6 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Email</label>
                    <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        className="w-full bg-slate-900/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl px-6 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Interest</label>
                <input
                    type="text"
                    value={initialService}
                    readOnly
                    className="w-full bg-slate-900/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl px-6 py-3 text-slate-600 cursor-not-allowed"
                />
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Project Details</label>
                <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your current challenges..."
                    className="w-full bg-slate-900/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl px-6 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-slate-900 font-bold py-4 rounded-2xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        Book Strategy Call <ArrowRight className="w-5 h-5" />
                    </>
                )}
            </button>
        </form>
    );
}
