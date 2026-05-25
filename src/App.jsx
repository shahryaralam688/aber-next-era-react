import { useEffect, useMemo, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
import { getLocaleContent, SUPPORTED_LANGUAGES, WA_NUMBER } from './content/siteContent'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    const savedLanguage = window.localStorage.getItem('aber-site-language')
    return SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : 'en'
  })

  const localeContent = useMemo(() => getLocaleContent(language), [language])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('aber-site-language', language)
    }
  }, [language])

  useEffect(() => {
    document.documentElement.lang = localeContent.meta.lang
    document.documentElement.dir = localeContent.meta.dir
    document.title = localeContent.meta.title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', localeContent.meta.description)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', localeContent.meta.description)
    }
  }, [localeContent])

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Aber Travel & Tourism Agency',
      areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Gulf Region'],
      availableLanguage: SUPPORTED_LANGUAGES,
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
      <Header copy={localeContent.header} language={language} onLanguageChange={setLanguage} />
      <Hero copy={localeContent.hero} />
      <Destinations items={localeContent.destinations} copy={localeContent.sections.destinations} />
      <Offers items={localeContent.offers} copy={localeContent.sections.offers} offerCodeLabel={localeContent.shared.offerCodeLabel} />
      <Experiences items={localeContent.experiences} copy={localeContent.sections.experiences} />
      <TrustAndWhy copy={localeContent.trust} />
      <Packages items={localeContent.packages} copy={localeContent.sections.packages} />
      <TestimonialsAndGallery
        testimonials={localeContent.testimonials}
        sectionCopy={{ testimonials: localeContent.sections.testimonials, gallery: localeContent.sections.gallery }}
      />
      <FaqAndLead copy={localeContent.faqLead} sectionCopy={localeContent.sections.faq} waNumber={WA_NUMBER} />
      <Footer copy={localeContent.footer} />
    </div>
  )
}

export default App
