import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import destinations from './data/destinations.json'
import packagesData from './data/packages.json'
import offers from './data/offers.json'
import testimonials from './data/testimonials.json'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Destinations } from './components/Destinations'
import { Offers } from './components/Offers'
import { Experiences } from './components/Experiences'
import { TrustAndWhy } from './components/TrustAndWhy'
import { Packages } from './components/Packages'
import { TestimonialsAndGallery } from './components/TestimonialsAndGallery'
import { FaqAndLead } from './components/FaqAndLead'
import { Footer } from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    document.documentElement.lang = 'en'

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Aber Travel & Tourism Agency',
      areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Gulf Region'],
      availableLanguage: ['en', 'ar', 'ur'],
      telephone: '+97126721320'
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    gsap.from('.hero-content > *', { y: 30, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' })
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 86%' },
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
    })

    return () => {
      document.head.removeChild(script)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="page-shell">
      <Header />
      <Hero />
      <Destinations items={destinations} />
      <Offers items={offers} />
      <Experiences />
      <TrustAndWhy />
      <Packages items={packagesData} />
      <TestimonialsAndGallery testimonials={testimonials} />
      <FaqAndLead />
      <Footer />
    </div>
  )
}

export default App
