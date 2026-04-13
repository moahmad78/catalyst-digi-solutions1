"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import * as Icons from "lucide-react";
import { trainingPrograms } from "@/lib/training-data";

const iconsMap = Icons as unknown as Record<string, React.ElementType>;

export default function CourseGrid({ limit }: { limit?: number }) {
    const courses = limit ? trainingPrograms.slice(0, limit) : trainingPrograms;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {courses.map((course, index) => {
                const isWide = index % 4 === 0 || index % 4 === 3;
                const spanClass = isWide ? "lg:col-span-7" : "lg:col-span-5";
                const MainIcon = iconsMap[course.icon] || Icons.HelpCircle;

                return (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`${spanClass} group relative glass-card layered-shadow rounded-3xl overflow-hidden transition-all flex flex-col md:p-4`}
                    >
                        {/* Unique Irregular Background Blobs inside the card to break the flat white look */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/[0.04] fluid-blob" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/[0.04] fluid-blob" />
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                        <div className="p-8 flex-grow flex flex-col">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform layered-shadow">
                                <MainIcon className="w-7 h-7 text-primary transition-colors" />
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-2 py-1 bg-white rounded text-[10px] uppercase font-bold tracking-wider text-slate-600 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-1">
                                    {course.id.replace(/-/g, ' ')}
                                </span>
                                <span className="px-2 py-1 bg-white rounded text-[10px] uppercase font-bold tracking-wider text-slate-600 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {course.duration}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-space leading-tight group-hover:text-primary transition-colors">
                                {course.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {course.description}
                            </p>

                            {/* Tools Preview */}
                            <div className="flex -space-x-2 overflow-hidden mb-6">
                                {course.stack.slice(0, 4).map((tool, i) => {
                                    const StackIcon = iconsMap[tool.icon] || Icons.HelpCircle;
                                    return (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center relative z-10" title={tool.name}>
                                            <StackIcon className="w-4 h-4 text-slate-600" />
                                        </div>
                                    );
                                })}
                            </div>

                            <Link
                                href={`/training/${course.id}`}
                                className="mt-10 w-full py-4 bg-primary rounded-full text-center text-sm font-bold text-white hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group-hover:translate-x-1 layered-shadow relative z-10"
                            >
                                View Curriculum <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
