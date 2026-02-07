import React from "react";
import "./Home.scss";
import villaComoCity from "../images/villa-como-city.webp";
import villaAboveHigher from "../images/wedding backgrounds/villa-above-higher.webp";
import villaSide from "../images/wedding backgrounds/villa-side.webp";
import villaWithLights from "../images/wedding backgrounds/villa-with-lights.webp";
import lakePanorama from "../images/lake-panorama.webp";
import comoCafe from "../images/como-cafe.webp";
import comoVillage from "../images/como-village.webp";

const Home = () => {
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
            <p className="wedding-date">We're Getting Married!</p>
            <p className="wedding-location">Lake Como, Italy</p>
            <p className="save-date">Save the Date</p>
            <p className="actual-date">17th October 2026</p>
          </div>
        </div>
      </div>

      <section className="welcome-section">
        <div className="container">
          <h2>Ci Sposiamo!</h2>
          <p>
            We are so excited to celebrate our special day with you at beautiful
            Lake Como in Italy! Please explore our website to learn more about
            the wedding details, accommodation, and things to do.
          </p>
        </div>
      </section>

      <section className="location-section">
        <div className="location-image">
          <img src={villaAboveHigher} alt="Villa from Above" />
        </div>
        <div className="location-content">
          <h2>Our Marriage Ceremony</h2>
          <p>
            Join us for our symbolic ceremony in Como. We would be delighted to
            share this moment with you!
          </p>
        </div>
      </section>

      <section className="preview-section">
        <div className="preview-image">
          <img src={villaSide} alt="Villa at Lake Como" />
        </div>
        <div className="preview-content">
          <h2>Join Us in Italy</h2>
          <p>
            We have a private event in the heart of Como, where we'll eat,
            drink, and dance the day away. So many of us are spread throughout
            the world and we don't see each other often anymore—it will be
            fantastic to have a day with you all.
          </p>
        </div>
      </section>

      <section
        className="evening-section"
        style={{ backgroundImage: `url(${villaWithLights})` }}
      >
        <div className="evening-overlay">
          <div className="evening-content">
            <h2>An Evening to Remember</h2>
            <p>
              As the sun sets over Lake Como, join us for an enchanting evening
              of celebration under the stars. The villa will be illuminated,
              creating a magical atmosphere for dining, dancing, and making
              memories that will last a lifetime.
            </p>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <h2>Explore Lake Como</h2>
        <p>Stay for a few days and enjoy Cinzia's homeland!</p>
        <div className="explore-grid">
          <div className="explore-card">
            <img src={lakePanorama} alt="Lake Como Panorama" />
            <div className="explore-card-content">
              <h3>Breathtaking Views</h3>
              <p>
                Discover stunning panoramic views of the lake and surrounding
                mountains.
              </p>
            </div>
          </div>
          <div className="explore-card">
            <img src={comoCafe} alt="Como Cafe" />
            <div className="explore-card-content">
              <h3>Italian Charm</h3>
              <p>
                Experience authentic Italian culture in charming cafes and
                piazzas.
              </p>
            </div>
          </div>
          <div className="explore-card">
            <img src={comoVillage} alt="Como Village" />
            <div className="explore-card-content">
              <h3>Historic Villages</h3>
              <p>Wander through picturesque villages along the lakeside.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
