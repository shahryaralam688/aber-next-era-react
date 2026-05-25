import { SectionTitle } from './SectionTitle'

export function Destinations({ items }) {
  return (
    <section className="section" id="destinations">
      <SectionTitle label="Featured Destinations" title="Handpicked places for every travel mood" />
      <div className="card-grid">
        {items.map((d) => (
          <article key={d.id} className="card image-card reveal">
            <img src={d.image} alt={d.name} loading="lazy" />
            <div className="card-body">
              <span className="badge">{d.tag}</span>
              <h3>{d.name}</h3>
              <p>{d.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
