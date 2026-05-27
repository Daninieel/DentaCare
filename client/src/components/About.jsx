import './About.css';

const features = [
  { icon: '★', title: 'Recognized Excellence', desc: 'Named one of the top dental clinics in Metro Manila for five years running.' },
  { icon: '+', title: 'Modern Technology', desc: 'Digital X-rays, laser dentistry, and 3D imaging for accurate, efficient diagnoses.' },
  { icon: '♥', title: 'Gentle Approach', desc: 'We use calm techniques and sedation options so your visit is as comfortable as possible.' },
  { icon: '✓', title: 'Safety You Can Trust', desc: 'Strict sterilization and hygiene protocols — we take your health seriously at every visit.' }
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__img-placeholder">
            <span className="about__img-icon">DC</span>
            <p>DentaCare Clinic</p>
            <span>Est. 2009</span>
          </div>
          <div className="about__badge-card">
            <span className="about__badge-num">15+</span>
            <span className="about__badge-label">Years of Excellence</span>
          </div>
        </div>

        <div className="about__content">
          <span className="section-tag">About Us</span>
          <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px' }}>
            A Clinic That Feels<br />Like Home
          </h2>
          <p className="about__text">
            DentaCare has been part of our community since 2009. We started small — one clinic, one team, one goal:
            to give every Filipino family access to dental care that is honest, affordable, and genuinely kind.
          </p>
          <p className="about__text">
            Whether you're coming in for a simple cleaning or something more involved, you'll always be treated
            with patience and respect. We believe great dental care starts with making you feel safe.
          </p>

          <div className="about__features">
            {features.map(f => (
              <div key={f.title} className="about__feature">
                <span className="about__feature-icon">{f.icon}</span>
                <div>
                  <h4 className="about__feature-title">{f.title}</h4>
                  <p className="about__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
