import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "./Location.scss";
import varennaPanorama from "../images/varenna-panorama.webp";
import lakeBellagio from "../images/lake-como-bellagio.webp";
import lakeNesso from "../images/lake-como-nesso.webp";
import ferries from "../images/ferries.webp";
import pizzocheri from "../images/foods/pizzocheri.jpeg";
import ossobuco from "../images/foods/ossobuco.jpg";
import risotto from "../images/foods/risotto.jpeg";
import cotoletta from "../images/foods/cotoletta.jpeg";
import polenta from "../images/foods/polenta.jpg";
import tagliatelle from "../images/foods/tagliatelle.jpeg";
import comoCity from "../images/como-city.webp";
import brunate from "../images/brunate.webp";

const Location = () => {
  const { language } = useLanguage();
  const t = translations[language].location;

  return (
    <div className="lakecomo-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${varennaPanorama})` }}
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

      <section className="exploring-section">
        <div className="container">
          <h2 className="section-title">{t.exploringComoTitle}</h2>

          <div className="content-with-image">
            <div className="floating-image-right">
              <img
                src={comoCity}
                alt="Como city"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>{t.comoPara1}</p>

            <p>{t.comoPara2}</p>

            <div className="floating-image-left">
              <img
                src={brunate}
                alt="Brunate hillside village"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>{t.comoPara3}</p>
          </div>

          <h3 className="subsection-title">{t.restaurantsTitle}</h3>

          <div className="recommendations-grid">
            {t.restaurants.map((restaurant, index) => (
              <div key={index} className="recommendation-card">
                <h4>{restaurant.name}</h4>
                <p className="recommendation-type">{restaurant.type}</p>
                <p>{restaurant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recommended-plates-section">
        <div className="container">
          <h3 className="subsection-title">{t.recommendedPlatesTitle}</h3>

          <div className="content-with-image">
            <p>{t.platesPara1}</p>

            <p>{t.platesPara2}</p>
          </div>

          <div className="plates-grid">
            {t.plates.map((plate, index) => {
              const plateImages = [
                pizzocheri,
                ossobuco,
                risotto,
                cotoletta,
                polenta,
                tagliatelle,
              ];
              return (
                <div key={index} className="plate-card">
                  <img
                    src={plateImages[index]}
                    alt={plate.name}
                    className="plate-image"
                    loading="lazy"
                  />
                  <h4>{plate.name}</h4>
                  <p>{plate.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="exploring-lake-section">
        <div className="container">
          <h2 className="section-title">{t.exploringLakeTitle}</h2>

          <div className="content-with-image">
            <div className="floating-image-left">
              <img
                src={lakeBellagio}
                alt="Bellagio on Lake Como"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>{t.lakePara1}</p>

            <p>{t.lakePara2}</p>

            <div className="floating-image-right">
              <img
                src={lakeNesso}
                alt="Nesso waterfall"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>{t.lakePara3}</p>

            <p>{t.lakePara4}</p>
          </div>
        </div>
      </section>

      <section className="transport-section">
        <div className="container">
          <div className="travel-card local-transport-card">
            <h2>{t.localTransportTitle}</h2>
            <p className="section-intro">{t.transportIntro}</p>

            <div className="content-with-image">
              <div className="floating-image-right">
                <img
                  src={ferries}
                  alt="Lake Como ferries and boats"
                  className="travel-map"
                />
              </div>

              <div className="transport-info">
                <h3>{t.boatsTitle}</h3>
                <p>{t.boatsPara1}</p>
                <p>{t.boatsPara2}</p>
                <p>{t.boatsPara3}</p>
              </div>

              <div className="transport-info">
                <h3>{t.busesTitle}</h3>
                <p>{t.busesPara1}</p>
                <p>{t.busesPara2}</p>
              </div>

              <div className="transport-info">
                <h3>{t.taxisTitle}</h3>
                <p>{t.taxisPara1}</p>
                <p>{t.taxisPara2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
