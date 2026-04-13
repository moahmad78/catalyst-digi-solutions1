"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Container from "./Container";
import GradientButton from "./GradientButton";

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
        { name: "Data Intelligence", href: "/solutions/record-management" },
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
    { name: "About Us", href: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center relative z-[101]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center group relative z-50">
              <Logo className="text-slate-900" />
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
                    className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                      pathname === link.href
                        ? "text-primary"
                        : scrolled
                        ? "text-slate-600 hover:text-primary"
                        : "text-slate-900 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 opacity-70 group-hover:opacity-100 transition-all duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
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
                          className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72 p-2 shadow-2xl rounded-3xl overflow-hidden border ${
                            scrolled
                              ? "bg-white/95 border-slate-100"
                              : "bg-white border-slate-100"
                          }`}
                        >
                          <div className="relative z-10 space-y-1">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-5 py-3 text-sm rounded-2xl transition-all ${
                                  scrolled
                                    ? "text-slate-600 hover:bg-slate-50 hover:text-primary"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          {/* Decorative glow inside dropdown */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0 pointer-events-none" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <GradientButton text="Get Started" href="/contact" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center relative z-[102]">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`transition-colors focus:outline-none p-2 rounded-xl ${
                  scrolled ? "text-slate-900 hover:bg-slate-100" : "text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>

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
                className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white/95 border-l border-slate-200 z-[201] shadow-2xl flex flex-col"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <Logo className="scale-90 origin-left" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-600 hover:text-slate-600 transition-colors"
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
                            className="flex items-center justify-between w-full text-xl font-medium text-slate-900"
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
                                className="pl-4 space-y-3 border-l px-6 border-slate-200 ml-1"
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-base text-slate-600 hover:text-primary transition-colors py-1"
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
                          className="block text-xl font-medium text-slate-900 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Drawer Footer / CTA */}
                <div className="p-8 border-t border-slate-100 bg-slate-50/50">
                  <GradientButton 
                    text="Get Started" 
                    href="/contact" 
                    className="w-full justify-center py-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
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
