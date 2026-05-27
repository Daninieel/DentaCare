import { useState } from 'react';
import './BookAppointment.css';

const services = [
  'Teeth Cleaning', 'Teeth Whitening', 'Dental Braces',
  'Root Canal', 'Dental Crowns', 'Dental Implants', 'General Checkup'
];

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const initialForm = { name: '', email: '', phone: '', service: '', date: '', time: '', message: '' };

export default function BookAppointment() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="book" className="book">
      <div className="book__bg" />
      <div className="container book__inner">
        <div className="book__info">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
            Book Appointment
          </span>
          <h2 className="book__title">We Will Be Ready When You Are</h2>
          <p className="book__subtitle">
            Booking is quick and simple. Tell us when you are free and we will take care of the rest — no long waits, no confusing forms.
          </p>

          <div className="book__highlights">
            {[
              { icon: 'Cal', label: 'Flexible Scheduling', desc: 'Morning and afternoon slots, Saturdays available' },
              { icon: 'Tel', label: 'Quick Confirmation', desc: 'We will reach out within 24 hours to confirm your visit' },
              { icon: 'HMO', label: 'PhilHealth & HMO Accepted', desc: 'We work with major health insurance providers' }
            ].map(h => (
              <div key={h.label} className="book__highlight">
                <span className="book__highlight-icon">{h.icon}</span>
                <div>
                  <strong>{h.label}</strong>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="book__form-wrap">
          <h3 className="book__form-title">Book an Appointment</h3>

          {status === 'success' ? (
            <div className="book__success">
              <span className="book__success-icon">✓</span>
              <h4>Appointment Requested!</h4>
              <p>Thank you! We will reach out within 24 hours to confirm your schedule. See you soon.</p>
              <button className="btn-primary" onClick={() => setStatus(null)}>Book Another</button>
            </div>
          ) : (
            <form className="book__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name <span className="req">*</span></label>
                  <input
                    type="text" name="name" value={form.name}
                    onChange={handleChange} placeholder="Juan dela Cruz" required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address <span className="req">*</span></label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="john@example.com" required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number <span className="req">*</span></label>
                  <input
                    type="tel" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="+63 (917) 000-0000" required
                  />
                </div>
                <div className="form-group">
                  <label>Service <span className="req">*</span></label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date <span className="req">*</span></label>
                  <input
                    type="date" name="date" value={form.date}
                    onChange={handleChange} min={today} required
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Time <span className="req">*</span></label>
                  <select name="time" value={form.time} onChange={handleChange} required>
                    <option value="">Select a time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Additional Notes</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Any special requirements or concerns..." rows={3}
                />
              </div>

              {status === 'error' && (
                <p className="book__error">! {errorMsg}</p>
              )}

              <button type="submit" className="btn-primary book__submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Confirm Appointment'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
