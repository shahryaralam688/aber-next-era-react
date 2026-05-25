import { useState } from 'react'
import { SectionTitle } from './SectionTitle'

export function Offers({ items }) {
  const [index, setIndex] = useState(0)
  const active = items[index]

  return (
    <section className="section offer-wrap">
      <SectionTitle label="Seasonal Campaigns" title="Limited-time offers designed for smart travelers" />
      <article className="offer-card reveal" style={{ backgroundImage: `linear-gradient(115deg, rgba(11,16,24,.88), rgba(11,16,24,.2)), url(${active.image})` }}>
        <div>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <span className="offer-code">Use code: {active.code}</span>
        </div>
      </article>
      <div className="dots">
        {items.map((item, i) => <button key={item.id} aria-label={item.title} className={i === index ? 'dot active' : 'dot'} onClick={() => setIndex(i)} />)}
      </div>
    </section>
  )
}
