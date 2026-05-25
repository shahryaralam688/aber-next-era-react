export function Footer({ copy }) {
  return (
    <footer className="footer">
      <div>
        <h3>{copy.aboutTitle}</h3>
        <p>{copy.aboutText}</p>
      </div>
      <div>
        <h4>{copy.quickLinksTitle}</h4>
        {copy.quickLinks.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>
      <div>
        <h4>{copy.legalTitle}</h4>
        {copy.legalLinks.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>
      <div>
        <h4>{copy.newsletterTitle}</h4>
        <div className="newsletter">
          <input placeholder={copy.newsletterPlaceholder} aria-label={copy.newsletterPlaceholder} />
          <button type="button">{copy.newsletterButton}</button>
        </div>
      </div>
    </footer>
  )
}
