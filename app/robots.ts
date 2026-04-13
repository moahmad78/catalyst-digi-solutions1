import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://catalystdigi.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/tmp/', '/api/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
