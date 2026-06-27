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
    'Get admission in UGC, AICTE, NCTE approved colleges. Free career counselling, hostel & food available. 1000+ students successfully admitted. Call 9576461623.',
}

export default function HomePage() {
  return (
    <>
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