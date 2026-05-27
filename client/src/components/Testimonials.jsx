import './Testimonials.css';

const reviews = [
  {
    id: 1, name: 'Maria Cruz', role: 'Patient since 2018',
    rating: 5, initials: 'MC',
    text: 'I was so nervous before my first visit — I had avoided the dentist for years. But Dr. Santos was incredibly patient. She explained everything before she did it, and never made me feel judged. My whole family has switched to DentaCare. Best decision we made.'
  },
  {
    id: 2, name: 'Jose Reyes', role: 'Patient since 2020',
    rating: 5, initials: 'JR',
    text: 'A friend recommended this clinic and I am so glad I listened. I had braces done here and the whole experience was smooth. The staff remembered my name every visit and always made me feel welcome. I\'m genuinely proud of my smile now.'
  },
  {
    id: 3, name: 'Luz Santos', role: 'Patient since 2022',
    rating: 5, initials: 'LS',
    text: 'After years of hiding my teeth in photos, I finally got my implants done here. Dr. Reyes was upfront about everything — the timeline, the process, the costs. No surprises, no hidden fees. I smiled on my birthday for the first time in years.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Real stories from real patients — families, students, and working adults who trusted us with their smiles.
          </p>
        </div>

        <div className="testimonials__grid">
          {reviews.map(r => (
            <div key={r.id} className="review-card">
              <div className="review-card__stars">
                {'★'.repeat(r.rating)}
                <span className="review-card__rating">{r.rating}.0</span>
              </div>
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__author">
                <span className="review-card__avatar">{r.initials}</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__cta">
          <p>Join 5,000+ families who trust DentaCare with their smiles</p>
          <a href="#book" className="btn-primary">Book Your Visit Today</a>
        </div>
      </div>
    </section>
  );
}
