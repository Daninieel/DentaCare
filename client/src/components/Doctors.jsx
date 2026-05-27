import { useEffect, useState } from 'react';
import './Doctors.css';

const fallbackDoctors = [
  { id: 1, name: 'Dr. Maria Santos', specialty: 'General Dentist', experience: '12 years', initials: 'MS' },
  { id: 2, name: 'Dr. Ramon Dela Cruz', specialty: 'Orthodontist', experience: '9 years', initials: 'RD' },
  { id: 3, name: 'Dr. Ana Reyes', specialty: 'Cosmetic Dentist', experience: '15 years', initials: 'AR' }
];

export default function Doctors() {
  const [doctors, setDoctors] = useState(fallbackDoctors);

  useEffect(() => {
    fetch('/api/doctors')
      .then(r => r.json())
      .then(data => setDoctors(data.map((d, i) => ({ ...d, initials: fallbackDoctors[i]?.initials || d.name.split(' ').slice(1).map(w => w[0]).join('') }))))
      .catch(() => {});
  }, []);

  return (
    <section id="doctors" className="doctors">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Our Team</span>
          <h2 className="section-title">Meet Our Expert Dentists</h2>
          <p className="section-subtitle">
            Every one of our doctors is passionate about making dentistry less intimidating and more accessible for every patient.
          </p>
        </div>

        <div className="doctors__grid">
          {doctors.map(doc => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-card__avatar">
                <span>{doc.initials}</span>
              </div>
              <div className="doctor-card__info">
                <h3 className="doctor-card__name">{doc.name}</h3>
                <p className="doctor-card__specialty">{doc.specialty}</p>
                <p className="doctor-card__exp">
                  {doc.experience} of experience
                </p>
                <a href="#book" className="doctor-card__btn">Book with Dr.</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
