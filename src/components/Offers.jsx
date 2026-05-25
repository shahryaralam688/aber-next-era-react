import { useState } from 'react'
import { SectionTitle } from './SectionTitle'

export function Offers({ items, copy, offerCodeLabel }) {
  const [index, setIndex] = useState(0)
  const active = items[index]

  return (
    <section className="section offer-wrap">
      <SectionTitle label={copy.label} title={copy.title} />
      <article className="offer-card reveal" style={{ backgroundImage: `linear-gradient(115deg, rgba(11,16,24,.88), rgba(11,16,24,.2)), url(${active.image})` }}>
        <div>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <span className="offer-code">{offerCodeLabel} {active.code}</span>
        </div>
      </article>
      <div className="dots">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`${copy.dotAriaLabel} ${i + 1}`}
            className={i === index ? 'dot active' : 'dot'}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
