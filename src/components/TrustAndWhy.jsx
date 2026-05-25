import { SectionTitle } from './SectionTitle'

export function TrustAndWhy({ copy }) {
  return (
    <section className="section two-col" id="umrah">
      <article className="panel reveal">
        <SectionTitle label={copy.umrah.label} title={copy.umrah.title} />
        <ul>
          {copy.umrah.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <button type="button" className="btn btn-solid">{copy.umrah.cta}</button>
      </article>
      <article className="panel reveal">
        <SectionTitle label={copy.why.label} title={copy.why.title} />
        <div className="metric-grid">
          {copy.why.metrics.map((metric) => (
            <div key={`${metric.k}-${metric.v}`}>
              <strong>{metric.k}</strong>
              <span>{metric.v}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
