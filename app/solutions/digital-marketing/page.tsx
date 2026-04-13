import { Metadata } from 'next';
import { solutionsData } from '@/lib/solutions-data';
import SolutionWrapper from '@/components/solutions/SolutionWrapper';

export const metadata: Metadata = {
    title: `${solutionsData["digital-marketing"].title} | Catalyst Digi Solutions`,
    description: solutionsData["digital-marketing"].description,
    openGraph: {
        title: solutionsData["digital-marketing"].title,
        description: solutionsData["digital-marketing"].description,
        images: [solutionsData["digital-marketing"].image],
    }
};

export default function DigitalMarketingPage() {
    return <SolutionWrapper data={solutionsData["digital-marketing"]} />;
}
