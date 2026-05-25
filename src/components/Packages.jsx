import { SectionTitle } from './SectionTitle'

export function Packages({ items, copy }) {
  return (
    <section className="section" id="packages">
      <SectionTitle label={copy.label} title={copy.title} />
      <div className="package-grid">
        {items.map((item) => (
          <article key={item.id} className="package-card reveal">
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="package-content">
              <span className="badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p className="meta">{item.duration} • {item.price}</p>
              <ul>{item.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              <button type="button" className="btn btn-ghost">{item.cta}</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
