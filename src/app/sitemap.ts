import type { MetadataRoute } from 'next'

const BASE = 'https://www.smartedgeeducationconsultancy.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/courses`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/ourservices`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/admission-process`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/admission-process/apply-now`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/admission-process/required-documents`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/admission-process/eligibility-faqs`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/about/foundermessage`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/about/ourmission`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/about/ourvision`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/about/whychooseus`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/about/ourexperience`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/tieupcollege`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/galary`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/legal`,
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}