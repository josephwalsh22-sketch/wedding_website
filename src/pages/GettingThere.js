import React from "react";
import "./GettingThere.scss";
import comoCitySquare from "../images/wedding backgrounds/como-city-square.jpg";
import airportDirections from "../images/airport-directions.webp";

const GettingThere = () => {
  return (
    <div className="getting-there-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${comoCitySquare})` }}
      >
        <div className="header-overlay">
          <h1>Getting There</h1>
          <p className="header-subtitle">Travel Information for Lake Como</p>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <p className="intro-text">
            Lake Como is easily accessible from Milan and other major European
            cities. Here's everything you need to know about traveling to our
            wedding.
          </p>
          <p className="intro-text">
            Cars can be rented at airports. If you rent a car when booking your
            airline ticket, it is much cheaper.
          </p>
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
                By Air
                <span className="travel-icon">✈️</span>
              </h2>

              <div className="airport-info">
                <h3>Milan Malpensa Airport (MXP)</h3>
                <p>
                  The closest major international airport, approximately 1 hour
                  from Lake Como. Direct flights available from most major
                  cities worldwide.
                </p>
              </div>

              <div className="airport-info">
                <h3>Milan Linate Airport (LIN)</h3>
                <p>
                  Closer to Milan city center, about 1 hour by car from Lake
                  Como. Good option for European flights.
                </p>
              </div>

              <div className="airport-info">
                <h3>Milan Bergamo Airport (BGY)</h3>
                <p>
                  Popular with budget airlines, approximately 1 hour from Lake
                  Como. Often has competitive fares from European cities.
                </p>
              </div>
            </div>

            <div className="travel-card train-travel-card">
              <h2>
                By Train
                <span className="travel-icon">🚂</span>
              </h2>

              <div className="train-info">
                <h3>From Milan Malpensa Airport</h3>
                <p>
                  Take the train from Malpensa to Milano Centrale, then connect
                  to Como. Total journey approximately 1 hour. Alternatively,
                  take the train to Mendrisio in Switzerland and transfer to
                  Como Lago.
                </p>
              </div>

              <div className="train-info">
                <h3>From Milan Linate Airport</h3>
                <p>
                  Take the metro from Linate to San Babila (blue line), change
                  to the red line to reach Milano Cadorna station (approximately
                  15 minutes). From Cadorna, take the train to Como Lago
                  (approximately 45 minutes).
                </p>
              </div>

              <div className="train-info">
                <h3>From Milan Bergamo Airport</h3>
                <p>
                  Take the airport bus to Milano Centrale station (approximately
                  1 hour). From Milano Centrale, take the train to Como
                  (approximately 1 hour).
                </p>
              </div>

              <div className="train-info">
                <h3>Direct to Como</h3>
                <p>
                  Como has two main train stations: Como San Giovanni (for
                  trains from Milano Centrale) and Como Lago (for trains from
                  Milano Cadorna). Como Lago is closer to the city center and
                  the lakefront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingThere;
