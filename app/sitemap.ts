import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://catalystdigi.com'

    const staticRoutes = [
        '',
        '/about',
        '/portfolio',
        '/training',
        '/contact',
        '/faq',
        '/legal/faq',
        '/legal/privacy-policy',
        '/legal/refund-policy',
        '/legal/terms',
    ]

    const solutionsRoutes = [
        '/solutions/app-development',
        '/solutions/digital-marketing',
        '/solutions/digital-transformation',
        '/solutions/record-management',
    ]

    const trainingRoutes = [
        '/training/digital-marketing',
        '/training/software-training',
        '/training/virtual-office-trainings',
    ]

    const allRoutes = [...staticRoutes, ...solutionsRoutes, ...trainingRoutes].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : route.startsWith('/solutions') || route.startsWith('/training') ? 0.9 : 0.7,
    }))

    return allRoutes
}
