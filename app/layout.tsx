import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DeveloperSignature from "@/components/DeveloperSignature";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BookingProvider } from "@/components/providers/BookingProvider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Catalyst Digi Solutions | Digital Marketing, Digital Transformations & Data Management",
  description: "Transforming businesses with cutting-edge digital solutions. Web Development, SEO, Branding, and Professional Training in Mangalore. Contact: +91 9880664435",
  authors: [{ name: "Sahil Sheikh", url: "https://www.instagram.com/sahil_sheikh78/" }, { name: "Darshan PV", url: "https://www.linkedin.com/in/darshanpv" }],
  creator: "Sahil Sheikh",
  keywords: ["Digital Marketing Mangalore", "Data Management India", "Catalyst Digi", "Digital Transformation Mangalore", "Corporate Training India"],
  icons: {
    icon: "/fevi.png",
    shortcut: "/fevi.png",
    apple: "/fevi.png",
  },
  openGraph: {
    title: "Catalyst Digi Solutions",
    description: "Transforming businesses with cutting-edge digital solutions. Web Development, SEO, Branding, and Professional Training.",
    url: "https://catalystdigisolutions.com",
    siteName: "Catalyst Digi Solutions",
    locale: 'en_US',
    type: 'website',
    emails: ["enquiry@catalystdigisolutions.com"],
    phoneNumbers: ["+91 9880664435"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${spaceGrotesk.variable} font-sans antialiased bg-slate-50 text-slate-700 flex flex-col min-h-screen selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden`}>
        {/* Soft UI Background Gradients */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/[0.03] rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <BookingProvider>
            <DeveloperSignature />
            <Navbar />
            <main className="flex-grow flex flex-col">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </BookingProvider>
        </div>
      </body>
    </html>
  );
}
