import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "./Accommodation.scss";
import villaRoomView from "../images/wedding backgrounds/villa-room-view.webp";
import myHomesInComoLogo from "../images/my-homes-in-como.webp";
import bookingComLogo from "../images/booking-com.webp";
import airbnbLogo from "../images/air-bnb.webp";

const Accommodation = () => {
  const { language } = useLanguage();
  const t = translations[language].accommodation;
  const isItalian = language === "it";

  return (
    <div className="accommodation-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${villaRoomView})` }}
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

      <section className="hotels-section">
        <div className="container">
          <h2 className="section-title">{t.hotelsTitle}</h2>
          <p className="section-subtitle">{t.hotelsSubtitle}</p>

          <div className="hotel-grid">
            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Palace Hotel</h3>
                <p className="hotel-description">
                  {isItalian
                    ? "Un elegante palazzo in stile liberty nel centro storico di Como, direttamente affacciato sul lago. Ospita il rinomato ristorante Antica Darsena e offre un perfetto connubio tra fascino storico e lusso sul lago."
                    : "An elegant palazzo liberty building in Como's historic center, directly on the lake. Features the renowned Antica Darsena restaurant and offers a perfect blend of historic charm and lakeside luxury."}
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span>{" "}
                    {isItalian
                      ? "Centro storico di Como"
                      : "Como Historic Center"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🌊</span>{" "}
                    {isItalian ? "Direttamente sul lago" : "On the Lake"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$$$
                  </span>
                </div>
                <a
                  href="https://www.palacehotel.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {t.visitWebsite}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Albergo Terminus</h3>
                <p className="hotel-description">
                  {isItalian
                    ? "Un elegante edificio in stile liberty situato su Lungo Lario Trieste, proprio sul lungolago nel centro storico di Como. Ospita il caratteristico Bar delle Terme e offre splendide viste sul lago."
                    : "A beautiful liberty building located on Lungo Lario Trieste, right on the lakefront in Como's historic center. Features the charming Bar delle Terme and offers stunning lake views."}
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Lungo Lario Trieste
                    14
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🌊</span>{" "}
                    {isItalian ? "Posizione fronte lago" : "Lakefront Location"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$$
                  </span>
                </div>
                <a
                  href="https://albergoterminus.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {t.visitWebsite}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Hotel Engadina</h3>
                <p className="hotel-description">
                  {isItalian
                    ? "Un accogliente hotel di 24 camere nel centro di Como, a soli 5 minuti dalla stazione e vicino al lago. Perfetto per esplorare la città godendo di un alloggio confortevole."
                    : "A welcoming 24-room hotel in Como city center, just 5 minutes from the train station and close to the lake. Perfect for exploring the city while enjoying comfortable accommodations."}
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span>{" "}
                    {isItalian ? "Centro città di Como" : "Como City Center"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🚂</span>{" "}
                    {isItalian
                      ? "A 5 minuti dalla stazione"
                      : "5 min from station"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$$$
                  </span>
                </div>
                <a
                  href="http://hotelengadina.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {t.visitWebsite}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>La Perla By Sedar</h3>
                <p className="hotel-description">
                  {isItalian
                    ? "Una collezione di 12 eleganti appartamenti di design nel centro di Como, vicino al lago. Dispone di una terrazza panoramica sul tetto con viste mozzafiato e di una gelateria interna per gustare il vero gelato italiano."
                    : "A collection of 12 stylish design apartments in Como center, near the lake. Features a rooftop terrace with stunning views and an on-site gelateria for authentic Italian gelato."}
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span>{" "}
                    {isItalian ? "Centro di Como" : "Como Center"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🏠</span>{" "}
                    {isItalian ? "12 appartamenti" : "12 Apartments"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$
                  </span>
                </div>
                <a
                  href="https://laperlabysedar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {t.visitWebsite}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apartments-section">
        <div className="container">
          <h2 className="section-title">{t.apartmentsTitle}</h2>
          <p className="section-subtitle">{t.apartmentsSubtitle}</p>

          <div className="hotel-grid">
            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Valli</h3>
                <p className="hotel-description">
                  {isItalian
                    ? "Spazioso appartamento di 3 locali che può ospitare fino a 6 persone con 2 camere da letto. Situato in una tranquilla zona residenziale vicino al lago, perfetto per famiglie o gruppi in cerca di comfort e tranquillità."
                    : "A spacious 3-room apartment accommodating up to 6 guests with 2 bedrooms. Located in a quiet residential area near the lake, perfect for families or groups seeking comfort and tranquility."}
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Via Ludovico
                    Zamenhof 9
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🛏️</span>{" "}
                    {isItalian ? "2 camere da letto" : "2 Bedrooms"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$
                  </span>
                </div>
                <a
                  href="https://www.myhomeincomo.com/valli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {isItalian ? "Vedi dettagli →" : "View Details →"}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Midnight Borgo</h3>
                <p className="hotel-description">
                  {isItalian
                    ? "Luminoso e accogliente appartamento di 3 locali per un massimo di 4 persone con 2 camere da letto. Situato in posizione comoda vicino al centro storico di Como, offre facile accesso ai luoghi di interesse e ai ristoranti locali."
                    : "A bright and welcoming 3-room apartment for up to 4 guests with 2 bedrooms. Conveniently located near Como's old town, offering easy access to historic sites and local restaurants."}
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Via Borgo Vico 114
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🛏️</span>{" "}
                    {isItalian ? "2 camere da letto" : "2 Bedrooms"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$$
                  </span>
                </div>
                <a
                  href="https://www.myhomeincomo.com/midnight-borgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {isItalian ? "Vedi dettagli →" : "View Details →"}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>Casa Olmo</h3>
                <p className="hotel-description">
                  {isItalian
                    ? "Moderno appartamento di 2 locali che può ospitare fino a 4 persone con 1 camera da letto. Situato vicino al lago in una zona tranquilla, ideale per coppie o piccole famiglie."
                    : "A modern 2-room apartment accommodating up to 4 guests with 1 bedroom. Located near the lake in a peaceful setting, ideal for couples or small families."}
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Via Ludovico
                    Zamenhof 9
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🛏️</span>{" "}
                    {isItalian ? "1 camera da letto" : "1 Bedroom"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$
                  </span>
                </div>
                <a
                  href="https://www.myhomeincomo.com/casa-olmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {isItalian ? "Vedi dettagli →" : "View Details →"}
                </a>
              </div>
            </div>

            <div className="hotel-card">
              <div className="hotel-content">
                <h3>The Gallery</h3>
                <p className="hotel-description">
                  {isItalian
                    ? "Elegante appartamento moderno di 2 locali per un massimo di 4 persone con 1 camera da letto, decorato con opere d'arte contemporanea. Situato vicino al centro storico di Como, ideale per esplorare la città."
                    : "A stylish modern 2-room apartment for up to 4 guests with 1 bedroom, featuring contemporary art throughout. Located near Como's historic center for easy exploration."}
                </p>
                <div className="hotel-details">
                  <span className="detail-item">
                    <span className="detail-icon">📍</span> Via Prato Pasquè 2
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">🛏️</span>{" "}
                    {isItalian ? "1 camera da letto" : "1 Bedroom"}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">💰</span> $$
                  </span>
                </div>
                <a
                  href="https://www.myhomeincomo.com/TheGallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hotel-link"
                >
                  {isItalian ? "Vedi dettagli →" : "View Details →"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-sources-section">
        <div className="container">
          <h2 className="section-title">{t.otherSourcesTitle}</h2>
          <p className="section-subtitle">{t.otherSourcesText}</p>

          <div className="sources-grid">
            <div className="source-card">
              <div className="source-logo">
                <img
                  src={myHomesInComoLogo}
                  alt="My Home In Como"
                  loading="lazy"
                />
              </div>
              <h3>My Home In Como</h3>
              <p>
                {isItalian
                  ? "Selezione curata di appartamenti di qualità nel centro di Como e nelle zone circostanti"
                  : "Curated selection of quality apartments in Como city center and surrounding areas"}
              </p>
              <a
                href="https://www.myhomeincomo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-link"
              >
                {t.visitWebsite}
              </a>
            </div>

            <div className="source-card">
              <div className="source-logo">
                <img src={bookingComLogo} alt="Booking.com" loading="lazy" />
              </div>
              <h3>Booking.com</h3>
              <p>
                {isItalian
                  ? "Ampia gamma di hotel, appartamenti e B&B con recensioni verificate e prenotazioni flessibili"
                  : "Wide range of hotels, apartments, and B&Bs with verified reviews and flexible booking"}
              </p>
              <a
                href="https://www.booking.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-link"
              >
                {t.visitWebsite}
              </a>
            </div>

            <div className="source-card">
              <div className="source-logo">
                <img src={airbnbLogo} alt="Airbnb" loading="lazy" />
              </div>
              <h3>Airbnb</h3>
              <p>
                {isItalian
                  ? "Case uniche ed esperienze ospitate da persone del posto in tutta la regione del Lago di Como"
                  : "Unique homes and experiences hosted by locals throughout the Lake Como region"}
              </p>
              <a
                href="https://www.airbnb.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-link"
              >
                {t.visitWebsite}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <div className="booking-card">
            <h2>
              {isItalian
                ? "Organizzare il vostro soggiorno"
                : "Planning Your Stay"}
            </h2>
            <div className="booking-tips">
              <div className="tip">
                <span className="tip-icon">📅</span>
                <div className="tip-content">
                  <h3>{isItalian ? "Prenotate in anticipo" : "Book Early"}</h3>
                  <p>
                    {isItalian
                      ? "Il Lago di Como è una destinazione turistica molto popolare. Vi consigliamo di prenotare il vostro alloggio il prima possibile."
                      : "Lake Como is a popular tourist destination. We recommend securing your accommodation as soon as possible."}
                  </p>
                </div>
              </div>
              <div className="tip">
                <span className="tip-icon">💬</span>
                <div className="tip-content">
                  <h3>
                    {isItalian ? "Avete bisogno di aiuto?" : "Need Help?"}
                  </h3>
                  <p>
                    {isItalian
                      ? "Se avete bisogno di assistenza con le prenotazioni o avete domande sulla zona, non esitate a contattarci. Saremo felici di aiutarvi!"
                      : "If you need assistance with bookings or have questions about the area, please don't hesitate to reach out to us. We're happy to help!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
