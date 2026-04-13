import { Metadata } from 'next';
import { trainingPrograms } from "@/lib/training-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const program = trainingPrograms.find(p => p.id === slug);

    if (!program) {
        return { title: 'Training Program Not Found' };
    }

    return {
        title: `${program.title} | Catalyst Digi Solutions Training`,
        description: program.description,
    };
}

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
