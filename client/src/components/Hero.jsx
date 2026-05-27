import './Hero.css';

const stats = [
  { value: '5,000+', label: 'Families Served' },
  { value: '15+', label: 'Years in Practice' },
  { value: '20+', label: 'Dental Specialists' },
  { value: '98%', label: 'Patient Satisfaction' }
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">Trusted by Filipino Families Since 2009</span>
          <h1 className="hero__title">
            Your Smile, Our<br />
            <span className="hero__title-accent">Greatest Reward</span>
          </h1>
          <p className="hero__subtitle">
            We know going to the dentist can feel intimidating. That's why our team listens first
            and treats with care — comfortable, honest dental service for every member of your family.
          </p>
          <div className="hero__actions">
            <a href="#book" className="btn-primary">Book Appointment</a>
            <a href="#services" className="btn-outline hero__btn-light">Our Services</a>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__card-icon">DC</div>
          <h3>Free Consultation</h3>
          <p>Come in, meet our team, and let's talk about your smile goals — no pressure, no rush.</p>
          <a href="#book" className="hero__card-link">Schedule Now</a>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-grid">
            {stats.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
