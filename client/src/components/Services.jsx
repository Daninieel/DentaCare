import { useEffect, useState } from 'react';
import './Services.css';

const fallbackServices = [
  { id: 1, name: 'Teeth Cleaning', description: 'Regular cleaning keeps your gums healthy and your teeth feeling fresh. We are gentle, thorough, and honest about what we find.', icon: '01', duration: '60 min', price: '₱800' },
  { id: 2, name: 'Teeth Whitening', description: 'Safe, effective whitening that fits your schedule. We will walk you through your options so you know exactly what to expect.', icon: '02', duration: '90 min', price: '₱3,500' },
  { id: 3, name: 'Dental Braces', description: 'Traditional and modern braces for teens and adults. We create treatment plans that work with your lifestyle and budget.', icon: '03', duration: 'Ongoing', price: 'Starting at ₱25,000' },
  { id: 4, name: 'Root Canal', description: 'We know it sounds scary — but root canal therapy is far less painful than the toothache it relieves. You are in good hands.', icon: '04', duration: '120 min', price: '₱5,000' },
  { id: 5, name: 'Dental Crowns', description: 'Custom crowns that look and feel natural. We restore damaged teeth so they can function and look just like before.', icon: '05', duration: '90 min', price: '₱8,000' },
  { id: 6, name: 'Dental Implants', description: 'A permanent solution that feels like your own tooth. We take time to explain every step so you are always comfortable.', icon: '06', duration: 'Multi-visit', price: 'Starting at ₱40,000' }
];

export default function Services() {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    fetch('/api/services')
      .then(r => r.json())
      .then(setServices)
      .catch(() => {});
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Comprehensive Dental Care</h2>
          <p className="section-subtitle">
            We offer a full range of dental services in a calm, welcoming clinic — no rush, no judgment, just honest care.
          </p>
        </div>

        <div className="services__grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__name">{service.name}</h3>
              <p className="service-card__desc">{service.description}</p>
              <div className="service-card__meta">
                <span className="service-card__meta-item">{service.duration}</span>
                <span className="service-card__price">{service.price}</span>
              </div>
              <a href="#book" className="service-card__btn">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
