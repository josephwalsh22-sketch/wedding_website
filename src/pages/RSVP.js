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

    console.log("Form submitted with data:", formData);

    // Prepare the data to send
    const attendingValue =
      formData.attending === "yes"
        ? "Yes,  I'll be there"
        : "Sorry, can't make it";

    console.log("Attending value:", attendingValue);
    console.log("Name:", formData.name);
    console.log("Dietary:", formData.dietaryRestrictions);
    console.log("Message:", formData.message);

    // Create a hidden iframe to submit the form
    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    iframe.onload = () => {
      console.log("Form submitted successfully to Google Forms");
    };
    document.body.appendChild(iframe);

    // Create a form element
    const form = document.createElement("form");
    form.action =
      "https://docs.google.com/forms/d/e/1FAIpQLScY6uhxRAkvqdRtNd76sUvXSgbZKXZCmdX9FG0kaU5M3_vQ4w/formResponse";
    form.method = "POST";
    form.target = "hidden_iframe";

    // Add form fields matching Google Form exactly
    const fields = {
      "entry.877086558": attendingValue,
      "entry.1498135098": formData.name,
      "entry.2606285": formData.dietaryRestrictions || "",
      "entry.920658279": formData.message || "",
    };

    console.log("Fields being sent:", fields);

    Object.keys(fields).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);

    console.log("Submitting form to Google...");
    form.submit();

    // Clean up
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      console.log("Cleanup complete");
    }, 2000);

    alert("Thank you for your RSVP! We'll see you there! 💒");
    setFormData({
      name: "",
      email: "",
      guests: "1",
      attending: "yes",
      dietaryRestrictions: "",
      message: "",
    });
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
