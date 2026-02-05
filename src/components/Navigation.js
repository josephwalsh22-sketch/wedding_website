import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">Cinzia & Joseph</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/the-day">The Day</Link>
          </li>
          <li>
            <Link to="/getting-there">Getting There</Link>
          </li>
          <li>
            <Link to="/accommodation">Accommodation</Link>
          </li>
          <li>
            <Link to="/location">Lake Como</Link>
          </li>
          <li>
            <Link to="/rsvp">RSVP</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
