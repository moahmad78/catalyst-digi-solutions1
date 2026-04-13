"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import BookingForm from "./forms/BookingForm";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [successEmail, setSuccessEmail] = useState<string | null>(null);

    const handleSuccess = (email: string) => {
        setSuccessEmail(email);
    };

    const handleClose = () => {
        setSuccessEmail(null);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Content - Slide Over */}
                    <motion.div
                        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white border-l border-slate-200 shadow-2xl z-[100] overflow-y-auto"
                    >
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 font-space">Book Strategy Session</h2>
                                    <p className="text-slate-500 text-sm">Fill out the details to get started</p>
                                </div>
                                <button onClick={handleClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {successEmail ? (
                                <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
                                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 font-space">Booking Confirmed!</h3>
                                    <p className="text-slate-600 max-w-sm">
                                        Success! An invitation has been sent to <span className="text-slate-900 font-bold">{successEmail}</span>. We look forward to meeting you.
                                    </p>
                                    <button onClick={handleClose} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200/50">
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <BookingForm onSuccess={handleSuccess} />
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
