import { Metadata } from 'next';
import { caseStudies } from "./page";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const caseStudy = caseStudies[id as keyof typeof caseStudies];

    if (!caseStudy) {
        return { title: 'Case Study Not Found' };
    }

    return {
        title: `${caseStudy.title} | Catalyst Digi Solutions Portfolio`,
        description: caseStudy.challenge.description,
    };
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
