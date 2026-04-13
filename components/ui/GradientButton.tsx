"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon, Rocket } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn utility exists, if not I'll define a simple one or just use template literals.

interface GradientButtonProps {
  text: string;
  href?: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  showIcon?: boolean;
}

const GradientButton = ({
  text,
  href,
  icon: Icon = Rocket,
  className,
  onClick,
  showIcon = true,
}: GradientButtonProps) => {
  const content = (
    <>
      <span className="relative z-10">{text}</span>
      {showIcon && Icon && (
        <Icon className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
    </>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white transition-all duration-300 active:scale-95",
    "bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400",
    "shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]",
    "hover:scale-105",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default GradientButton;
