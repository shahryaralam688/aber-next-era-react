import { SectionTitle } from './SectionTitle'

export function Experiences({ items, copy }) {
  return (
    <section className="section">
      <SectionTitle label={copy.label} title={copy.title} />
      <div className="experience-row">
        {items.map((item) => (
          <article key={item.name} className="experience reveal" style={{ backgroundImage: `linear-gradient(180deg, rgba(12,18,26,.08), rgba(12,18,26,.82)), url(${item.image})` }}>
            <h3>{item.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
