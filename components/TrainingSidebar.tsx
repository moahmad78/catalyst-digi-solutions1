"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trainingPrograms } from "@/lib/training-data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function TrainingSidebar() {
    const pathname = usePathname();
    const activeProgram = trainingPrograms.find(p => `/training/${p.id}` === pathname)?.title;

    return (
        <aside className="lg:col-span-1 border-none bg-transparent sticky top-24 self-start">
            <div className="space-y-8">
                {/* Navigation */}
                <div className="card-solid p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h3 className="text-xl font-bold text-slate-900 font-space tracking-tight">Our Cohorts</h3>
                    </div>
                    <nav className="flex flex-col space-y-3">
                        {trainingPrograms.map((program) => {
                            const isActive = pathname === `/training/${program.id}`;

                            return (
                                <Link
                                    key={program.id}
                                    href={`/training/${program.id}`}
                                    className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group ${isActive
                                        ? 'bg-slate-900 text-white font-bold shadow-xl shadow-slate-200'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary font-medium hover:pl-8'
                                        }`}
                                >
                                    <span className="text-sm tracking-tight">{program.title}</span>
                                    {isActive ? (
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                    ) : (
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <EnrollmentForm pageType="training" activeService={activeProgram} />
            </div>
        </aside>
    );
}
