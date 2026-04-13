import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
            <div className="relative w-32 h-32 animate-pulse">
                <Image
                    src="/logo.png"
                    alt="Loading..."
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
