import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import Navbar from './Navbar'
import Footer from './footer/page'
import FloatingButtons from './FloatingButtons'
import TopBanner from './TopBanner'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Smart Edge Education Consultancy — Admission & Career Guidance',
    template: '%s | Smart Edge Education Consultancy',
  },
  description:
    'UGC, AICTE, NCTE approved courses. Free career counselling, hostel & food for selected courses. 1000+ students admitted. Call 9576461623.',
  keywords: [
    'admission consultancy Bihar',
    'education consultancy Patna',
    'UGC AICTE approved colleges',
    'B.Tech admission Bihar',
    'BAMS BHMS admission',
    'distance education Bihar',
    'Smart Edge Education',
    'free education hostel food',
  ],
  authors: [{ name: 'Smart Edge Education Consultancy' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://smartedgeeducation.in',
    siteName: 'Smart Edge Education Consultancy',
    title: 'Smart Edge Education Consultancy — Your Complete Admission Solution',
    description:
      '50+ top college tie-ups. UGC, AICTE, NCTE approved courses. Free counselling. Call 9576461623',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Edge Education Consultancy',
    description: 'Free admission counselling. 1000+ students guided.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1565C0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <TopBanner/>
        <Navbar />

        <main style={{ paddingTop: 'var(--nav-h, 68px)', minHeight: '60vh' }}>
          {children}
        </main>

        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}