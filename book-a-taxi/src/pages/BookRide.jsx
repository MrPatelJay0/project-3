import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { services } from "../data/services";

function getLocalTodayString() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseLocalDateTime(dateStr, timeStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = timeStr.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}

export default function BookRide() {
  const [params] = useSearchParams();
  const todayStr = getLocalTodayString();

  const initialService = params.get("service");
  const validInitialService = services.some((s) => s.id === initialService)
    ? initialService
    : "";

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: validInitialService,
    pickup: "",
    dropoff: "",
    date: todayStr,
    time: "",
  });

  const [errors, setErrors] = useState({});
  const [bookingRef, setBookingRef] = useState("");

  const selectedService = services.find((s) => s.id === form.serviceType);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setBookingRef("");
  }

  function validate() {
    const next = {};
    const currentToday = getLocalTodayString();

    if (!form.fullName.trim()) {
      next.fullName = "Full name is required.";
    }

    if (!form.phone.trim()) {
      next.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit phone number (digits only).";
    }

    if (!form.email.trim()) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (!form.serviceType) {
      next.serviceType = "Please select a taxi service.";
    }

    if (!form.pickup.trim()) {
      next.pickup = "Pickup location is required.";
    }

    if (!form.dropoff.trim()) {
      next.dropoff = "Drop-off location is required.";
    } else if (
      form.pickup.trim().toLowerCase() === form.dropoff.trim().toLowerCase()
    ) {
      next.dropoff = "Drop-off location must be different from pickup.";
    }

    // Date validation (shows error directly under Date)
    if (!form.date) {
      next.date = "Please choose a pickup date.";
    } else if (form.date < currentToday) {
      next.date = "Pickup date cannot be in the past.";
    }

    // Time validation (checks future time if date is today)
    if (!form.time) {
      next.time = "Please choose a pickup time.";
    } else if (!next.date) {
      const selectedDT = parseLocalDateTime(form.date, form.time);
      if (Number.isNaN(selectedDT.getTime()) || selectedDT.getTime() <= Date.now()) {
        next.time = "Choose a pickup time in the future.";
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      const refCode = `TX-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(refCode);
    }
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <span className="badge bg-warning text-dark mb-2 fw-semibold">RESERVATION</span>
        <h1 className="fw-bold">Book Your Taxi Ride</h1>
        <p className="text-muted">Complete your passenger and trip details below.</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <form className="card border-0 shadow-sm p-4" onSubmit={handleSubmit} noValidate>
            {bookingRef && (
              <div className="alert alert-success" role="status">
                <strong>Booking Confirmed!</strong> Reference ID:{" "}
                <span className="badge bg-success">{bookingRef}</span>
                <div className="small mt-1">
                  Front-end validation passed. Your ride summary has been recorded for this demo.
                </div>
              </div>
            )}

            <h2 className="h6 text-uppercase text-muted fw-bold mb-3">
              1. Passenger Information
            </h2>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Alex Kumar"
                  className={`form-control${errors.fullName ? " is-invalid" : ""}`}
                  value={form.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="phone">
                  Phone Number (10 digits) *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  className={`form-control${errors.phone ? " is-invalid" : ""}`}
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alex@example.com"
                  className={`form-control${errors.email ? " is-invalid" : ""}`}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>

            <h2 className="h6 text-uppercase text-muted fw-bold mb-3">
              2. Trip &amp; Schedule
            </h2>

            <div className="row g-3">
              <div className="col-12">
                <label className="form-label fw-semibold" htmlFor="serviceType">
                  Taxi Service *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className={`form-select${errors.serviceType ? " is-invalid" : ""}`}
                  value={form.serviceType}
                  onChange={handleChange}
                >
                  <option value="">-- Choose a Service --</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.price})
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <div className="invalid-feedback">{errors.serviceType}</div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="pickup">
                  Pickup Location *
                </label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  placeholder="e.g. Central Station"
                  className={`form-control${errors.pickup ? " is-invalid" : ""}`}
                  value={form.pickup}
                  onChange={handleChange}
                />
                {errors.pickup && <div className="invalid-feedback">{errors.pickup}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="dropoff">
                  Drop-off Location *
                </label>
                <input
                  id="dropoff"
                  name="dropoff"
                  type="text"
                  placeholder="e.g. Airport Terminal 2"
                  className={`form-control${errors.dropoff ? " is-invalid" : ""}`}
                  value={form.dropoff}
                  onChange={handleChange}
                />
                {errors.dropoff && <div className="invalid-feedback">{errors.dropoff}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="date">
                  Pickup Date *
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={todayStr}
                  className={`form-control${errors.date ? " is-invalid" : ""}`}
                  value={form.date}
                  onChange={handleChange}
                />
                {errors.date && <div className="invalid-feedback">{errors.date}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold" htmlFor="time">
                  Pickup Time *
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  className={`form-control${errors.time ? " is-invalid" : ""}`}
                  value={form.time}
                  onChange={handleChange}
                />
                {errors.time && <div className="invalid-feedback">{errors.time}</div>}
              </div>

              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-warning btn-lg w-100 fw-bold">
                  Confirm Booking
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Live Ride Summary Card */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 bg-dark text-white sticky-top" style={{ top: "90px" }}>
            <h2 className="h5 fw-bold text-warning mb-3">Ride Summary</h2>
            <hr className="border-secondary" />

            <div className="mb-3">
              <div className="small text-secondary">Selected Service</div>
              <div className="fw-semibold">
                {selectedService ? selectedService.name : "Not selected yet"}
              </div>
              {selectedService && (
                <div className="small text-warning">{selectedService.price} · {selectedService.capacity}</div>
              )}
            </div>

            <div className="mb-3">
              <div className="small text-secondary">Route</div>
              <div className="small">
                <strong>From:</strong> {form.pickup || "—"}
              </div>
              <div className="small">
                <strong>To:</strong> {form.dropoff || "—"}
              </div>
            </div>

            <div className="mb-3">
              <div className="small text-secondary">Scheduled Pickup</div>
              <div className="fw-semibold">
                {form.date || "—"} {form.time ? `at ${form.time}` : ""}
              </div>
            </div>

            <hr className="border-secondary" />
            <p className="small text-secondary mb-0">
              Free cancellation up to 15 minutes before pickup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}