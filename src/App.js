import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import Location from "./pages/Location";
import RSVP from "./pages/RSVP";
import GettingThere from "./pages/GettingThere";
import Photos from "./pages/Photos";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/location" element={<Location />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/getting-there" element={<GettingThere />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
