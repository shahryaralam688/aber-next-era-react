import { useState } from 'react'
import { SectionTitle } from './SectionTitle'

const faqs = [
  { q: 'Do you provide Umrah-only packages?', a: 'Yes. We offer tailored Umrah plans with hotel, transport, and advisory support.' },
  { q: 'Can I customize a family itinerary?', a: 'Absolutely. We adjust route pace, hotel class, and activities around your family profile.' },
  { q: 'Do you support corporate bookings?', a: 'Yes, including invoice-ready bookings, airport coordination, and fast rescheduling.' },
  { q: 'Is WhatsApp support available?', a: 'Yes, our advisor desk is active for quick package consultation and follow-up.' }
]

export function FaqAndLead() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="contact">
      <SectionTitle label="FAQ" title="Answers before you book" />
      <div className="faq-list">
        {faqs.map((f, i) => (
          <article key={f.q} className="faq-item reveal">
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{f.q}</button>
            {open === i && <p>{f.a}</p>}
          </article>
        ))}
      </div>

      <div className="lead-strip reveal">
        <div>
          <h3>Ready to plan your next journey?</h3>
          <p>Share your destination and dates. Our advisor replies with options in under 24 hours.</p>
        </div>
        <form className="lead-form">
          <input placeholder="Full Name" aria-label="Full Name" />
          <input placeholder="Phone / WhatsApp" aria-label="Phone" />
          <input placeholder="Preferred Destination" aria-label="Destination" />
          <button className="btn btn-solid" type="button">Submit Inquiry</button>
        </form>
        <a className="btn btn-ghost" href="https://wa.me/97126721320" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
    </section>
  )
}
