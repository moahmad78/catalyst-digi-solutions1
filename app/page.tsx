"use client";

import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";
import CourseGrid from "@/components/CourseGrid";
import BookingModal from "@/components/BookingModal";
import FAQContactSection from "@/components/FAQContactSection";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Code, Zap, CheckCircle2, ShieldCheck, Globe, GraduationCap, Search, Map, Rocket, Cpu, TrendingUp, User } from "lucide-react";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      {/* Hero Section */}
      <Hero />

      {/* Services Showcase (Our Digital Ecosystem) */}
      <ServicesShowcase />

      {/* SECTION 1.5: 360° Digital Solutions (Bento Grid) */}
      <section id="services" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Comprehensive Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-space text-white">
              360° Digital Solutions
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We cover the entire spectrum of digital growth, from custom engineering to brand proliferation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Block 1: Custom Development */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/20 transition-colors" />

              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-slate-900/50 rounded-xl border border-white/10 text-primary">
                  <Code className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20">
                  Engineering
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 font-space">Custom Web Engineering</h3>
              <p className="text-slate-400 mb-8 max-w-md">High-performance websites built from scratch using modern technologies for maximum speed, SEO, and scalability.</p>

              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "HTML5/CSS3"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-slate-900/50 border border-white/10 rounded-lg text-slate-300 text-sm font-medium hover:border-primary/50 hover:text-white transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Block 2: CMS & E-Commerce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-secondary/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-secondary/20 transition-colors" />

              <div className="p-3 bg-slate-900/50 rounded-xl border border-white/10 text-secondary w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-space">CMS & E-Commerce</h3>
              <p className="text-slate-400 text-sm mb-6">Scalable stores and easy-to-manage websites for rapid business growth.</p>

              <div className="flex flex-wrap gap-2">
                {["WordPress", "Shopify", "WooCommerce", "Wix"].map((cms) => (
                  <span key={cms} className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-md text-secondary text-xs font-bold hover:bg-secondary/20 transition-colors">
                    {cms}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Block 3: Digital Growth (Marketing) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 bg-gradient-to-r from-slate-900 to-slate-900/50 border border-white/10 rounded-3xl p-8 hover:border-pink-500/50 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] transition-all duration-300 group relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
            >
              <div className="absolute inset-0 bg-grid-white/5 opacity-50 pointer-events-none" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-pink-500/20 transition-colors" />

              <div className="flex-1 z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-900 rounded-xl border border-white/10 text-pink-500">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-space">Digital Marketing & Branding</h3>
                </div>
                <p className="text-slate-400 mb-0 max-w-xl">
                  We don&apos;t just build; we make you viral. Complete brand handling from social media presence to paid advertising campaigns that convert.
                </p>
              </div>

              <div className="flex-1 w-full md:w-auto z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Social Media Management",
                    "SEO & Content Strategy",
                    "Google Ads & PPC",
                    "Brand Identity Design"
                  ].map((service) => (
                    <div key={service} className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-white/5">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Professional Training Programs */}
      <section id="training" className="py-24 bg-slate-900/30 relative">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-space text-white">
              Professional Training Programs
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Hands-on learning experiences designed to launch your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrainingCard
              image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
              title="Virtual Office Trainings"
              description="Hands-on virtual training: Experience interactive sessions led by industry professionals to master remote work tools."
              href="/training/virtual-office-trainings"
              delay={0.1}
            />
            <TrainingCard
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
              title="Software Training"
              description="Hands-on learning, limited theory: Join our program for practical experience with the latest technologies."
              href="/training/software-training"
              delay={0.2}
            />
            <TrainingCard
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              title="Digital Marketing Training"
              description="Skills you'll gain: Master SEO, Social Media, and Ads to amplify your brand's impact in the digital land."
              href="/training/digital-marketing"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Internship Programs Preview (Commented out for now) */}
      {/* 
      <section className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Launch Your Career</span>
              <h2 className="text-3xl md:text-5xl font-bold font-space text-white">
                Our Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Programs</span>
              </h2>
            </div>
            <Link href="/internship" className="px-6 py-3 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-all">
              View All Programs &rarr;
            </Link>
          </div>
          <CourseGrid limit={3} />
        </div>
      </section>
      */}

      {/* Combned FAQ & Contact Us Section */}
      <FAQContactSection />

      {/* Why Choose Us (About) Section */}
      <section className="py-32 bg-slate-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 opacity-50 pointer-events-none" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-space leading-tight text-white">
                Why Choose <br />
                <span className="text-primary">Catalyst Digi?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                At Catalyst Digi Solutions, we combine two decades of industry expertise with modern technology to transform ideas into digital reality. Our mission is to craft stunning visual designs, develop cutting-edge applications, and deliver high-performance solutions that resonate with your target audience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Strategic Digital Transformation",
                    icon: Cpu,
                    desc: "Fundamentally changing how businesses operate by integrating custom technology, ERP systems, and cloud-based solutions to drive digital maturity."
                  },
                  {
                    title: "Secure Data & Record Management",
                    icon: ShieldCheck,
                    desc: "Revolutionizing record management with enterprise-grade security baked into every layer of our document digitization and systematic data handling."
                  },
                  {
                    title: "ROI-Driven Digital Marketing",
                    icon: TrendingUp,
                    desc: "Tailored, data-driven marketing strategies meticulously crafted by experts to deliver tangible results, increase leads, and elevate your brand's ROI."
                  },
                  {
                    title: "Career-Focused Training",
                    icon: GraduationCap,
                    desc: "Comprehensive, hands-on training programs and internships designed to bridge the gap between academic learning and real-world industry demands."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-primary/50 hover:bg-white/10 transition-all group hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)] flex flex-col h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
                      <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-white mb-2 text-lg leading-snug">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-slate-900 to-secondary/20 p-1">
                <div className="w-full h-full rounded-[20px] overflow-hidden relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Team collaboration"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="p-6 glass-panel rounded-2xl bg-black/40 backdrop-blur-md border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex -space-x-2">
                          {[
                            "a042581f4e29026704d",
                            "a042581f4e29026704a",
                            "a04258114e29026702d"
                          ].map((id, index) => (
                            <motion.div
                              key={id}
                              whileHover={{ scale: 1.1 }}
                              className="relative w-8 h-8 rounded-full bg-primary/20 border-2 border-slate-900 flex items-center justify-center shrink-0 overflow-hidden z-10 hover:z-20 group"
                            >
                              <User className="absolute w-4 h-4 text-primary" />
                              <Image
                                src={`https://i.pravatar.cc/150?u=${id}`}
                                alt={`Amazing Client ${index + 1}`}
                                fill
                                className="object-cover relative z-10"
                                unoptimized
                              />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-white font-bold text-sm">+50 Amazing Clients</span>
                      </div>
                      <p className="text-slate-300 text-xs">Trusted by startups and enterprises worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 p-4 glass-panel rounded-2xl border border-primary/30 shadow-lg shadow-primary/20 animate-bounce delay-1000 duration-3000 bg-black/50 backdrop-blur-xl">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work (Process Timeline) */}
      <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 opacity-30 pointer-events-none" />
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-space text-white">
              Simple 4-Step Process
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From concept to launch, we follow a proven methodology to ensure success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />

            <ProcessStep
              number="01"
              title="Discovery"
              desc="We dive deep to understand your business goals and user needs."
              icon={Search}
              delay={0}
            />
            <ProcessStep
              number="02"
              title="Strategy"
              desc="We create a comprehensive roadmap and technical architecture."
              icon={Map}
              delay={0.2}
            />
            <ProcessStep
              number="03"
              title="Development"
              desc="Our experts build your solution with clean, scalable code."
              icon={Code}
              delay={0.4}
            />
            <ProcessStep
              number="04"
              title="Launch"
              desc="We deploy your project and provide ongoing support and optimization."
              icon={Rocket}
              delay={0.6}
            />
          </div>
        </div>
      </section>


    </div >
  );
}

// Helper Components

const ProcessStep = ({ number, title, desc, icon: Icon, delay }: { number: string, title: string, desc: string, icon: React.ElementType, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative z-10 flex flex-col items-center text-center group"
  >
    <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all shadow-xl group-hover:shadow-primary/20">
      <Icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
    </div>
    <div className="text-6xl font-bold text-slate-800 absolute -top-10 -right-4 z-0 opacity-20 select-none group-hover:text-primary/20 transition-colors">
      {number}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-space">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{desc}</p>
  </motion.div>
)


const TrainingCard = ({ image, title, description, href, delay }: { image: string, title: string, description: string, href: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative h-full bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
  >
    <div className="h-48 relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-3 text-white font-space group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-slate-400 mb-4 leading-relaxed text-sm">{description}</p>
      <Link href={href} className="inline-flex text-primary font-bold text-sm items-center gap-2 group-hover:gap-3 transition-all cursor-pointer hover:text-white">
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);
