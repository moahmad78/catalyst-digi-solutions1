"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

// Project Case Study Data
export const caseStudies = {
    "lao-app": {
        id: "lao-app",
        title: "Lao App - Government Digital Transformation",
        client: "Lao Government",
        category: "Mobile App Development",
        heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
        liveUrl: "https://play.google.com/store",
        challenge: {
            title: "The Challenge",
            description: "The Lao Government needed a centralized mobile platform to provide citizens with easy access to government services, reducing bureaucratic friction and improving transparency. The existing system relied on physical paperwork and in-person visits, creating inefficiencies.",
            points: [
                "No digital infrastructure for citizen services",
                "High administrative overhead and long wait times",
                "Limited accessibility for rural populations"
            ]
        },
        solution: {
            title: "Our Solution",
            description: "We developed a comprehensive Flutter-based mobile application integrated with Firebase for real-time data synchronization and Google Maps API for location-based services. The app provides a seamless user experience for accessing government services on-the-go.",
            points: [
                "Cross-platform mobile app (iOS & Android)",
                "Real-time service request tracking",
                "Multi-language support (Lao, English, Thai)",
                "Offline-first architecture for rural connectivity"
            ]
        },
        techStack: [
            { name: "Flutter", icon: "📱" },
            { name: "Firebase", icon: "🔥" },
            { name: "Google Maps", icon: "🗺️" },
            { name: "REST API", icon: "🔌" },
            { name: "Cloud Functions", icon: "☁️" }
        ],
        results: [
            { label: "Active Users", value: "50K+", icon: Users },
            { label: "Service Requests", value: "100K+", icon: TrendingUp },
            { label: "Avg. Response Time", value: "24hrs", icon: Zap },
            { label: "User Satisfaction", value: "4.8/5", icon: CheckCircle2 }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    "mga-ecommerce": {
        id: "mga-ecommerce",
        title: "MGA Electricals - E-commerce Transformation",
        client: "MGA Electricals",
        category: "Web Development & E-commerce",
        heroImage: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
        liveUrl: "https://mgaelectricals.com",
        challenge: {
            title: "The Challenge",
            description: "MGA Electricals, a traditional brick-and-mortar retailer, was losing market share to online competitors. Their outdated website had poor UX, slow load times, and no integrated payment system, resulting in high cart abandonment rates.",
            points: [
                "Legacy website with 8-second load times",
                "No mobile optimization (70% traffic was mobile)",
                "Manual inventory management causing stock issues",
                "85% cart abandonment rate"
            ]
        },
        solution: {
            title: "Our Solution",
            description: "We built a modern, headless e-commerce platform using Next.js for lightning-fast performance, integrated with Shopify for inventory management and Stripe for secure payments. The result was a conversion-optimized shopping experience.",
            points: [
                "Headless architecture with Next.js and Shopify",
                "Sub-2-second page load times",
                "Real-time inventory synchronization",
                "One-click checkout with Stripe",
                "AI-powered product recommendations"
            ]
        },
        techStack: [
            { name: "Next.js", icon: "⚡" },
            { name: "Shopify", icon: "🛒" },
            { name: "Stripe", icon: "💳" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "Vercel", icon: "▲" }
        ],
        results: [
            { label: "Sales Increase", value: "200%", icon: TrendingUp },
            { label: "Page Load Time", value: "1.8s", icon: Zap },
            { label: "Cart Abandonment", value: "-60%", icon: CheckCircle2 },
            { label: "Mobile Conversion", value: "+150%", icon: Users }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
        ]
    },
    "voomet-branding": {
        id: "voomet-branding",
        title: "Voomet - Digital Marketing Launch Campaign",
        client: "Voomet",
        category: "Digital Marketing & Brand Strategy",
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        liveUrl: "https://voomet.com",
        challenge: {
            title: "The Challenge",
            description: "Voomet, a new SaaS startup, had zero brand awareness and needed to generate qualified leads quickly in a competitive market. With a limited budget, they required a data-driven approach to maximize ROI.",
            points: [
                "Zero brand recognition in a saturated market",
                "Limited marketing budget ($10K/month)",
                "No existing content or social media presence",
                "Needed 1000+ qualified leads in 90 days"
            ]
        },
        solution: {
            title: "Our Solution",
            description: "We executed a comprehensive digital marketing strategy combining SEO, content marketing, PPC campaigns, and social media engagement. Our data-driven approach focused on high-intent keywords and targeted ad campaigns.",
            points: [
                "SEO-optimized content strategy (50+ articles)",
                "Google Ads & LinkedIn PPC campaigns",
                "Social media growth hacking (Instagram, LinkedIn)",
                "Email nurture sequences with 40% open rates",
                "Conversion rate optimization (CRO)"
            ]
        },
        techStack: [
            { name: "Google Ads", icon: "📊" },
            { name: "SEMrush", icon: "🔍" },
            { name: "HubSpot", icon: "📧" },
            { name: "LinkedIn Ads", icon: "💼" },
            { name: "Google Analytics", icon: "📈" }
        ],
        results: [
            { label: "Leads Generated", value: "10K+", icon: Users },
            { label: "Organic Traffic", value: "+450%", icon: TrendingUp },
            { label: "Cost Per Lead", value: "$8", icon: Zap },
            { label: "Conversion Rate", value: "12%", icon: CheckCircle2 }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
        ]
    }
};

export default function CaseStudyPage({ params }: { params: { id: string } }) {
    const caseStudy = caseStudies[params.id as keyof typeof caseStudies];

    if (!caseStudy) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <Image
                    src={caseStudy.heroImage}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="container px-6 mx-auto pb-16 relative z-10">
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 text-sm font-bold uppercase tracking-wider">
                        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-6 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
                            {caseStudy.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 font-space max-w-4xl">
                            {caseStudy.title}
                        </h1>
                        <p className="text-xl text-slate-600 mb-8">Client: {caseStudy.client}</p>

                        {caseStudy.liveUrl && (
                            <a
                                href={caseStudy.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
                            >
                                Visit Live Site <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Challenge vs Solution */}
            <section className="py-32 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Challenge */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-red-500/5 border border-red-500/20 rounded-[2.5rem] overflow-hidden p-8 md:p-12"
                        >
                            <div className="w-12 h-12 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">
                                !
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-space">{caseStudy.challenge.title}</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">{caseStudy.challenge.description}</p>
                            <ul className="space-y-3">
                                {caseStudy.challenge.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                                        <span className="text-red-500 mt-1">✗</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] overflow-hidden p-8 md:p-12"
                        >
                            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-space">{caseStudy.solution.title}</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">{caseStudy.solution.description}</p>
                            <ul className="space-y-3">
                                {caseStudy.solution.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-slate-900/30 border-y border-slate-200">
                <div className="container px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-space">Tech Stack Used</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {caseStudy.techStack.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 px-6 py-4 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl hover:border-primary/50 hover:bg-slate-50 transition-all"
                            >
                                <span className="text-3xl">{tech.icon}</span>
                                <span className="text-slate-900 font-semibold">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Results */}
            <section className="py-32 bg-white">
                <div className="container px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-space">Key Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {caseStudy.results.map((result, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] overflow-hidden p-8 text-center hover:border-primary/30 transition-all"
                            >
                                <result.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                <div className="text-4xl font-bold text-slate-900 mb-2 font-space">{result.value}</div>
                                <div className="text-slate-600 text-sm uppercase tracking-wider">{result.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-32 bg-slate-900/30">
                <div className="container px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-space">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {caseStudy.gallery.map((image, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative overflow-hidden rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${idx === 0 ? 'md:col-span-2 h-96' : 'h-64'}`}
                            >
                                <Image
                                    src={image}
                                    alt={`${caseStudy.title} screenshot ${idx + 1}`}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

                <div className="container px-6 mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-space">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto">
                        Let&apos;s create your success story together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-2xl"
                    >
                        Start Your Project <ArrowLeft className="w-5 h-5 rotate-180" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
