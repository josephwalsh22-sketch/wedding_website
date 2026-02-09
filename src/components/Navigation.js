import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import enFlag from "../images/en-flag.webp";
import itFlag from "../images/it-flag.webp";
import "./Navigation.scss";

const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <nav className={`navigation ${language === "it" ? "nav-italian" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">Cinzia & Joseph</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">{t.home}</Link>
          </li>
          <li>
            <Link to="/the-day">{t.theDay}</Link>
          </li>
          <li>
            <Link to="/getting-there">{t.gettingThere}</Link>
          </li>
          <li>
            <Link to="/accommodation">{t.accommodation}</Link>
          </li>
          <li>
            <Link to="/location">{t.lakeComo}</Link>
          </li>
          <li>
            <Link to="/rsvp">{t.rsvp}</Link>
          </li>
        </ul>
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === "en" ? (
            <>
              <img src={itFlag} alt="Italian flag" className="flag-icon" /> IT
            </>
          ) : (
            <>
              <img src={enFlag} alt="English flag" className="flag-icon" /> EN
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
