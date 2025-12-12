import React from "react";
import "./Location.scss";
import villaWithLights from "../images/wedding backgrounds/villa-with-lights.webp";
import villaChairsInside from "../images/wedding backgrounds/villa-chairs-inside.webp";
import comoMountains from "../images/wedding backgrounds/como-mountains.jpeg";
import villaComoCity from "../images/wedding backgrounds/villa-como-city.jpg";
import lakePanorama from "../images/wedding backgrounds/laike-como-panorama.jpg";

const Location = () => {
  return (
    <div className="wedding-details-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${lakePanorama})` }}
      >
        <div className="header-overlay">
          <h1>Location</h1>
          <p className="location-subtitle">Lake Como, Italy</p>
        </div>
      </div>

      <section className="location-showcase">
        <div className="showcase-image">
          <img src={villaWithLights} alt="Villa at Lake Como" />
        </div>
        <div className="showcase-text">
          <h2>A Celebration at Lake Como</h2>
          <p>
            Join us for an unforgettable celebration at a stunning villa
            overlooking the breathtaking beauty of Lake Como, Italy. Surrounded
            by mountains and Italian charm, we'll celebrate our love in one of
            the most romantic destinations in the world.
          </p>
        </div>
      </section>

      <section className="details-section">
        <div className="container">
          <div className="detail-card with-image">
            <div className="card-image">
              <img src={villaChairsInside} alt="Villa Ceremony Space" />
            </div>
            <h2>Ceremony</h2>
            <div className="detail-info">
              <p>
                <strong>Date:</strong> To Be Announced
              </p>
              <p>
                <strong>Time:</strong> To Be Announced
              </p>
              <p>
                <strong>Location:</strong> Villa at Lake Como
              </p>
              <p className="detail-description">
                Join us as we exchange our vows in a beautiful ceremony at our
                stunning villa, surrounded by our loved ones and the natural
                beauty of Lake Como.
              </p>
            </div>
          </div>

          <div className="detail-card with-image">
            <div className="card-image">
              <img src={villaComoCity} alt="Lake Como Reception" />
            </div>
            <h2>Reception</h2>
            <div className="detail-info">
              <p>
                <strong>Time:</strong> To Be Announced
              </p>
              <p>
                <strong>Location:</strong> Villa at Lake Como
              </p>
              <p className="detail-description">
                Celebrate with us at our reception! Enjoy authentic Italian
                cuisine, dancing under the stars, and memories to last a
                lifetime with views of Lake Como.
              </p>
            </div>
          </div>

          <div className="detail-card with-image">
            <div className="card-image">
              <img src={comoMountains} alt="Lake Como Mountains" />
            </div>
            <h2>Accommodations</h2>
            <div className="detail-info">
              <p className="detail-description">
                Lake Como offers a variety of beautiful accommodations.
                Information about nearby hotels and recommended places to stay
                will be available soon. Please check back for updates!
              </p>
            </div>
          </div>

          <div className="detail-card">
            <h2>Dress Code</h2>
            <div className="detail-info">
              <p className="detail-description">
                Formal attire requested. We can't wait to see you dressed to the
                nines for our Italian celebration!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
