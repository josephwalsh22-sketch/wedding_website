import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "./TheDay.scss";

import villaAboveHigher from "../images/wedding backgrounds/villa-above-higher.webp";
import villaSide from "../images/wedding backgrounds/villa-side.webp";
import villaChairsInside from "../images/wedding backgrounds/villa-chairs-inside.webp";

const TheDay = () => {
  const { language } = useLanguage();
  const t = translations[language].theDay;

  return (
    <div className="theday-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${villaAboveHigher})` }}
      >
        <div className="header-overlay">
          <h1>{t.title}</h1>
          <p className="header-subtitle">{t.subtitle}</p>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <p className="intro-text">{t.introText}</p>
        </div>
      </section>

      <section className="venue-section">
        <div className="container">
          <h2 className="section-title">{t.venue}</h2>

          <p className="venue-description">{t.venueDescription}</p>

          <div className="venue-address">
            <p>{t.venueTitle}</p>
            <p>{t.venueAddress}</p>
          </div>

          <div className="venue-images">
            <div className="venue-image-wrapper">
              <img
                src={villaSide}
                alt="Villa Parravicini side view"
                className="venue-image"
                loading="lazy"
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
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">{t.scheduleTitle}</h2>
          <p className="section-subtitle">{t.scheduleSubtitle}</p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🥂</span>
                <span className="time-text">{t.welcomeTime}</span>
              </div>
              <div className="timeline-content">
                <h3>{t.welcome}</h3>
                <p>{t.welcomeText}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">💍</span>
                <span className="time-text">{t.ceremonyTime}</span>
              </div>
              <div className="timeline-content">
                <h3>{t.ceremony}</h3>
                <p>{t.ceremonyText}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🍾</span>
                <span className="time-text">{t.aperitifTime}</span>
              </div>
              <div className="timeline-content">
                <h3>{t.aperitif}</h3>
                <p>{t.aperitifText}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🍽️</span>
                <span className="time-text">{t.dinnerTime}</span>
              </div>
              <div className="timeline-content">
                <h3>{t.dinner}</h3>
                <p>{t.dinnerText}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🎂</span>
                <span className="time-text">{t.cakeTime}</span>
              </div>
              <div className="timeline-content">
                <h3>{t.cake}</h3>
                <p>{t.cakeText}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">💃</span>
                <span className="time-text">{t.partyTime}</span>
              </div>
              <div className="timeline-content">
                <h3>{t.party}</h3>
                <p>{t.partyText}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">
                <span className="time-icon">🌙</span>
                <span className="time-text">{t.midnightTime}</span>
              </div>
              <div className="timeline-content">
                <h3>{t.midnight}</h3>
                <p>{t.midnightText}</p>
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
              <h3>{t.dressCode}</h3>
              <p>{t.dressCodeText}</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">📸</div>
              <h3>{t.photography}</h3>
              <p>{t.photographyText}</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🎁</div>
              <h3>{t.gifts}</h3>
              <p>{t.giftsText}</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🌤️</div>
              <h3>{t.weather}</h3>
              <p>{t.weatherText}</p>
            </div>

            <div className="detail-card">
              <div className="detail-icon">🍽️</div>
              <h3>{t.menu}</h3>
              <p>{t.menuText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheDay;
