import { SectionTitle } from './SectionTitle'

const usps = [
  { k: '24h', v: 'Advisor Response' },
  { k: '500+', v: 'Trips Designed' },
  { k: '4.9/5', v: 'Client Satisfaction' },
  { k: '7', v: 'Gulf Hubs Covered' }
]

export function TrustAndWhy() {
  return (
    <section className="section two-col" id="umrah">
      <article className="panel reveal">
        <SectionTitle label="Umrah & Hajj Support" title="Faith-focused assistance with complete peace of mind" />
        <ul>
          <li>Document and visa guidance from dedicated specialists</li>
          <li>Women, elderly, and family-friendly travel options</li>
          <li>Clear transport, hotel, and support-line coordination</li>
        </ul>
        <button className="btn btn-solid">Speak to Umrah Desk</button>
      </article>
      <article className="panel reveal">
        <SectionTitle label="Why Choose Aber" title="Designed for trust, speed, and premium outcomes" />
        <div className="metric-grid">
          {usps.map((u) => <div key={u.v}><strong>{u.k}</strong><span>{u.v}</span></div>)}
        </div>
      </article>
    </section>
  )
}
