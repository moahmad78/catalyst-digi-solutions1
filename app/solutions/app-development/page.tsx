import { Metadata } from 'next';
import { solutionsData } from '@/lib/solutions-data';
import SolutionWrapper from '@/components/solutions/SolutionWrapper';

export const metadata: Metadata = {
    title: `${solutionsData["app-development"].title} | Catalyst Digi Solutions`,
    description: solutionsData["app-development"].description,
    openGraph: {
        title: solutionsData["app-development"].title,
        description: solutionsData["app-development"].description,
        images: [solutionsData["app-development"].image],
    }
};

export default function AppDevelopmentPage() {
    return <SolutionWrapper data={solutionsData["app-development"]} />;
}
