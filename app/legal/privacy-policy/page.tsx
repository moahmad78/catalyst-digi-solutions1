import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Catalyst Digi Solutions",
    description: "Read our Privacy Policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-white text-slate-600">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-space">Privacy Policy</h1>
                <p className="text-slate-600 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-space prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80">
                    <p>
                        At Catalyst Digi Solutions, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or inquire about our services.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>We collect information that you voluntarily provide to us, including but not limited to:</p>
                    <ul>
                        <li><strong>Personal Identification:</strong> Name, Email Address, Phone Number.</li>
                        <li><strong>Professional Details:</strong> Company Name and Industry (for business inquiries).</li>
                        <li><strong>Message Content:</strong> Any details you provide in our contact or inquiry forms.</li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>The information we collect is used to:</p>
                    <ul>
                        <li>Respond to business inquiries and consultation requests.</li>
                        <li>Deliver requested services, such as digital marketing audits or software training.</li>
                        <li>Send important library/service updates or policy changes.</li>
                        <li>Maintain professional communication regarding project milestones.</li>
                    </ul>

                    <h3>3. Data Security</h3>
                    <p>
                        We implement strict security measures to ensure the safety of your personal information.
                        <strong>Data Intelligence services:</strong> We may act as a data processor for the data you provide to us to manage, structure, or host. We will only process this data in accordance with your explicit instructions and legal requirements. We do not sell, trade, or rent your personal identification information to others.
                    </p>

                    <h3>4. Third-Party Services</h3>
                    <p>
                        We may use third-party service providers to help us operate our business and the website or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
                    </p>

                    <h3>5. Cookies</h3>
                    <p>
                        Our website may use &quot;cookies&quot; to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. Note that some parts of the site may not function properly if you do so.
                    </p>

                    <h3>6. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us via our <a href="/contact">Contact Page</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
