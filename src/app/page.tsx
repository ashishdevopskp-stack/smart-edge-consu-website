// app/page.tsx
import type { Metadata } from 'next'
import HeroSection from '@/app/hero/page'
import OurServices from '@/app/ourservices/page'
import LeadForm from '@/app/leadform/get-free-counselling-page'

import { PocketKnife } from 'lucide-react'
import AboutPage from './about/page'
import AdmissionProcessPage from './admission-process/page'
import ContactPage from './contact/page'
import Footer from './footer/page'
import CoursesPage from './courses/page'
import Navbar from './Navbar'

export const metadata: Metadata = {
  title: 'Smart Edge Education Consultancy — Admission & Career Guidance Bihar',
  description:
    'Get admission in UGC, AICTE, NCTE approved colleges. Free career counselling, hostel & food available. 1000+ students successfully admitted. Call 9576461623.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPage />
      <CoursesPage />
      <AdmissionProcessPage />
      <OurServices />
      <LeadForm />
      <ContactPage />
      <Footer />
      
    </>
  )
}