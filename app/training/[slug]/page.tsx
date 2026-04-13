import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { trainingPrograms } from "@/lib/training-data";
import TrainingWrapper from "@/components/training/TrainingWrapper";

interface PageProps {
    params: {
        slug: string;
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const program = trainingPrograms.find(p => p.id === params.slug);
    
    if (!program) return { title: 'Program Not Found' };

    return {
        title: `${program.title} | Catalyst Digi Solutions`,
        description: program.description,
        openGraph: {
            title: program.title,
            description: program.description,
            images: [program.heroImage],
        }
    };
}

export default function TrainingDetail({ params }: PageProps) {
    const program = trainingPrograms.find(p => p.id === params.slug);

    if (!program) {
        return notFound();
    }

    return <TrainingWrapper data={program} />;
}
