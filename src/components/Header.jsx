import { useState } from 'react'

const menuBlocks = {
  Destinations: ['Riyadh', 'Jeddah', 'AlUla', 'Makkah', 'Madinah', 'Tabuk'],
  Packages: ['Family Deals', 'Luxury Escapes', 'Corporate Trips', 'Weekend Plans'],
  'Umrah & Religious Tours': ['Umrah Essentials', 'Group Support', 'Scholars Access', 'Transport Help'],
  Experiences: ['Desert', 'Heritage', 'Beach', 'Adventure'],
  About: ['Our Story', 'Service Promise', 'Travel Advisors', 'Partners'],
  Contact: ['Call Us', 'WhatsApp', 'Email', 'Visit Office']
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header" id="top">
      <a href="#top" className="logo" aria-label="Aber Travel home">
        <span className="logo-dot" /> Aber Travel & Tourism Agency
      </a>
      <nav className="nav" aria-label="Primary">
        {Object.keys(menuBlocks).map((item) => (
          <button key={item} className="nav-link" onMouseEnter={() => setOpen(item)} onFocus={() => setOpen(item)}>
            {item}
          </button>
        ))}
      </nav>
      <button className="btn btn-solid">Plan My Trip</button>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(open ? false : 'Destinations')}>Menu</button>

      {open && (
        <div className="mega" onMouseLeave={() => setOpen(false)}>
          <p className="mega-title">{open}</p>
          <div className="mega-grid">
            {menuBlocks[open].map((item) => (
              <a key={item} href="#" className="mega-item">{item}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
