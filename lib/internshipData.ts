import { Code, Palette, Share2, Terminal, Database, Layout, Smartphone, Search, BarChart, PenTool, Monitor, Server, Briefcase } from "lucide-react";

export const internshipData = [
    {
        id: "web-development",
        title: "Full Stack Web Development",
        duration: "8 Weeks",
        level: "Beginner to Advanced",
        icon: Code,
        description: "Master the MERN stack and build scalable web applications. From HTML/CSS to React, Next.js, and Node.js backend integration.",
        tools: [
            { name: "React.js", icon: Code },
            { name: "Next.js", icon: Terminal },
            { name: "Node.js", icon: Database },
            { name: "Tailwind", icon: Layout },
            { name: "MongoDB", icon: Database },
            { name: "Git/GitHub", icon: Terminal },
        ],
        syllabus: [
            {
                stage: "Stage 1: Foundation (Weeks 1-2)",
                topics: [
                    "HTML5 Semantic Structure & SEO",
                    "Advanced CSS3, Flexbox & Grid",
                    "JavaScript ES6+ Fundamentals",
                    "Responsive Design Principles",
                ],
            },
            {
                stage: "Stage 2: Frontend Mastery (Weeks 3-4)",
                topics: [
                    "React.js Components, State & Props",
                    "Hooks (useState, useEffect, useContext)",
                    "Routing with React Router / Next.js",
                    "Styling with Tailwind CSS",
                ],
            },
            {
                stage: "Stage 3: Backend & API (Weeks 5-6)",
                topics: [
                    "Node.js & Express Server Setup",
                    "REST API Architecture",
                    "MongoDB / SQL Database Connectivity",
                    "Authentication & Authorization",
                ],
            },
            {
                stage: "Stage 4: Live Project (Weeks 7-8)",
                topics: [
                    "Project Planning & System Design",
                    "Full Stack Implementation",
                    "Deployment to Vercel/Netlify",
                    "Code Review & Optimization",
                ],
            },
        ],
        projects: [
            "E-Commerce Platform with Cart",
            "Real-time Chat Application",
            "CRM Dashboard",
            "Personal Portfolio Website",
        ],
        roles: [
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Engineer",
            "React Native Developer",
        ],
    },
    /*
    {
        id: "app-development",
        title: "App Development (Flutter/React Native)",
        duration: "8 Weeks",
        level: "Intermediate",
        icon: Smartphone,
        description: "Build cross-platform mobile apps for iOS and Android. Learn to create smooth, native-like experiences using Flutter or React Native.",
        tools: [
            { name: "Flutter", icon: Smartphone },
            { name: "React Native", icon: Code },
            { name: "Firebase", icon: Database },
            { name: "Android Studio", icon: Monitor },
            { name: "Dart/JS", icon: Terminal },
            { name: "Rest APIs", icon: Server },
        ],
        syllabus: [
            {
                stage: "Stage 1: Mobile UI Basics (Weeks 1-2)",
                topics: [
                    "Dart/JavaScript Fundamentals",
                    "Widget/Component Lifecycle",
                    "Layouts: Row, Column, Stack",
                    "Responsive UI for Mobile",
                ]
            },
            {
                stage: "Stage 2: State & Logic (Weeks 3-4)",
                topics: [
                    "State Management (Provider/Redux)",
                    "Navigation & Routing",
                    "User Input & Forms",
                    "Asynchronous Programming",
                ]
            },
            {
                stage: "Stage 3: Backend Integration (Weeks 5-6)",
                topics: [
                    "Firebase Auth & Firestore",
                    "Consuming REST APIs",
                    "Local Storage & Caching",
                    "Push Notifications",
                ]
            },
            {
                stage: "Stage 4: App Deployment (Weeks 7-8)",
                topics: [
                    "Building Production APK/IPA",
                    "Play Store/App Store Guidelines",
                    "Performance Optimization",
                    "Final Project Showcase",
                ]
            }
        ],
        projects: [
            "Food Delivery App",
            "Booking/Reservation System",
            "Social Media Clone",
            "Expense Tracker",
        ],
        roles: [
            "Mobile App Developer",
            "Flutter Developer",
            "React Native Developer",
            "iOS/Android Developer",
        ]
    },
    */
    /*
    {
        id: "graphic-designing",
        title: "Graphic & UI/UX Design",
        duration: "6 Weeks",
        level: "Beginner to Intermediate",
        icon: Palette,
        description: "Unleash your creativity. Learn to design stunning visuals, brand identities, and user interfaces using industry-standard tools.",
        tools: [
            { name: "Photoshop", icon: PenTool },
            { name: "Illustrator", icon: PenTool },
            { name: "Figma", icon: Layout },
            { name: "Canva Pro", icon: Layout },
            { name: "InDesign", icon: Layout },
        ],
        syllabus: [
            {
                stage: "Stage 1: Design Fundamentals (Weeks 1-2)",
                topics: [
                    "Color Theory & Typography",
                    "Layout & Composition Rules",
                    "Introduction to Adobe Photoshop",
                    "Photo Editing & Manipulation",
                ],
            },
            {
                stage: "Stage 2: Vector Art & Branding (Weeks 3-4)",
                topics: [
                    "Adobe Illustrator Mastery",
                    "Logo Design & Brand Identity",
                    "Vector Illustration Techniques",
                    "Creating Marketing Collateral",
                ],
            },
            {
                stage: "Stage 3: UI/UX & Live Project (Weeks 5-6)",
                topics: [
                    "Introduction to Figma for UI Design",
                    "Wireframing & Prototyping",
                    "Social Media Campaign Design",
                    "Final Portfolio Creation",
                ],
            },
        ],
        projects: [
            "Complete Brand Identity Kit",
            "Mobile App UI Prototype",
            "Social Media Marketing Creatives",
            "Product Packaging Design",
        ],
        roles: [
            "Graphic Designer",
            "UI/UX Designer",
            "Creative Director",
            "Brand Strategist",
        ],
    },
    */
    {
        id: "digital-marketing",
        title: "Digital Marketing & Strategy",
        duration: "6 Weeks",
        level: "Beginner to Professional",
        icon: Share2,
        description: "Become a growth expert. Learn SEO, PPC, Social Media Marketing, and Analytics to drive real business results.",
        tools: [
            { name: "Google Ads", icon: Search },
            { name: "Google Analytics", icon: BarChart },
            { name: "Meta Ads", icon: Smartphone },
            { name: "SEMrush/Ahrefs", icon: Search },
            { name: "Mailchimp", icon: Share2 },
        ],
        syllabus: [
            {
                stage: "Stage 1: SEO & Content (Weeks 1-2)",
                topics: [
                    "Keyword Research Strategy",
                    "On-Page & Off-Page SEO",
                    "Content Marketing & Copywriting",
                    "Website Audit & Optimization",
                ],
            },
            {
                stage: "Stage 2: Paid Advertising (Weeks 3-4)",
                topics: [
                    "Google Ads (Search & Display)",
                    "Meta (Facebook/Instagram) Ads Manager",
                    "Audience Targeting & Retargeting",
                    "Budgeting & Bidding Strategies",
                ],
            },
            {
                stage: "Stage 3: Analytics & Strategy (Weeks 5-6)",
                topics: [
                    "Google Analytics 4 Setup",
                    "Conversion Interest Tracking",
                    "Social Media Growth Strategy",
                    "Live Client Campaign Management",
                ],
            },
        ],
        projects: [
            "Live SEO Audit Report",
            "Live Ad Campaign Setup",
            "Social Media Content Calendar",
            "Email Marketing Automations",
        ],
        roles: [
            "Digital Marketing Executive",
            "SEO Specialist",
            "Social Media Manager",
            "Performance Marketer",
        ],
    },
    {
        id: "virtual-office",
        title: "Virtual Office Operations",
        duration: "4 Weeks",
        level: "Beginner",
        icon: Briefcase,
        description: "Master remote work operations. Learn to manage virtual teams, handle digital documentation, and use modern productivity tools effectively.",
        tools: [
            { name: "Google Workspace", icon: Layout },
            { name: "Zoom/Teams", icon: Share2 },
            { name: "Trello/Asana", icon: Layout },
            { name: "Slack", icon: Share2 },
            { name: "Excel (Adv)", icon: Database },
        ],
        syllabus: [
            {
                stage: "Stage 1: Remote Work Fundamentals (Week 1)",
                topics: [
                    "Setting up a Virtual Office Env",
                    "Professional Communication Etiquette",
                    "Time Management & Scheduling",
                    "Digital File Organization",
                ],
            },
            {
                stage: "Stage 2: Productivity Tools (Week 2)",
                topics: [
                    "Mastering Google Workspace (Docs, Sheets)",
                    "Project Management with Trello",
                    "Calendar Management & Booking",
                    "Email Management Strategies",
                ],
            },
            {
                stage: "Stage 3: Virtual Assistance (Weeks 3-4)",
                topics: [
                    "Data Entry & Management",
                    "Handling Client Currespondence",
                    "Basic Bookkeeping / Invoicing",
                    "Remote Team Collaboration",
                ],
            },
        ],
        projects: [
            "Virtual Event Planning",
            "Remote Team Management Sim",
            "Client Onboarding Process",
            "Database Organization",
        ],
        roles: [
            "Virtual Assistant",
            "Remote Office Manager",
            "Executive Assistant",
            "Data Entry Specialist",
        ],
    },
    {
        id: "it-support",
        title: "IT Support & Software Ops",
        duration: "6 Weeks",
        level: "Beginner to Intermediate",
        icon: Monitor,
        description: "Launch your IT career. Learn practical software troubleshooting, system administration, and helpdesk operations.",
        tools: [
            { name: "Windows/Linux", icon: Terminal },
            { name: "Active Directory", icon: Database },
            { name: "JIRA Service Desk", icon: Layout },
            { name: "Postman/APIs", icon: Share2 },
            { name: "Office 365 Admin", icon: Database },
        ],
        syllabus: [
            {
                stage: "Stage 1: IT Fundamentals (Weeks 1-2)",
                topics: [
                    "Computer Hardware & OS Basics",
                    "Network Troubleshooting (DNS, TCP/IP)",
                    "Software Installation & Config",
                    "Security Best Practices",
                ],
            },
            {
                stage: "Stage 2: System Administration (Weeks 3-4)",
                topics: [
                    "User Management (Active Directory)",
                    "Office 365 Administration",
                    "Backup & Recovery Strategies",
                    "Remote Support Tools",
                ],
            },
            {
                stage: "Stage 3: Helpdesk Operations (Weeks 5-6)",
                topics: [
                    "Ticket Management with JIRA",
                    "ITIL Framework Basics",
                    "Customer Service Soft Skills",
                    "Live Issue Resolution",
                ],
            },
        ],
        projects: [
            "Corporate Network Setup Plan",
            "Helpdesk Ticketing Workflow",
            "System Maintenance & Recovery",
            "Automated Backup Solution",
        ],
        roles: [
            "IT Support Specialist",
            "Helpdesk Technician",
            "System Administrator",
            "Technical Support Engineer",
        ],
    },
];
