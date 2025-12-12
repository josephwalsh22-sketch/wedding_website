import React from "react";
import "./Accommodation.scss";
import villaRoomView from "../images/wedding backgrounds/villa-room-view.webp";
import lakeComo from "../images/wedding backgrounds/laike-como-panorama.jpg";
import comoBrunate from "../images/wedding backgrounds/como-city-brunate.jpg";
import comoVillage from "../images/wedding backgrounds/como-village.jpg";

const Accommodation = () => {
  return (
    <div className="accommodation-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${villaRoomView})` }}
      >
        <div className="header-overlay">
          <h1>Accommodation</h1>
          <p className="header-subtitle">Where to Stay in Lake Como</p>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <p className="intro-text">
            Lake Como offers a wonderful selection of accommodations, from
            luxurious lakeside hotels to charming vacation rentals. We've
            curated our favorite options to help you find the perfect place to
            stay during our celebration.
          </p>
        </div>
      </section>

      <section className="hotels-section">
        <div className="container">
          <h2 className="section-title">Recommended Hotels</h2>
          <p className="section-subtitle">
            Elegant accommodations with stunning lake views
          </p>

          <div className="hotel-grid">
            <div className="hotel-card">
              <div
                className="hotel-image"
                style={{ backgroundImage: `url(${lakeComo})` }}
              >
                <div className="hotel-badge">5-Star Luxury</div>
              </div>
              <div className="hotel-content">
                <h3>Grand Hotel Tremezzo</h3>
                <p className="hotel-description">
                  A legendary 5-star hotel on the shores of Lake Como, offering
                  breathtaking views, world-class spa facilities, and exquisite
                  dining. The perfect blend of historic elegance and modern
                  luxury.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> 8 km from venue
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">⏱️</span> 15 min drive
                  </span>
                </div>
              </div>
            </div>

            <div className="hotel-card">
              <div
                className="hotel-image"
                style={{ backgroundImage: `url(${comoBrunate})` }}
              >
                <div className="hotel-badge">Boutique</div>
              </div>
              <div className="hotel-content">
                <h3>Hotel Villa Flori</h3>
                <p className="hotel-description">
                  An elegant boutique hotel nestled in beautiful gardens with
                  direct lake access. Experience the perfect harmony of historic
                  Italian charm and contemporary comfort.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> 5 km from venue
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">⏱️</span> 12 min drive
                  </span>
                </div>
              </div>
            </div>

            <div className="hotel-card">
              <div
                className="hotel-image"
                style={{ backgroundImage: `url(${comoVillage})` }}
              >
                <div className="hotel-badge">Great Value</div>
              </div>
              <div className="hotel-content">
                <h3>Albergo Terminus</h3>
                <p className="hotel-description">
                  A comfortable and welcoming hotel near Como San Giovanni
                  station. Ideal for guests arriving by train, offering
                  excellent value with easy access to the lake and city center.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> 6 km from venue
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">⏱️</span> 13 min drive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rentals-section">
        <div className="container">
          <div className="rentals-content">
            <div className="rentals-text">
              <h2>Vacation Rentals</h2>
              <p>
                For those seeking more space or traveling with family, Lake Como
                offers beautiful vacation rentals with authentic Italian charm.
                We recommend exploring options on Airbnb and VRBO in these
                picturesque areas:
              </p>
              <ul className="areas-list">
                <li>
                  <strong>Como Centro</strong> — Historic city center with
                  restaurants and shops
                </li>
                <li>
                  <strong>Cernobbio</strong> — Elegant lakeside village with
                  stunning villas
                </li>
                <li>
                  <strong>Brunate</strong> — Hillside town with panoramic lake
                  views
                </li>
                <li>
                  <strong>Torno</strong> — Charming fishing village on the
                  eastern shore
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <div className="booking-card">
            <h2>Planning Your Stay</h2>
            <div className="booking-tips">
              <div className="tip">
                <span className="tip-icon">📅</span>
                <div className="tip-content">
                  <h3>Book Early</h3>
                  <p>
                    Lake Como is a popular destination, especially in summer. We
                    recommend securing your accommodation as soon as possible.
                  </p>
                </div>
              </div>
              <div className="tip">
                <span className="tip-icon">💬</span>
                <div className="tip-content">
                  <h3>Need Help?</h3>
                  <p>
                    If you need assistance with bookings or have questions about
                    the area, please don't hesitate to reach out to us. We're
                    happy to help!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
