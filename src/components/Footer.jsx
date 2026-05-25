export function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Aber Travel & Tourism Agency</h3>
        <p>Luxury, trust-first travel planning for Gulf destinations.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <a href="#destinations">Destinations</a><a href="#packages">Packages</a><a href="#umrah">Umrah</a><a href="#contact">Contact</a>
      </div>
      <div>
        <h4>Legal</h4>
        <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Licensing</a>
      </div>
      <div>
        <h4>Newsletter</h4>
        <div className="newsletter"><input placeholder="Email address" aria-label="Email address" /><button>Join</button></div>
      </div>
    </footer>
  )
}
