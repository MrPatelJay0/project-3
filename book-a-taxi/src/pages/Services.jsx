import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Services() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-warning text-dark mb-2 fw-semibold">OUR FLEET</span>
        <h1 className="fw-bold">Taxi Services &amp; Packages</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Choose the service tier that matches your passenger count, luggage needs, and schedule.
        </p>
      </div>

      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-6 col-lg-3" key={service.id}>
            <article className="card border-0 shadow-sm h-100 hover-card">
              <div className="card-body p-4 d-flex flex-column">
                <span className="badge bg-light text-dark border align-self-start mb-3">
                  {service.badge}
                </span>
                <h2 className="h5 fw-bold mb-1">{service.name}</h2>
                <div className="h4 fw-bold text-warning bg-dark px-2 py-1 rounded align-self-start my-2">
                  {service.price}
                </div>
                <p className="text-muted small mb-2">
                  {service.capacity} · {service.luggage}
                </p>
                <p className="text-secondary small mb-3">{service.description}</p>

                <ul className="list-unstyled small text-muted mb-4 flex-grow-1">
                  {service.features.map((feat) => (
                    <li key={feat} className="mb-1">✓ {feat}</li>
                  ))}
                </ul>

                <Link
                  to={`/book?service=${service.id}`}
                  className="btn btn-warning fw-semibold w-100 mt-auto"
                >
                  Select &amp; Book
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}