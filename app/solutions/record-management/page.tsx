import { Metadata } from 'next';
import { solutionsData } from '@/lib/solutions-data';
import SolutionWrapper from '@/components/solutions/SolutionWrapper';

export const metadata: Metadata = {
    title: `${solutionsData["record-management"].title} | Catalyst Digi Solutions`,
    description: solutionsData["record-management"].description,
    openGraph: {
        title: solutionsData["record-management"].title,
        description: solutionsData["record-management"].description,
        images: [solutionsData["record-management"].image],
    }
};

export default function RecordManagementPage() {
    return <SolutionWrapper data={solutionsData["record-management"]} />;
}
