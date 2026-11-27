import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="top-bar py-2 d-none d-md-block">
        <div className="container d-flex justify-content-between">
          <span><i className="bi bi-shield-check text-warning"></i> Verified drivers</span>
          <span>
            <i className="bi bi-telephone-fill text-warning"></i>{" "}
            <a href="tel:+18005558249">+1 (800) 555-TAXI</a>
            &nbsp;&nbsp;•&nbsp;&nbsp;
            <i className="bi bi-envelope-fill text-warning"></i>{" "}
            <a href="mailto:support@bookataxi.com">support@bookataxi.com</a>
          </span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-main navbar-dark sticky-top">
        <div className="container py-2">
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-white" onClick={() => setOpen(false)}>
            <span className="brand-badge">🚕</span>
            <span className="fw-extrabold fs-4">Book<span className="text-warning">_A_Taxi</span></span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="main-nav" className={`collapse navbar-collapse${open ? " show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {links.map(([path, label]) => (
                <li className="nav-item" key={path}>
                  <NavLink to={path} end={path === "/"} className="nav-link fw-semibold" onClick={() => setOpen(false)}>
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item ms-lg-2">
                <NavLink to="/book" className="nav-link nav-cta" onClick={() => setOpen(false)}>
                  Book a Ride
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}