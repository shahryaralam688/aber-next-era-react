import { useState } from 'react'

const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' }
]

export function Header({ copy, language, onLanguageChange }) {
  const [open, setOpen] = useState(false)
  const firstMenuId = copy.navItems[0]?.id || false
  const activeMenu = copy.navItems.find((item) => item.id === open)

  return (
    <header className="header" id="top">
      <a href="#top" className="logo" aria-label={copy.logoAria}>
        <span className="logo-dot" /> {copy.logoText}
      </a>

      <nav className="nav" aria-label={copy.primaryNavAria}>
        {copy.navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="nav-link"
            onMouseEnter={() => setOpen(item.id)}
            onFocus={() => setOpen(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <div className="lang-switch" role="group" aria-label={copy.languageSwitcherLabel}>
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              key={option.code}
              type="button"
              className={language === option.code ? 'lang-btn active' : 'lang-btn'}
              aria-pressed={language === option.code}
              onClick={() => onLanguageChange(option.code)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <button type="button" className="btn btn-solid">{copy.planButton}</button>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label={copy.menuToggleAria}
        onClick={() => setOpen(open ? false : firstMenuId)}
      >
        {copy.menuToggleText}
      </button>

      {activeMenu && (
        <div className="mega" onMouseLeave={() => setOpen(false)}>
          <p className="mega-title">{activeMenu.label}</p>
          <div className="mega-grid">
            {activeMenu.links.map((item) => (
              <a key={item} href="#" className="mega-item">{item}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
