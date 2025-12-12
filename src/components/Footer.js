import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-names">
          <span className="couple-initials">J & C</span>
        </div>
        <div className="footer-details">
          <p className="footer-date">Lake Como, Italy · 2025</p>
        </div>
        <div className="footer-message">
          <p>With love and anticipation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

