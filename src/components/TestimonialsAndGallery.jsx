import { SectionTitle } from './SectionTitle'

const gallery = [
  '/assets/images/img_172_jeddah-summer-2.jpg',
  '/assets/images/img_271_yanbu.jpg',
  '/assets/images/img_324_redsea-summer.jpg',
  '/assets/images/img_334_hail-hero-banner.jpg',
  '/assets/images/img_347_Taif-banner-new.jpg',
  '/assets/images/img_329_Albaha-banner.jpg'
]

export function TestimonialsAndGallery({ testimonials, sectionCopy }) {
  return (
    <section className="section">
      <SectionTitle label={sectionCopy.testimonials.label} title={sectionCopy.testimonials.title} />
      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <article key={t.id} className="panel reveal">
            <p>"{t.quote}"</p>
            <h4>{t.name}</h4>
            <span>{t.segment}</span>
          </article>
        ))}
      </div>

      <SectionTitle label={sectionCopy.gallery.label} title={sectionCopy.gallery.title} />
      <div className="gallery-grid">
        {gallery.map((img) => <img key={img} src={img} loading="lazy" alt={sectionCopy.gallery.imageAlt} className="reveal" />)}
      </div>
    </section>
  )
}
