"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import EnrollmentForm from '@/components/EnrollmentForm';

const services = [
    { name: 'Digital Marketing', href: '/solutions/digital-marketing' },
    { name: 'Digital Transformations', href: '/solutions/digital-transformation' },
    { name: 'Data Management', href: '/solutions/record-management' },
];

export default function ServiceSidebar() {
    const pathname = usePathname();
    const activeService = services.find(s => s.href === pathname)?.name;

    return (
        <div className="space-y-8 sticky top-24">
            {/* Navigation */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 font-space">Services</h3>
                <nav className="flex flex-col space-y-2">
                    {services.map((service) => {
                        const isActive = pathname === service.href;
                        return (
                            <Link
                                key={service.href}
                                href={service.href}
                                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isActive
                                    ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {service.name}
                                {isActive && <CheckCircle2 className="w-4 h-4" />}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Enrollment Form */}
            <EnrollmentForm pageType="solutions" activeService={activeService} />
        </div>
    );
}
