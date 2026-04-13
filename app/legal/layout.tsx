"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FileText, Shield, HelpCircle, RefreshCcw } from "lucide-react";

const sidebarItems = [
    { name: "FAQ", href: "/legal/faq", icon: HelpCircle },
    { name: "Privacy Policy", href: "/legal/privacy-policy", icon: Shield },
    { name: "Terms of Service", href: "/legal/terms", icon: FileText },
    { name: "Refund Policy", href: "/legal/refund-policy", icon: RefreshCcw },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-white pt-24 md:pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="md:w-64 flex-shrink-0">
                        <div className="sticky top-32 space-y-2">
                            <h3 className="px-6 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                                Legal & Support
                            </h3>
                            {sidebarItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-200",
                                            isActive
                                                ? "bg-primary/10 text-primary border border-primary/20"
                                                : "text-slate-600 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                                        )}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <div className="bg-slate-900/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
