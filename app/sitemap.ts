import type { MetadataRoute } from 'next';

// Required for static export (`output: 'export'`) — tells Next.js the sitemap
// should be rendered once at build time rather than on-request.
export const dynamic = 'force-static';

const SITE_URL = 'https://aadarshrauniyar.com.np';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/work/student-analytics/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/work/ir-connect/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/work/lead-management/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
