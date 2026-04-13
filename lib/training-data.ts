
export interface TrainingModule {
    title: string;
    desc: string;
}

export interface TrainingProgram {
    id: string;
    title: string;
    description: string;
    duration: string;
    icon: string;
    color: string;
    heroImage: string;
    modules: TrainingModule[];
    stack: { name: string; icon: string }[];
    careerFocus: string;
}

export const trainingPrograms: TrainingProgram[] = [
    {
        id: "virtual-office-trainings",
        title: "Virtual Office Trainings",
        description: "Equip yourself with the essential tools for the modern remote workplace. Master communication, project management, and productivity suites.",
        duration: "1 - 2 Months",
        icon: "Briefcase",
        color: "text-green-500",
        heroImage: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?q=80&w=2670&auto=format&fit=crop",
        modules: [
            { title: "Professional Communication", desc: "Email etiquette, Slack/Teams mastery, Video conferencing" },
            { title: "Office Suites", desc: "Advanced Excel, Google Workspace, PowerPoint presentations" },
            { title: "Project Management", desc: "Trello, Asana, Jira basics for task tracking" },
            { title: "Remote Productivity", desc: "Time management, Deep work techniques, Digital organization" },
            { title: "Cloud Collaboration", desc: "File sharing, Version control awareness, Security basics" },
            { title: "Client Interaction", desc: "Handling requirements, Professional reporting, feedback loops" }
        ],
        stack: [
            { name: "Office", icon: "Layout" },
            { name: "Communication", icon: "MessageSquare" },
            { name: "Email", icon: "Mail" },
            { name: "Remote", icon: "Smartphone" }
        ],
        careerFocus: "Support real administrative tasks, manage project boards, and facilitate team operations in a simulated office environment."
    },
    {
        id: "software-training",
        title: "Software Training",
        description: "Master Full Stack Development with React, Next.js, Node.js, and Modern Web Architecture. Build scalable applications from scratch.",
        duration: "3 - 6 Months",
        icon: "Code",
        color: "text-blue-500",
        heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop",
        modules: [
            { title: "Frontend Fundamentals", desc: "HTML5, CSS3, JavaScript (ES6+), Responsive Design" },
            { title: "React Ecosystem", desc: "Hooks, Context API, Redux Toolkit, React Router" },
            { title: "Next.js Framework", desc: "SSR, SSG, API Routes, App Router Architecture" },
            { title: "Backend Development", desc: "Node.js, Express, REST APIs, Authentication (JWT/NextAuth)" },
            { title: "Database Management", desc: "MongoDB, PostgreSQL, Prisma ORM" },
            { title: "DevOps & Deployment", desc: "Git, GitHub Actions, Vercel, Docker Basics" }
        ],
        stack: [
            { name: "React", icon: "Code" },
            { name: "Next.js", icon: "Globe" },
            { name: "Node.js", icon: "Server" },
            { name: "Database", icon: "Database" }
        ],
        careerFocus: "Build real-world SaaS applications, E-commerce platforms, and internal tools as part of a professional capstone project."
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing Training",
        description: "Become a complete Digital Marketer. Learn SEO, Social Media Strategy, Paid Ads, and Content Marketing to drive real business growth.",
        duration: "3 Months",
        icon: "Share2",
        color: "text-pink-500",
        heroImage: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2670&auto=format&fit=crop",
        modules: [
            { title: "SEO Mastery", desc: "On-Page, Off-Page, Technical SEO, Keyword Research" },
            { title: "Social Media Marketing", desc: "Instagram, LinkedIn, Twitter strategies & content planning" },
            { title: "Performance Marketing", desc: "Facebook Ads, Google Ads, ROI Optimization" },
            { title: "Content Strategy", desc: "Copywriting, Storytelling, Blog Management" },
            { title: "Analytics & Data", desc: "Google Analytics 4, Search Console, Data Studio" },
            { title: "Email & Automation", desc: "Drip campaigns, Lead nurturing, CRM integration" }
        ],
        stack: [
            { name: "SEO", icon: "Search" },
            { name: "Social", icon: "Share2" },
            { name: "Ads", icon: "Zap" },
            { name: "Analytics", icon: "Layout" }
        ],
        careerFocus: "Manage live simulated ad campaigns, optimize SEO for practice websites, and execute comprehensive content strategies."
    }
];
