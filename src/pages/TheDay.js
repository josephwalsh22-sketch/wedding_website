import React from "react";
import "./TheDay.scss";
import villaWithLights from "../images/wedding backgrounds/villa-with-lights.webp";
import villaAboveHigher from "../images/wedding backgrounds/villa-above-higher.webp";
import villaAbove from "../images/wedding backgrounds/villa-above.webp";
import villaSide from "../images/wedding backgrounds/villa-side.webp";
import villaChairsInside from "../images/wedding backgrounds/villa-chairs-inside.webp";

const TheDay = () => {
  return (
    <div className="theday-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${villaAboveHigher})` }}
      >
        <div className="header-overlay">
          <h1>The Day</h1>
          <p className="header-subtitle">17th October 2026</p>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <p className="intro-text">
            Join us for a day of celebration, love, and unforgettable memories
            at our beautiful Lake Como wedding. Here's what to expect on our
            special day.
          </p>
        </div>
      </section>

      <section className="venue-section">
        <div className="container">
          <h2 className="section-title">The Venue</h2>

          <p className="venue-description">
            Our wedding will take place at the stunning Villa Parravicini, a
            historic 18th-century villa nestled in the heart of Como city,
            overlooking the magnificent Lake Como. This elegant neoclassical
            villa features beautiful terraced gardens, breathtaking lake views,
            and timeless Italian architecture—the perfect romantic setting for
            our special day.
          </p>

          <div className="venue-address">
            <p>Villa Parravicini Revel</p>
            <p>Via Museo Giovio, 6, 22100 Como CO, Italy</p>
          </div>

          <div className="venue-images">
            <div className="venue-image-wrapper">
              <img
                src={villaSide}
                alt="Villa Parravicini side view"
                className="venue-image"
              />
            </div>
            <div className="venue-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8947368421054!2d9.083139315674445!3d45.81025997910573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47869c4d5e6e6e6f%3A0x8e4e4e4e4e4e4e4e!2sVilla%20Parravicini%20Revel%2C%20Via%20Museo%20Giovio%2C%206%2C%2022100%20Como%20CO%2C%20Italy!5e0!3m2!1sen!2sit!4v1706457890123!5m2!1sen!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Villa Parravicini Revel Location"
              ></iframe>
            </div>
            <div className="venue-image-wrapper">
              <img
                src={villaChairsInside}
                alt="Villa interior with lake view"
                className="venue-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Schedule of Events</h2>
          <p className="section-subtitle">
            A day filled with love, laughter, and celebration
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🥂</span>
                <span className="time-text">15:30</span>
              </div>
              <div className="timeline-content">
                <h3>Welcome</h3>
                <p>
                  Welcome to Villa Parravicini Revel! Join us for a welcome
                  drink as you arrive and take in the beautiful surroundings.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">💍</span>
                <span className="time-text">16:15</span>
              </div>
              <div className="timeline-content">
                <h3>Ceremony</h3>
                <p>
                  Join us for our ceremony at the villa, overlooking the
                  stunning Lake Como.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🍾</span>
                <span className="time-text">16:45</span>
              </div>
              <div className="timeline-content">
                <h3>Aperitif</h3>
                <p>
                  Enjoy aperitivo with drinks and canapés on the terrace with
                  breathtaking views of the lake and mountains.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🍽️</span>
                <span className="time-text">19:00</span>
              </div>
              <div className="timeline-content">
                <h3>Dinner</h3>
                <p>
                  A delicious Italian feast awaits! Enjoy a multi-course dinner
                  featuring local specialties and fine wines.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🎂</span>
                <span className="time-text">21:00</span>
              </div>
              <div className="timeline-content">
                <h3>Cutting of the Cake</h3>
                <p>
                  Join us for the traditional cutting of the wedding cake and a
                  sweet toast to celebrate.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">💃</span>
                <span className="time-text">21:30</span>
              </div>
              <div className="timeline-content">
                <h3>Party & Open Bar</h3>
                <p>
                  Let's dance the night away! Join us on the dance floor for an
                  evening of music, celebration, and unforgettable moments with
                  an open bar.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🌙</span>
                <span className="time-text">24:00</span>
              </div>
              <div className="timeline-content">
                <h3>Saluto di Mezzanotte</h3>
                <p>
                  Tutti a casa come Cenerentola! Midnight farewell—everyone home
                  like Cinderella!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="details-section">
        <div className="container">
          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">👔</div>
              <h3>Dress Code</h3>
              <p>Formal attire, please.</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📸</div>
              <h3>Photography</h3>
              <p>
                We have a professional photographer capturing our special day.
                Feel free to take photos, but we kindly ask for an unplugged
                ceremony.
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🎁</div>
              <h3>Gifts</h3>
              <p>
                Your presence is the greatest gift! If you wish to give
                something, we would appreciate a donation to our home renovation
                fund.
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🌤️</div>
              <h3>Weather</h3>
              <p>
                October in Lake Como is typically mild and pleasant. We
                recommend bringing a light jacket or wrap for the evening.
              </p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🍽️</div>
              <h3>Menu</h3>
              <p>
                Expect a full traditional Italian food and wine and a
                full-course dinner! Please let us know of any dietary
                requirements in advance!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheDay;
