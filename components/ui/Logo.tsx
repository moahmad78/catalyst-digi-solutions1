"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {!imgError ? (
                <Image
                    src="/logo.png"
                    alt="Catalyst Digi Solutions"
                    width={180}
                    height={60}
                    className="object-contain h-12 w-auto"
                    onError={() => setImgError(true)}
                    priority
                />
            ) : (
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg shadow-primary/20">
                    C
                </div>
            )}
        </div>
    );
};

export default Logo;
