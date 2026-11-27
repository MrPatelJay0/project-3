import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = {};

    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (form.message.trim().length < 10) {
      next.message = "Please enter a message (at least 10 characters).";
    }

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <span className="badge bg-warning text-dark mb-2 fw-semibold">SUPPORT</span>
        <h1 className="fw-bold">Contact Our Dispatch Team</h1>
        <p className="text-muted">Need help with a booking or corporate account? Reach out anytime.</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm p-4 h-100 bg-dark text-white">
            <h2 className="h5 fw-bold text-warning mb-4">Direct Contact Details</h2>
            <div className="mb-3">
              <div className="small text-secondary">24/7 Dispatch Hotline</div>
              <div className="fw-semibold">+1 (800) 555-0199</div>
            </div>
            <div className="mb-3">
              <div className="small text-secondary">Customer Support Email</div>
              <div className="fw-semibold">dispatch@bookataxi.example</div>
            </div>
            <div className="mb-3">
              <div className="small text-secondary">Headquarters</div>
              <div className="fw-semibold">120 Mobility Ave, Metro Center</div>
            </div>
            <div>
              <div className="small text-secondary">Operating Hours</div>
              <div className="fw-semibold">Open 24 hours, 7 days a week</div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <form className="card border-0 shadow-sm p-4" onSubmit={handleSubmit} noValidate>
            <h2 className="h5 fw-bold mb-3">Send a Message</h2>

            {submitted && (
              <div className="alert alert-success" role="status">
                Message received! Our support desk will respond shortly (front-end demo).
              </div>
            )}

            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="contact-name">
                Full Name *
              </label>
              <input
                id="contact-name"
                name="name"
                className={`form-control${errors.name ? " is-invalid" : ""}`}
                placeholder="Alex Kumar"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="contact-email">
                Email Address *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className={`form-control${errors.email ? " is-invalid" : ""}`}
                placeholder="alex@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold" htmlFor="contact-message">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className={`form-control${errors.message ? " is-invalid" : ""}`}
                placeholder="How can we assist with your trip?"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-warning fw-semibold px-4 align-self-start">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}