import { Metadata } from 'next';
import { internshipData } from "@/lib/internshipData";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const program = internshipData.find(p => p.id === slug);

    if (!program) {
        return { title: 'Internship Program Not Found' };
    }

    return {
        title: `${program.title} | Catalyst Digi Solutions Internship`,
        description: program.description,
    };
}

export default function InternshipLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
