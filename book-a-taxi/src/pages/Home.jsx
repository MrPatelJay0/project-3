import { Link } from "react-router-dom";
import { services } from "../data/services";

const pillars = [
    {
        icon: "bi-clock-history",
        title: "24/7 Dispatch",
        description: "Round-the-clock availability for early flights, late shifts, and weekend plans.",
    },
    {
        icon: "bi-cash-coin",
        title: "Transparent Fares",
        description: "Clear base pricing and service tiers with zero unexpected surprises.",
    },
    {
        icon: "bi-shield-check",
        title: "Verified Chauffeurs",
        description: "Licensed, background-checked drivers committed to safe, courteous rides.",
    },
];

const steps = [
    ["1", "Select Your Service", "Pick from City Taxi, Airport, Executive, or SUV."],
    ["2", "Set Route & Schedule", "Enter pickup, drop-off, date, and preferred time."],
    ["3", "Confirm & Ride", "Review your summary and lock in your ride in seconds."],
];

export default function Home() {
    return (
        <>
            <section className="hero-professional mb-5">
                <div className="row align-items-center g-4">
                    <div className="col-lg-7">
                        <span className="hero-kicker"><i className="bi bi-lightning-charge-fill"></i> Rides in minutes</span>
                        <h1 className="hero-title mt-3">Reliable taxis,<br /><span className="text-warning">zero guesswork.</span></h1>
                        <p className="hero-sub mt-3">Book city rides, airport transfers and outstation trips with transparent fares, verified drivers and 24/7 support.</p>

                        <div className="d-flex flex-wrap gap-3 mt-4">
                            <Link to="/book" className="btn btn-taxi btn-lg">Book Your Ride <i className="bi bi-arrow-right-short"></i></Link>
                            <Link to="/services" className="btn btn-outline-light btn-lg">View Services</Link>
                        </div>

                        <div className="d-flex flex-wrap gap-2 mt-4">
                            <span className="trust-chip"><i className="bi bi-shield-lock-fill"></i> Background-checked drivers</span>
                            <span className="trust-chip"><i className="bi bi-cash-coin"></i> Transparent pricing</span>
                            <span className="trust-chip"><i className="bi bi-clock-history"></i> 24/7 availability</span>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="hero-card">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2 className="h5 mb-0 text-white">Instant Booking Estimate</h2>
                                <span className="badge text-bg-warning">Demo</span>
                            </div>

                            <div className="summary-row"><span>Base fare</span><strong>from $8</strong></div>
                            <div className="summary-row"><span>Airport transfer</span><strong>from $25</strong></div>
                            <div className="summary-row"><span>Luxury executive</span><strong>from $45</strong></div>
                            <div className="summary-row"><span>Outstation / SUV</span><strong>from $60</strong></div>

                            <small className="text-white-50 d-block mt-3">Final fare confirmed before driver assignment. No surge chaos. No hidden add-ons.</small>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="row g-4">
                    {pillars.map(({ icon, title, description }) => (
                        <div className="col-md-4" key={title}>
                            <div className="pro-card">
                                <div className="icon-tile"><i className={`bi ${icon}`}></i></div>
                                <h3 className="h5 fw-bold">{title}</h3>
                                <p className="text-muted mb-0">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white py-5 border-top border-bottom">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold">How Book_A_Taxi Works</h2>
                        <p className="text-muted">Three simple steps from request to pickup</p>
                    </div>
                    <div className="row g-4">
                        {steps.map(([num, title, desc]) => (
                            <div className="col-md-4 text-center" key={num}>
                                <div className="step-badge rounded-circle bg-warning text-dark mb-3">
                                    {num}
                                </div>
                                <h3 className="h5 fw-bold">{title}</h3>
                                <p className="text-muted mb-0">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Popular Ride Options</h2>
                        <p className="text-muted mb-0">Select a vehicle category to start booking</p>
                    </div>
                    <Link to="/services" className="btn btn-outline-dark btn-sm fw-semibold">
                        See All Services
                    </Link>
                </div>

                <div className="row g-4">
                    {services.slice(0, 3).map((service) => (
                        <div className="col-md-4" key={service.id}>
                            <div className="card border-0 shadow-sm h-100 hover-card">
                                <div className="card-body p-4 d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <h3 className="h5 fw-bold mb-0">{service.name}</h3>
                                        <span className="badge bg-dark text-warning">{service.price}</span>
                                    </div>
                                    <p className="text-muted small mb-3">{service.capacity} · {service.luggage}</p>
                                    <p className="text-secondary flex-grow-1">{service.description}</p>
                                    <Link
                                        to={`/book?service=${service.id}`}
                                        className="btn btn-warning fw-semibold w-100"
                                    >
                                        Book {service.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}