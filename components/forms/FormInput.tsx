import React from "react";
import { LucideIcon } from "lucide-react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: LucideIcon;
    requiredMark?: boolean;
}

export function FormInput({ label, icon: Icon, className, requiredMark = true, ...props }: FormInputProps) {
    return (
        <div className="relative w-full">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                {label} {requiredMark && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-600">
                        <Icon className="h-4 w-4" />
                    </div>
                )}
                <input
                    {...props}
                    className={`w-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3 text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base shadow-sm hover:border-slate-300 ${className || ''}`}
                />
            </div>
        </div>
    );
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    icon?: LucideIcon;
    requiredMark?: boolean;
}

export function FormTextarea({ label, icon: Icon, className, requiredMark = true, ...props }: FormTextareaProps) {
    return (
        <div className="relative w-full flex-1 flex flex-col">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                {label} {requiredMark && <span className="text-red-500">*</span>}
            </label>
            <div className="relative flex-1 flex flex-col">
                {Icon && (
                    <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none text-slate-600">
                        <Icon className="h-4 w-4" />
                    </div>
                )}
                <textarea
                    {...props}
                    className={`w-full flex-1 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3 text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm md:text-base shadow-sm hover:border-slate-300 ${className || ''}`}
                />
            </div>
        </div>
    );
}
