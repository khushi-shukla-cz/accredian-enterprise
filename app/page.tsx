import Hero from '@/components/sections/Hero'
import TrustedCompanies from '@/components/sections/TrustedCompanies'
import Features from '@/components/sections/Features'
import ProductShowcase from '@/components/sections/ProductShowcase'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import LeadForm from '@/components/sections/LeadForm'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <LeadForm />
      <CTABanner />
    </>
  )
}
