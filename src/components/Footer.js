import React from "react";
import "./Footer.scss";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-names">
          <span className="couple-initials">C & J</span>
        </div>
        <div className="footer-details">
          <p className="footer-date">
            {t.location} · {t.year}
          </p>
        </div>
        <div className="footer-message">
          <p>{t.message}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
