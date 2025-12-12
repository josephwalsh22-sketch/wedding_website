import React, { useState } from "react";
import "./RSVP.scss";
import villaChairsInside from "../images/wedding backgrounds/villa-chairs-inside.webp";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    dietaryRestrictions: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("RSVP submitted:", formData);
    alert("Thank you for your RSVP! (Form submission to be implemented)");
  };

  return (
    <div className="rsvp-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${villaChairsInside})` }}
      >
        <div className="header-overlay">
          <h1>RSVP</h1>
          <p className="header-subtitle">Join Us for Our Special Day</p>
        </div>
      </div>

      <section className="rsvp-section">
        <div className="container">
          <p className="rsvp-intro">
            We would be honored to have you celebrate with us! Please let us
            know if you'll be able to attend.
          </p>

          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="attending">Will you be attending? *</label>
              <select
                id="attending"
                name="attending"
                value={formData.attending}
                onChange={handleChange}
                required
              >
                <option value="yes">Joyfully Accepts</option>
                <option value="no">Regretfully Declines</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
              <input
                type="text"
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Any allergies or dietary needs?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message to the Couple</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Share your well wishes..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit RSVP
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RSVP;
