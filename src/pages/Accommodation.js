import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "./Accommodation.scss";
import villaRoomView from "../images/wedding backgrounds/villa-room-view.webp";

const Accommodation = () => {
  const { language } = useLanguage();
  const t = translations[language].accommodation;

  return (
    <div className="accommodation-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${villaRoomView})` }}
      >
        <div className="header-overlay">
          <h1>{t.title}</h1>
          <p className="header-subtitle">{t.subtitle}</p>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <p className="intro-text">{t.introText1}</p>
          <p className="intro-text">{t.introText2}</p>
        </div>
      </section>

      <section className="hotels-section">
        <div className="container">
          <h2 className="section-title">{t.hotelsTitle}</h2>
          <p className="section-subtitle">{t.hotelsSubtitle}</p>

          <div className="hotel-grid">
            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Palace Hotel</h3>
                <p className="hotel-description">
                  An elegant palazzo liberty building in Como's historic center,
                  directly on the lake. Features the renowned Antica Darsena
                  restaurant and offers a perfect blend of historic charm and
                  lakeside luxury.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Como Historic Center
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🌊</span> On the Lake
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$$$
                  </span>
                </div>
                <a
                  href="https://www.palacehotel.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {t.visitWebsite}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Albergo Terminus</h3>
                <p className="hotel-description">
                  A beautiful liberty building located on Lungo Lario Trieste,
                  right on the lakefront in Como's historic center. Features the
                  charming Bar delle Terme and offers stunning lake views.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Lungo Lario Trieste
                    14
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🌊</span> Lakefront Location
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$$
                  </span>
                </div>
                <a
                  href="https://albergoterminus.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {t.visitWebsite}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Hotel Engadina</h3>
                <p className="hotel-description">
                  A welcoming 24-room hotel in Como city center, just 5 minutes
                  from the train station and close to the lake. Perfect for
                  exploring the city while enjoying comfortable accommodations.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Como City Center
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🚂</span> 5 min from station
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$$$
                  </span>
                </div>
                <a
                  href="http://hotelengadina.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {t.visitWebsite}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>La Perla By Sedar</h3>
                <p className="hotel-description">
                  A collection of 12 stylish design apartments in Como center,
                  near the lake. Features a rooftop terrace with stunning views
                  and an on-site gelateria for authentic Italian gelato.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Como Center
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🏠</span> 12 Apartments
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$
                  </span>
                </div>
                <a
                  href="https://laperlabysedar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {t.visitWebsite}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apartments-section">
        <div className="container">
          <h2 className="section-title">{t.apartmentsTitle}</h2>
          <p className="section-subtitle">{t.apartmentsSubtitle}</p>

          <div className="hotel-grid">
            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Valli</h3>
                <p className="hotel-description">
                  A spacious 3-room apartment accommodating up to 6 guests with
                  2 bedrooms. Located in a quiet residential area near the lake,
                  perfect for families or groups seeking comfort and
                  tranquility.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Via Ludovico
                    Zamenhof 9
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🛏️</span> 2 Bedrooms
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$
                  </span>
                </div>
                <a
                  href="https://www.myhomeincomo.com/valli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  View Details →
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Midnight Borgo</h3>
                <p className="hotel-description">
                  A bright and welcoming 3-room apartment for up to 4 guests
                  with 2 bedrooms. Conveniently located near Como's old town,
                  offering easy access to historic sites and local restaurants.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Via Borgo Vico 114
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🛏️</span> 2 Bedrooms
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$
                  </span>
                </div>
                <a
                  href="https://www.myhomeincomo.com/midnight-borgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  View Details →
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Casa Olmo</h3>
                <p className="hotel-description">
                  A modern 2-room apartment accommodating up to 4 guests with 1
                  bedroom. Located near the lake in a peaceful setting, ideal
                  for couples or small families.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Via Ludovico
                    Zamenhof 9
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🛏️</span> 1 Bedroom
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$
                  </span>
                </div>
                <a
                  href="https://www.myhomeincomo.com/casa-olmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  View Details →
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>The Gallery</h3>
                <p className="hotel-description">
                  A stylish modern 2-room apartment for up to 4 guests with 1
                  bedroom, featuring contemporary art throughout. Located near
                  Como's historic center for easy exploration.
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Via Prato Pasquè 2
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🛏️</span> 1 Bedroom
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$
                  </span>
                </div>
                <a
                  href="https://www.myhomeincomo.com/TheGallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  View Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-sources-section">
        <div className="container">
          <h2 className="section-title">{t.otherSourcesTitle}</h2>
          <p className="section-subtitle">{t.otherSourcesText}</p>

          <div className="sources-grid">
            <div className="source-card">
              <div className="source-icon">🏠</div>
              <h3>My Home In Como</h3>
              <p>
                Curated selection of quality apartments in Como city center and
                surrounding areas
              </p>
              <a
                href="https://www.myhomeincomo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-link"
              >
                {t.visitWebsite}
              </a>
            </div>

            <div className="source-card">
              <div className="source-icon">🏨</div>
              <h3>Booking.com</h3>
              <p>
                Wide range of hotels, apartments, and B&Bs with verified reviews
                and flexible booking
              </p>
              <a
                href="https://www.booking.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-link"
              >
                {t.visitWebsite}
              </a>
            </div>

            <div className="source-card">
              <div className="source-icon">🌍</div>
              <h3>Airbnb</h3>
              <p>
                Unique homes and experiences hosted by locals throughout the
                Lake Como region
              </p>
              <a
                href="https://www.airbnb.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-link"
              >
                {t.visitWebsite}
              </a>
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
