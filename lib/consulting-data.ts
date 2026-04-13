import { ShoppingBag, Factory, Users } from "lucide-react";

export const consultingIndustries = [
    {
        slug: "e-commerce-optimization",
        title: "E-commerce Optimization",
        icon: ShoppingBag,
        description: "Scale your online store with high-performance architectures, automated inventory management, and conversion-focused UX.",
        heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80",
        stats: [
            { label: "Avg. ROI Increase", value: "300%" },
            { label: "Cart Abandonment Drop", value: "-40%" },
        ],
        details: {
            headline: "Dominate the Digital Shelf",
            subheadline: "From supply chain logic to front-end magic, we build e-commerce ecosystems that sell.",
            challenges: [
                "Slow site speed killing conversions.",
                "Disjointed inventory across channels.",
                "Poor mobile user experience.",
            ],
            solutions: [
                {
                    title: "Headless Commerce Architecture",
                    desc: "Decoupling front-end from back-end for lightning-fast load times and infinite design flexibility using Next.js and Shopify/Magento."
                },
                {
                    title: "Automated Supply Chain",
                    desc: "Custom scripts to sync inventory in real-time between your warehouse, website, and marketplaces like Amazon."
                },
                {
                    title: "Conversion Rate Optimization (CRO)",
                    desc: "Data-driven UX design aimed specifically at reducing friction and increasing average order value."
                }
            ]
        }
    },
    {
        slug: "service-agency-scaling",
        title: "Service Agency Scaling",
        icon: Users,
        description: "Streamline client acquisition and delivery with custom portals, automated workflows, and CRM integrations.",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        stats: [
            { label: "Admin Time Saved", value: "20hrs/wk" },
            { label: "Client Retention", value: "95%" },
        ],
        details: {
            headline: "Scale Your Agency, Not Your Headcount",
            subheadline: "Automate the busy work so you can focus on strategy and client relationships.",
            challenges: [
                "Manual client onboarding takes too long.",
                "Project scope creep and lost communications.",
                "Inconsistent reporting to clients.",
            ],
            solutions: [
                {
                    title: "Custom Client Portals",
                    desc: "Give clients a branded dashboard to view project status, approve assets, and pay invoices—all without emailing you."
                },
                {
                    title: "Lead Gen Automation",
                    desc: "End-to-end funnels that capture leads, nurture them via email/SMS, and book appointments on your calendar automatically."
                },
                {
                    title: "Workflow Engineering",
                    desc: "Connecting tools like Trello, Slack, and HubSpot to ensure tasks move seamlessly from 'To Do' to 'Done'."
                }
            ]
        }
    },
    {
        slug: "manufacturing-digitization",
        title: "Manufacturing Digitization",
        icon: Factory,
        description: "Modernize your factory floor with IoT monitoring, digital record keeping, and predictive maintenance systems.",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        stats: [
            { label: "Downtime Reduction", value: "25%" },
            { label: "Paperwork Eliminated", value: "100%" },
        ],
        details: {
            headline: "Industry 4.0 for Your Factory",
            subheadline: "Bridge the gap between heavy machinery and smart digital systems.",
            challenges: [
                "Reliance on physical paper logs.",
                "Unexpected implementation downtime.",
                "Lack of real-time production visibility.",
            ],
            solutions: [
                {
                    title: "IoT & Sensor Integration",
                    desc: "Real-time dashboards showing machine health, temperature, and output rates to predict failures before they happen."
                },
                {
                    title: "ERPs & Inventory Bridges",
                    desc: "Custom middleware to connect legacy manufacturing software with modern accounting and sales tools."
                },
                {
                    title: "Digital Logbooks",
                    desc: "Tablet-based interfaces for floor workers to input data instantly, replacing clipboards and manual entry errors."
                }
            ]
        }
    }
];
