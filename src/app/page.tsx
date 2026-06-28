import type { Metadata } from 'next'
import HeroSection from '@/app/hero/page'
import AboutPage from './about/page'
import Founder from './about/foundermessage/page'
import CoursesPage from './courses/page'
import AdmissionProcessPage from './admission-process/page'
import OurServices from '@/app/ourservices/page'
import GalleryPage from './galary/page'
import LegalPage from './legal/page'
import ContactPage from './contact/page'
import TieUpCollegePage from './tieupcollege/page'

export const metadata: Metadata = {
  title: 'Smart Edge Education Consultancy — Admission & Career Guidance Bihar',
  description:
    'Get admission in UGC, AICTE, NCTE, PCI, BCI approved colleges. Free career counselling, hostel & food available for selected courses. 20,000+ students successfully admitted across India. Call +91 9576461623.',
  alternates: {
    canonical: 'https://www.smartedgeeducationconsultancy.com',
  },
}

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Smart Edge Education Consultancy',
  alternateName: 'Smart Edge Consultancy',
  url: 'https://www.smartedgeeducationconsultancy.com',
  logo: 'https://www.smartedgeeducationconsultancy.com/logo.png',
  image: 'https://www.smartedgeeducationconsultancy.com/logo.png',
  description:
    'Smart Edge Education Consultancy is a trusted college admission guidance centre in Patna, Bihar. We help students get admitted to UGC, AICTE, NCTE, PCI and BCI approved colleges across India for Engineering, Medical, Management, Nursing, Pharmacy, Law, Distance & Online courses.',
  telephone: '+919576461623',
  email: 'info@smartedgeeducationconsultancy.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.5941,
    longitude: 85.1376,
  },
  areaServed: [
    { '@type': 'State', name: 'Bihar' },
    { '@type': 'State', name: 'Jharkhand' },
    { '@type': 'Country', name: 'India' },
  ],
  sameAs: [
    `https://wa.me/919576461623`,
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Admission Guidance Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Engineering Admission Guidance (B.Tech / Polytechnic)',
          description: 'Admission assistance for AICTE approved engineering colleges across India.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medical & Nursing Admission Guidance',
          description: 'Admission guidance for NCTE & PCI approved medical, nursing and pharmacy colleges.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Management Admission Guidance (MBA / BBA / BCA / MCA)',
          description: 'Expert counselling for UGC approved management and commerce colleges.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Law Admission Guidance (LLB / LLM)',
          description: 'Admission support for BCI approved law colleges across India.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Distance & Online Education Guidance',
          description: 'Guidance for UGC-DEB approved distance and online degree programmes.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Smart Edge Education Consultancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smart Edge Education Consultancy is a college admission guidance centre based in Patna, Bihar. We help students across India get admitted to UGC, AICTE, NCTE, PCI and BCI approved colleges for engineering, medical, management, law, pharmacy, nursing, distance and online courses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the college admission guidance free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide free initial career counselling. Our team guides you through the entire admission process at no hidden cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which courses can I get admission guidance for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide admission guidance for B.Tech, M.Tech, MBBS, BDS, BBA, MBA, BCA, MCA, LLB, LLM, B.Pharm, D.Pharm, B.Sc Nursing, ITI, Polytechnic, Distance Education, and Online Degree programmes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the colleges recommended by Smart Edge verified and approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We only recommend colleges approved by UGC, AICTE, NCTE, PCI, or BCI. All admissions are 100% genuine with verified universities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I contact Smart Edge Education Consultancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach us by calling or WhatsApp at +91 9576461623, or visit our office in Patna, Bihar. We are open Monday to Saturday, 9 AM to 6 PM.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.smartedgeeducationconsultancy.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Courses',
      item: 'https://www.smartedgeeducationconsultancy.com/courses',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Admission Process',
      item: 'https://www.smartedgeeducationconsultancy.com/admission-process',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Contact',
      item: 'https://www.smartedgeeducationconsultancy.com/contact',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Page Sections ── */}
      <HeroSection />
      <AboutPage />
      <Founder />
      <CoursesPage />
      <TieUpCollegePage />
      <AdmissionProcessPage />
      <OurServices />
      <GalleryPage />
      <ContactPage />
    </>
  )
}