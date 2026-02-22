"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Rocket } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Digital Solutions",
      href: "#",
      dropdown: [
        { name: "Digital Marketing", href: "/solutions/digital-marketing" },
        { name: "Digital Transformations", href: "/solutions/digital-transformation" },
        { name: "Data Management", href: "/solutions/record-management" },
      ],
    },
    {
      name: "Training",
      href: "#",
      dropdown: [
        { name: "Virtual Office Trainings", href: "/training/virtual-office-trainings" },
        { name: "Software Training", href: "/training/software-training" },
        { name: "Digital Marketing Training", href: "/training/digital-marketing" }
      ]
    },
    { name: "Internship", href: "/internship" },
    /* { name: "Portfolio", href: "/portfolio" }, */
    { name: "Consulting", href: "/consulting" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-[100] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300`}
      >
        <div
          className={`rounded-full transition-all duration-500 border ${scrolled || isMobileMenuOpen
            ? "bg-slate-950/70 backdrop-blur-xl border-white/10 shadow-2xl shadow-purple-500/5 py-2"
            : "bg-transparent border-transparent py-4"
            }`}
        >
          <div className="px-6 flex justify-between items-center relative z-[101]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center group relative z-50">
              <Logo className="text-white" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group px-3 py-2"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${pathname === link.href ? "text-primary" : "text-slate-300"
                      }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "circOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 p-2 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="relative z-10">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white rounded-xl transition-all"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          {/* Decorative glow inside dropdown */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0 pointer-events-none" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="relative group bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                  Get Started
                  <Rocket className="w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center relative z-[102]">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-primary transition-colors focus:outline-none p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Side Drawer Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-black/95 border-l border-white/10 z-[201] shadow-2xl flex flex-col"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <Logo className="text-white scale-90 origin-left" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <div className="space-y-3">
                          <button
                            onClick={() => toggleDropdown(link.name)}
                            className="flex items-center justify-between w-full text-xl font-medium text-slate-200"
                          >
                            {link.name}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""
                                }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-3 border-l px-4 border-white/10 ml-1"
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-base text-slate-400 hover:text-white transition-colors py-1"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-xl font-medium text-slate-200 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Drawer Footer / CTA */}
                <div className="p-6 border-t border-white/10 bg-slate-900/50">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                  >
                    Get Started
                    <Rocket className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
