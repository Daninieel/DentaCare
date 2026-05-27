import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span>DC</span>
              <strong>DentaCare</strong>
            </div>
            <p className="footer__brand-text">
              Serving Filipino families since 2009. We are committed to honest, caring dental service in a clinic that feels safe and welcoming for everyone.
            </p>
            <div className="footer__socials">
              {['Facebook', 'Instagram', 'Twitter'].map(s => (
                <a key={s} href="#" className="footer__social" aria-label={s}>{s[0]}</a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {['Home', 'Services', 'About', 'Doctors', 'Testimonials'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__links">
              {['Teeth Cleaning', 'Teeth Whitening', 'Dental Braces', 'Root Canal', 'Dental Crowns', 'Implants'].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-icon">Loc</span>
                <span>123 Kalayaan Avenue<br />Makati City, Metro Manila 1226</span>
              </li>
              <li>
                <span className="footer__contact-icon">Tel</span>
                <a href="tel:+639171234567">+63 (917) 123-4567</a>
              </li>
              <li>
                <span className="footer__contact-icon">Mail</span>
                <a href="mailto:info@dentacare.ph">info@dentacare.ph</a>
              </li>
              <li>
                <span className="footer__contact-icon">Hrs</span>
                <span>Mon–Fri: 8AM–6PM<br />Sat: 9AM–3PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} DentaCare. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
