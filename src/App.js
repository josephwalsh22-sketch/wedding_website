import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.scss";

// Lazy load page components for better performance
const Home = lazy(() => import("./pages/Home"));
const TheDay = lazy(() => import("./pages/TheDay"));
const Accommodation = lazy(() => import("./pages/Accommodation"));
const Location = lazy(() => import("./pages/Location"));
const GettingThere = lazy(() => import("./pages/GettingThere"));
const RSVP = lazy(() => import("./pages/RSVP"));

// Loading component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navigation />
          <main className="main-content">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/the-day" element={<TheDay />} />
                <Route path="/accommodation" element={<Accommodation />} />
                <Route path="/location" element={<Location />} />
                <Route path="/getting-there" element={<GettingThere />} />
                <Route path="/rsvp" element={<RSVP />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
