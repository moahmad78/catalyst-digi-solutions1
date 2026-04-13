import { Metadata } from 'next';
import { solutionsData } from '@/lib/solutions-data';
import SolutionWrapper from '@/components/solutions/SolutionWrapper';

export const metadata: Metadata = {
    title: `${solutionsData["digital-transformation"].title} | Catalyst Digi Solutions`,
    description: solutionsData["digital-transformation"].description,
    openGraph: {
        title: solutionsData["digital-transformation"].title,
        description: solutionsData["digital-transformation"].description,
        images: [solutionsData["digital-transformation"].image],
    }
};

export default function DigitalTransformationPage() {
    return <SolutionWrapper data={solutionsData["digital-transformation"]} />;
}
