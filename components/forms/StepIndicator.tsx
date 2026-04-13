import { motion } from "framer-motion";

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <div className="w-full h-2 bg-slate-100 rounded-full mb-8 overflow-hidden shadow-inner">
            <motion.div
                className="h-full bg-primary"
                initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />
        </div>
    );
}
