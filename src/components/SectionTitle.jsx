export function SectionTitle({ label, title, align = 'left' }) {
  return (
    <div className={`section-title ${align === 'center' ? 'center' : ''}`}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
    </div>
  )
}
