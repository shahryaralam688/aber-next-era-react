import { useState } from 'react'
import { SectionTitle } from './SectionTitle'

export function FaqAndLead({ copy, sectionCopy, waNumber }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="contact">
      <SectionTitle label={sectionCopy.label} title={sectionCopy.title} />
      <div className="faq-list">
        {copy.faqs.map((f, i) => (
          <article key={f.q} className="faq-item reveal">
            <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{f.q}</button>
            {open === i && <p>{f.a}</p>}
          </article>
        ))}
      </div>

      <div className="lead-strip reveal">
        <div>
          <h3>{copy.heading}</h3>
          <p>{copy.description}</p>
        </div>
        <form className="lead-form">
          <input placeholder={copy.form.fullName} aria-label={copy.form.fullName} />
          <input placeholder={copy.form.phone} aria-label={copy.form.phone} />
          <input placeholder={copy.form.destination} aria-label={copy.form.destination} />
          <button className="btn btn-solid" type="button">{copy.form.submit}</button>
        </form>
        <a className="btn btn-ghost" href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer">{copy.form.chat}</a>
      </div>
    </section>
  )
}
