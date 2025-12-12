import React from "react";
import "./Accommodation.scss";
import villaRoomView from "../images/wedding backgrounds/villa-room-view.webp";

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

      <section className="accommodation-section">
        <div className="container">
          <p className="intro">
            We've reserved a selection of accommodations near the villa to make
            your stay in Lake Como comfortable and convenient. Below are our
            recommended options for your visit.
          </p>

          <div className="accommodation-cards">
            <div className="accommodation-card">
              <h2>Hotel Recommendations</h2>
              <h3>Grand Hotel Tremezzo</h3>
              <p>
                A luxurious 5-star hotel on the shores of Lake Como, just 15
                minutes from the villa. Features stunning lake views, a spa, and
                multiple dining options.
              </p>
              <p className="distance">Distance from venue: 8 km</p>

              <h3>Hotel Villa Flori</h3>
              <p>
                An elegant boutique hotel in Como with beautiful gardens and
                lake access. Perfect blend of historic charm and modern comfort.
              </p>
              <p className="distance">Distance from venue: 5 km</p>

              <h3>Albergo Terminus</h3>
              <p>
                A comfortable hotel near Como San Giovanni station, ideal for
                guests arriving by train. Great value with easy access to the
                lake.
              </p>
              <p className="distance">Distance from venue: 6 km</p>
            </div>

            <div className="accommodation-card">
              <h2>Vacation Rentals</h2>
              <p>
                For those preferring more space or traveling with family, we
                recommend checking Airbnb and VRBO for vacation rentals in the
                Como area. Look for properties in:
              </p>
              <ul>
                <li>Como Centro (city center)</li>
                <li>Cernobbio</li>
                <li>Brunate</li>
                <li>Torno</li>
              </ul>
            </div>

            <div className="accommodation-card">
              <h2>Booking Information</h2>
              <p>
                We recommend booking your accommodation as early as possible,
                especially during the summer season when Lake Como is a popular
                destination.
              </p>
              <p>
                If you need assistance with bookings or have questions about the
                area, please don't hesitate to reach out to us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
