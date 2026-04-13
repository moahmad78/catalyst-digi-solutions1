"use client";

import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
        { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
        { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
        { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    ];

    const solutions = [
        { name: "Digital Marketing", href: "/solutions/digital-marketing" },
        { name: "Digital Transformations", href: "/solutions/digital-transformation" },
        { name: "Data Management", href: "/solutions/record-management" }
    ];

    const legal = [
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/legal/privacy-policy" },
        { name: "Terms of Service", href: "/legal/terms" },
        { name: "Refund Policy", href: "/legal/refund-policy" }
    ];

    return (
        <footer className="bg-[#0B1120] text-slate-300 py-12 font-sans border-t border-slate-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* Column 1: Logo & About */}
                    <div className="flex flex-col">
                        <Logo />
                        <p className="text-slate-300 text-sm leading-relaxed mt-6">
                            Empowering businesses with ROI-based Digital Marketing, Custom App Development, and Corporate Training solutions.
                        </p>
                        <div className="flex items-center gap-3 mt-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Digital Solutions */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Digital Solutions</h3>
                        <nav className="flex flex-col space-y-4">
                            {solutions.map((item) => (
                                <Link 
                                    key={item.name}
                                    href={item.href} 
                                    className="text-slate-300 text-sm hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Legal & Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Legal & Support</h3>
                        <nav className="flex flex-col space-y-4">
                            {legal.map((item) => (
                                <Link 
                                    key={item.name}
                                    href={item.href} 
                                    className="text-slate-300 text-sm hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                <span className="text-slate-300 text-sm leading-relaxed">
                                    # 214, Divya Deepa, Opp to ESI Hospital, Bendoorwell, Kadri Mangalore - 575002, India
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                                <a href="tel:+919880664435" className="text-slate-300 text-sm hover:text-white transition-colors">
                                    +91 9880664435
                                </a>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                <div className="flex flex-col space-y-1">
                                    <a href="mailto:enquiry@catalystdigisolutions.com" className="text-slate-300 text-sm hover:text-white transition-colors">
                                        enquiry@catalystdigisolutions.com
                                    </a>
                                    <li><Link href="/solutions/record-management" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary transition-colors" />Data Intelligence</Link></li>
                                    <a href="mailto:support@catalystdigisolutions.com" className="text-slate-300 text-sm hover:text-white transition-colors">
                                        support@catalystdigisolutions.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="border-t border-slate-800 mt-12 pt-8 text-center">
                    <p className="text-slate-400 text-sm">
                        © 2026 Catalyst Digi Solutions. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
