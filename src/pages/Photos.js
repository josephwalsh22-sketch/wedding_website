import React from "react";
import "./Photos.scss";
import villaAbove from "../images/wedding backgrounds/villa-above.webp";
import villaSide from "../images/wedding backgrounds/villa-side.webp";
import villaWithLights from "../images/wedding backgrounds/villa-with-lights.webp";
import lakePanorama from "../images/wedding backgrounds/laike-como-panorama.jpg";
import comoMountains from "../images/wedding backgrounds/como-mountains.jpeg";
import villaComoCity from "../images/wedding backgrounds/villa-como-city.jpg";
import villaRoomView from "../images/wedding backgrounds/villa-room-view.webp";
import comoCafe from "../images/wedding backgrounds/como-cafe.jpg";
import comoCityBrunate from "../images/wedding backgrounds/como-city-brunate.jpg";
import comoCitySquare from "../images/wedding backgrounds/como-city-square.jpg";
import comoIcecream from "../images/wedding backgrounds/como-icecream.jpg";
import comoTempeVolta from "../images/wedding backgrounds/como-tempe-volta.jpg";
import comoVillage from "../images/wedding backgrounds/como-village.jpg";

const Photos = () => {
  const venuePhotos = [
    {
      src: villaAbove,
      alt: "Villa from Above",
      caption: "Our Beautiful Villa",
    },
    { src: villaSide, alt: "Villa Side View", caption: "Villa at Lake Como" },
    {
      src: villaWithLights,
      alt: "Villa with Lights",
      caption: "Evening at the Villa",
    },
    {
      src: villaComoCity,
      alt: "Villa and Como City",
      caption: "Villa Overlooking Como",
    },
    {
      src: villaRoomView,
      alt: "Villa Room View",
      caption: "Views from the Villa",
    },
    { src: comoMountains, alt: "Como Mountains", caption: "Mountain Backdrop" },
  ];

  const lakePhotos = [
    {
      src: lakePanorama,
      alt: "Lake Como Panorama",
      caption: "Lake Como Panorama",
    },
    {
      src: comoCityBrunate,
      alt: "Como City and Brunate",
      caption: "Como and Brunate",
    },
    { src: comoVillage, alt: "Como Village", caption: "Lakeside Village" },
  ];

  const localPhotos = [
    { src: comoCafe, alt: "Como Cafe", caption: "Local Cafe" },
    {
      src: comoCitySquare,
      alt: "Como City Square",
      caption: "Como City Center",
    },
    { src: comoIcecream, alt: "Como Gelato", caption: "Italian Gelato" },
    {
      src: comoTempeVolta,
      alt: "Tempio Voltiano",
      caption: "Tempio Voltiano",
    },
  ];

  return (
    <div className="photos-page">
      <div className="page-header">
        <h1>Photos</h1>
      </div>

      <section className="photos-section">
        <div className="container">
          <div className="gallery-section">
            <h2>Our Venue</h2>
            <p className="section-intro">
              Take a glimpse at the stunning villa where we'll celebrate our
              special day
            </p>
            <div className="photo-grid">
              {venuePhotos.map((photo, index) => (
                <div key={index} className="photo-item">
                  <img src={photo.src} alt={photo.alt} />
                  <p className="photo-caption">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-section">
            <h2>Lake Como</h2>
            <p className="section-intro">
              Discover the breathtaking beauty of Lake Como and its surroundings
            </p>
            <div className="photo-grid">
              {lakePhotos.map((photo, index) => (
                <div key={index} className="photo-item">
                  <img src={photo.src} alt={photo.alt} />
                  <p className="photo-caption">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-section">
            <h2>Local Experiences</h2>
            <p className="section-intro">
              Explore the charming cafes, piazzas, and local culture of Como
            </p>
            <div className="photo-grid">
              {localPhotos.map((photo, index) => (
                <div key={index} className="photo-item">
                  <img src={photo.src} alt={photo.alt} />
                  <p className="photo-caption">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="coming-soon-section">
            <h2>Wedding Day Photos</h2>
            <p>
              Check back after the wedding to see photos from our special day!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photos;
