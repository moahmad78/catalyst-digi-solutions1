"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { trainingPrograms } from "@/lib/training-data";
import { CheckCircle2 } from "lucide-react";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function TrainingSidebar() {
    const pathname = usePathname();
    const activeProgram = trainingPrograms.find(p => `/training/${p.id}` === pathname)?.title;

    return (
        <aside className="lg:col-span-1 border-none bg-transparent">
            <div className="sticky top-24 space-y-8">
                {/* Navigation */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-white mb-6 font-space">Training Programs</h3>
                    <nav className="flex flex-col space-y-2">
                        {trainingPrograms.map((program) => {
                            const isActive = pathname === `/training/${program.id}`;

                            return (
                                <Link
                                    key={program.id}
                                    href={`/training/${program.id}`}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isActive
                                        ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20'
                                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {program.title}
                                    {isActive && <CheckCircle2 className="w-4 h-4" />}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Enrollment Form */}
                <EnrollmentForm pageType="training" activeService={activeProgram} />
            </div>
        </aside>
    );
}
