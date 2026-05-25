import { SectionTitle } from './SectionTitle'

const experiences = [
  { name: 'Desert Adventures', image: '/assets/images/img_343_4-days-in-the-red-sea-banner.jpg' },
  { name: 'Heritage Discovery', image: '/assets/images/img_333_diriyah-hero-banner.jpg' },
  { name: 'Beach Leisure', image: '/assets/images/img_253_the-red-sea-luxury.jpg' },
  { name: 'Luxury Retreats', image: '/assets/images/img_357_our-habitas.jpg' },
  { name: 'Adventure Trails', image: '/assets/images/img_395_aseer-hiking-guide-banner.jpg' }
]

export function Experiences() {
  return (
    <section className="section">
      <SectionTitle label="Curated Experiences" title="Choose the style of travel that fits your pace" />
      <div className="experience-row">
        {experiences.map((item) => (
          <article key={item.name} className="experience reveal" style={{ backgroundImage: `linear-gradient(180deg, rgba(12,18,26,.08), rgba(12,18,26,.82)), url(${item.image})` }}>
            <h3>{item.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
