import { Link } from "react-router-dom";

const stats = [
  ["15,000+", "Trips Completed"],
  ["99.2%", "On-Time Arrival"],
  ["24/7", "Live Dispatch"],
  ["4.9 / 5", "Passenger Rating"],
];

export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4 mb-5">
        <div className="col-lg-7">
          <span className="badge bg-warning text-dark mb-2 fw-semibold">ABOUT US</span>
          <h1 className="fw-bold mb-3">Modern Urban Mobility Built Around Reliability</h1>
          <p className="lead text-muted">
            Book_A_Taxi was created to remove the guesswork from city commutes and airport travel.
          </p>
          <p className="text-secondary mb-4">
            We combine straightforward online scheduling with professionally maintained vehicles and
            vetted local drivers. Whether you need a quick ride across town or a spacious SUV for
            family travel, our goal is a calm, punctual trip from doorstep to destination.
          </p>
          <Link to="/book" className="btn btn-warning fw-semibold px-4">
            Schedule a Ride
          </Link>
        </div>

        <div className="col-lg-5">
          <div className="row g-3">
            {stats.map(([value, label]) => (
              <div className="col-6" key={label}>
                <div className="card border-0 shadow-sm text-center p-4 h-100">
                  <div className="h3 fw-bold text-dark mb-1">{value}</div>
                  <div className="small text-muted">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4 h-100 border-start border-warning border-4">
            <h2 className="h5 fw-bold">Our Mission</h2>
            <p className="text-muted mb-0">
              To make reliable, safe, and transparent ground transportation accessible at any hour
              through clean booking tools and courteous service.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4 h-100 border-start border-dark border-4">
            <h2 className="h5 fw-bold">Safety &amp; Fleet Standards</h2>
            <p className="text-muted mb-0">
              Every vehicle in the Book_A_Taxi fleet undergoes scheduled mechanical inspections,
              sanitization, and GPS-monitored dispatch support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}