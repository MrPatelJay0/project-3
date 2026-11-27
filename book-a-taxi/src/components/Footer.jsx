import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <h5 className="fw-bold text-warning mb-3">Book_A_Taxi</h5>
            <p className="text-secondary mb-0">
              Dependable city rides, airport transfers, and executive chauffeur
              services—engineered for safety, comfort, and punctuality.
            </p>
          </div>

          <div className="col-md-3 col-6">
            <h6 className="fw-semibold text-uppercase small text-warning mb-3">
              Navigation
            </h6>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              <li><Link to="/" className="text-secondary text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-secondary text-decoration-none">About Us</Link></li>
              <li><Link to="/services" className="text-secondary text-decoration-none">Services</Link></li>
              <li><Link to="/book" className="text-secondary text-decoration-none">Book a Ride</Link></li>
            </ul>
          </div>

          <div className="col-md-4 col-6">
            <h6 className="fw-semibold text-uppercase small text-warning mb-3">
              24/7 Support
            </h6>
            <ul className="list-unstyled text-secondary d-grid gap-2 mb-0">
              <li>Phone: +1 (800) 555-0199</li>
              <li>Email: dispatch@bookataxi.example</li>
              <li>120 Mobility Ave, Metro Center</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-secondary small">
          <span>&copy; {new Date().getFullYear()} Book_A_Taxi. All rights reserved.</span>
          <span>Front-end Starter Application</span>
        </div>
      </div>
    </footer>
  );
}