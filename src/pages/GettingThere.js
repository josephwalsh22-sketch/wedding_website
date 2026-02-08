import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "./GettingThere.scss";
import comoCitySquare from "../images/wedding backgrounds/como-city-square.jpg";
import airportDirections from "../images/airport-directions.webp";

const GettingThere = () => {
  const { language } = useLanguage();
  const t = translations[language].gettingThere;

  return (
    <div className="getting-there-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${comoCitySquare})` }}
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

      <section className="getting-there-section">
        <div className="container">
          <div className="travel-image-container">
            <img
              src={airportDirections}
              alt="Airport and train directions to Lake Como"
              className="travel-directions-map"
              loading="lazy"
            />
          </div>

          <div className="travel-cards">
            <div className="travel-card air-travel-card">
              <h2>
                {t.byAir}
                <span className="travel-icon">✈️</span>
              </h2>

              <div className="airport-info">
                <h3>{t.malpensaTitle}</h3>
                <p>{t.malpensaText}</p>
              </div>

              <div className="airport-info">
                <h3>{t.linateTitle}</h3>
                <p>{t.linateText}</p>
              </div>

              <div className="airport-info">
                <h3>{t.bergamoTitle}</h3>
                <p>{t.bergamoText}</p>
              </div>
            </div>

            <div className="travel-card train-travel-card">
              <h2>
                {t.byTrain}
                <span className="travel-icon">🚂</span>
              </h2>

              <div className="train-info">
                <h3>{t.fromMalpensaTitle}</h3>
                <p>{t.fromMalpensaText}</p>
              </div>

              <div className="train-info">
                <h3>{t.fromLinateTitle}</h3>
                <p>{t.fromLinateText}</p>
              </div>

              <div className="train-info">
                <h3>{t.fromBergamoTitle}</h3>
                <p>{t.fromBergamoText}</p>
              </div>

              <div className="train-info">
                <h3>{t.directToComoTitle}</h3>
                <p>{t.directToComoText}</p>
              </div>

              <div className="train-info last-trains-info">
                <h3>{t.lastTrainsTitle}</h3>
                <p>{t.lastTrainsText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingThere;
