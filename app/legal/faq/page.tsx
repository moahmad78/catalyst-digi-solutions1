"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";


// FAQ Data
const faqData = [
    {
        category: "Training & Development",
        questions: [
            {
                q: "What is the typical duration of your training programs?",
                a: "Our programs range from 1 month for short-term workshops to 6 months for comprehensive development bootcamps, depending on the subject's complexity."
            },
            {
                q: "Are the sessions live or pre-recorded?",
                a: "We emphasize live, interactive sessions led by industry experts to ensure real-time feedback and hands-on learning. We also provide access to session recordings for revision."
            },
            {
                q: "Do you offer job placement assistance after training?",
                a: "Yes, we provide career support, including resume building, mock interviews, and direct referrals to our network of hiring partners for top-performing students."
            },
            {
                q: "Can I manage my training alongside a full-time job?",
                a: "Absolutely. We offer flexible time slots, including evening and weekend batches, specifically designed for working professionals and students."
            }
        ]
    },
    {
        category: "Digital Solutions",
        questions: [
            {
                q: "How long does it take to see results from Digital Marketing?",
                a: "SEO typically takes 3-6 months for significant rankings, while PPC and Social Media campaigns can deliver immediate traffic and leads within the first few weeks."
            },
            {
                q: "Do you build custom mobile apps for both iOS and Android?",
                a: "Yes, we specialize in cross-platform development using frameworks like Flutter and React Native, ensuring high performance on both platforms with a single codebase."
            },
            {
                q: "What kind of businesses do you provide ERP solutions for?",
                a: "We provide custom ERP solutions for a variety of industries, including manufacturing, retail, healthcare, and education, tailored to specific operational needs."
            }
        ]
    },
    {
        category: "Enrollment & Support",
        questions: [
            {
                q: "What are the prerequisites for joining a technical training?",
                a: "Prerequisites vary; for basic web development, a laptop and a willing to learn are enough. For advanced courses, basic logic and familiarity with computers are recommended."
            },
            {
                q: "How do I get technical support during my project?",
                a: "Every trainee is assigned a dedicated mentor and has access to our support community where they can ask questions and get help in real-time."
            },
            {
                q: "Do you offer corporate training for entire teams?",
                a: "Yes, we provide specialized corporate training packages tailored to the specific technology stack and business goals of your organization."
            }
        ]
    },
    {
        category: "Security & Data",
        questions: [
            {
                q: "How secure is my data in Data Intelligence?",
                a: "Data security is our top priority. We follow advanced security protocols, including AES-256 encryption, role-based access controls, and strict digitization standards to ensure 100% data integrity and confidentiality."
            },
            {
                q: "Do you provide data backup and recovery solutions?",
                a: "Yes, as part of our Data Intelligence services, we implement automated cloud backup and recovery systems to ensure zero data loss for our clients."
            }
        ]
    }
];

export default function FAQPage() {
    return (
        <div>
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-space">Frequently Asked Questions</h1>
                <p className="text-slate-600 text-lg">
                    Find answers to common questions about our services and policies.
                </p>
            </div>

            <div className="space-y-12">
                {faqData.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-xl font-bold text-primary mb-6 font-space border-b border-slate-200 pb-2">
                            {section.category}
                        </h2>
                        <div className="space-y-4">
                            {section.questions.map((item, qIdx) => (
                                <FAQItem key={qIdx} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Support CTA */}
            <div className="mt-16 pt-8 border-t border-slate-200 text-center md:text-left">
                <p className="text-slate-600 mb-4">Still have questions?</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
                    Contact our Support Team <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl bg-white overflow-hidden transition-all border ${isOpen ? 'border-primary/30' : 'border-slate-100'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors group"
            >
                <span className="font-bold text-slate-900 text-lg md:text-xl font-space">{question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                    {isOpen ? (
                        <Minus className="w-4 h-4" />
                    ) : (
                        <Plus className="w-4 h-4" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-5 pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
