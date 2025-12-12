import React from "react";
import "./GettingThere.scss";
import comoCitySquare from "../images/wedding backgrounds/como-city-square.jpg";

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

      <section className="getting-there-section">
        <div className="container">
          <p className="intro">
            Lake Como is easily accessible from Milan and other major European
            cities. Here's everything you need to know about traveling to our
            wedding.
          </p>

          <div className="travel-cards">
            <div className="travel-card">
              <h2>By Air</h2>
              <h3>Milan Malpensa Airport (MXP)</h3>
              <p>
                The closest major international airport, approximately 1 hour
                from Lake Como. Direct flights available from most major cities
                worldwide.
              </p>
              <h3>Milan Linate Airport (LIN)</h3>
              <p>
                Closer to Milan city center, about 1.5 hours from Lake Como.
                Good option for European flights.
              </p>
            </div>

            <div className="travel-card">
              <h2>From Milan to Lake Como</h2>
              <h3>By Train</h3>
              <p>
                Regular trains run from Milano Centrale to Como. Journey takes
                approximately 1 hour. From Como station, taxis and boats are
                available to reach the villa.
              </p>
              <h3>By Car</h3>
              <p>
                Rental cars are available at both airports. The drive to Lake
                Como takes about 1-1.5 hours depending on traffic. GPS
                coordinates will be provided closer to the date.
              </p>
              <h3>Private Transfer</h3>
              <p>
                We recommend arranging a private transfer for convenience.
                Contact us for recommended services.
              </p>
            </div>

            <div className="travel-card">
              <h2>Local Transportation</h2>
              <p>
                Once at Lake Como, boats and taxis are the primary means of
                transportation between towns. The villa is accessible by both
                road and water. Detailed directions will be sent with your
                invitation.
              </p>
            </div>
          </div>

          <div className="travel-note">
            <h2>Need Help?</h2>
            <p>
              If you have any questions about traveling to Lake Como or need
              assistance with arrangements, please don't hesitate to reach out.
              We're happy to help make your journey as smooth as possible!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingThere;
