import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | Catalyst Digi Solutions",
    description: "Refund and cancellation policy for Catalyst Digi Solutions' services and training.",
};

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-white text-slate-600">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-space">Refund & Cancellation Policy</h1>
                <p className="text-slate-600 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-space prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80">
                    <p>
                        At Catalyst Digi Solutions, we strive to ensure clear and fair transactions for all our services and training programs. Please read our policy below carefully.
                    </p>
                    <h3>1. Training Programs</h3>
                    <ul>
                        <li><strong>Registration Fees:</strong> If a registration fee is applicable for a premium training program, it is generally non-refundable once the batch has commenced.</li>
                        <li><strong>Cancellations:</strong> If you cancel your registration at least 7 days before the program start date, you may be eligible for a partial refund or credit towards a future batch, at our discretion.</li>
                    </ul>

                    <h3>2. Digital Products</h3>
                    <p>
                        Due to the nature of digital goods (e.g., downloadable templates, e-books), all sales of digital products are final and non-refundable.
                    </p>

                    <h3>3. Refund Process</h3>
                    <p>
                        To request a refund or cancellation, please contact our support team at <a href="mailto:support@catalystdigi.com">support@catalystdigi.com</a> with your transaction details. Approved refunds will be processed within 5-7 business days to the original payment method.
                    </p>
                </div>
            </div>
        </main>
    );
}
