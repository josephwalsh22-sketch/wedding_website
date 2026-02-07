import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "./Home.scss";
import villaComoCity from "../images/villa-como-city.webp";
import villaAboveHigher from "../images/wedding backgrounds/villa-above-higher.webp";
import villaSide from "../images/wedding backgrounds/villa-side.webp";
import villaWithLights from "../images/wedding backgrounds/villa-with-lights.webp";
import lakePanorama from "../images/lake-panorama.webp";
import comoCafe from "../images/como-cafe.webp";
import comoVillage from "../images/como-village.webp";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className="home-page">
      <div className="floating-hearts">
        <div className="heart heart-1">♥</div>
        <div className="heart heart-2">♥</div>
        <div className="heart heart-3">♥</div>
      </div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${villaComoCity})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="couple-names">Cinzia & Joseph</h1>
            <p className="wedding-date">{t.wereGettingMarried}</p>
            <p className="wedding-location">{t.lakeComo}</p>
            <p className="save-date">{t.saveTheDate}</p>
            <p className="actual-date">{t.date}</p>
          </div>
        </div>
      </div>

      <section className="welcome-section">
        <div className="container">
          <h2>{t.sposiamo}</h2>
          <p>{t.welcomeText}</p>
        </div>
      </section>

      <section className="location-section">
        <div className="location-image">
          <img src={villaAboveHigher} alt="Villa from Above" />
        </div>
        <div className="location-content">
          <h2>{t.ourCeremony}</h2>
          <p>{t.ceremonyText}</p>
        </div>
      </section>

      <section className="preview-section">
        <div className="preview-image">
          <img src={villaSide} alt="Villa at Lake Como" />
        </div>
        <div className="preview-content">
          <h2>{t.joinUs}</h2>
          <p>{t.joinUsText}</p>
        </div>
      </section>

      <section
        className="evening-section"
        style={{ backgroundImage: `url(${villaWithLights})` }}
      >
        <div className="evening-overlay">
          <div className="evening-content">
            <h2>{t.eveningTitle}</h2>
            <p>{t.eveningText}</p>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <h2>{t.exploreLakeComo}</h2>
        <p>{t.exploreIntro}</p>
        <div className="explore-grid">
          <div className="explore-card">
            <img src={lakePanorama} alt="Lake Como Panorama" />
            <div className="explore-card-content">
              <h3>{t.breathtakingViews}</h3>
              <p>{t.breathtakingViewsText}</p>
            </div>
          </div>
          <div className="explore-card">
            <img src={comoCafe} alt="Como Cafe" />
            <div className="explore-card-content">
              <h3>{t.italianCharm}</h3>
              <p>{t.italianCharmText}</p>
            </div>
          </div>
          <div className="explore-card">
            <img src={comoVillage} alt="Como Village" />
            <div className="explore-card-content">
              <h3>{t.historicVillages}</h3>
              <p>{t.historicVillagesText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
