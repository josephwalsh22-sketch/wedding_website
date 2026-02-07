import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "./Location.scss";
import varennaPanorama from "../images/varenna-panorama.webp";
import lakeBellagio from "../images/lake-como-bellagio.webp";
import lakeNesso from "../images/lake-como-nesso.webp";
import ferries from "../images/ferries.webp";
import pizzocheri from "../images/foods/pizzocheri.jpeg";
import ossobuco from "../images/foods/ossobuco.jpg";
import risotto from "../images/foods/risotto.jpeg";
import cotoletta from "../images/foods/cotoletta.jpeg";
import polenta from "../images/foods/polenta.jpg";
import tagliatelle from "../images/foods/tagliatelle.jpeg";
import comoCity from "../images/como-city.webp";
import brunate from "../images/brunate.webp";

const Location = () => {
  const { language } = useLanguage();
  const t = translations[language].location;

  return (
    <div className="lakecomo-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${varennaPanorama})` }}
      >
        <div className="header-overlay">
          <h1>{t.title}</h1>
          <p className="header-subtitle">{t.subtitle}</p>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <p className="intro-text">{t.introText}</p>
        </div>
      </section>

      <section className="exploring-section">
        <div className="container">
          <h2 className="section-title">{t.exploringComoTitle}</h2>

          <div className="content-with-image">
            <div className="floating-image-right">
              <img
                src={comoCity}
                alt="Como city"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>{t.comoPara1}</p>

            <p>{t.comoPara2}</p>

            <div className="floating-image-left">
              <img
                src={brunate}
                alt="Brunate hillside village"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>{t.comoPara3}</p>
          </div>

          <h3 className="subsection-title">{t.restaurantsTitle}</h3>

          <div className="recommendations-grid">
            <div className="recommendation-card">
              <h4>Bar Krudo</h4>
              <p className="recommendation-type">Italian Bar & Cafe</p>
              <p>
                Located on the beautiful Piazza Alessandro Volta, this Italian
                bar and cafe is perfect for drinks and casual dining with a view
                of the lake.
              </p>
            </div>

            <div className="recommendation-card">
              <h4>Osteria del Gallo</h4>
              <p className="recommendation-type">Traditional Osteria</p>
              <p>
                One of Como's last true osterias, run for 41 years by Giuseppe
                De Toma and family. Authentic old-world atmosphere with daily
                changing menu based on seasonal ingredients. Specialties include
                fresh ravioli, pizzoccheri, braised meats with polenta, lake
                fish, and homemade desserts. Extensive wine selection.
              </p>
            </div>

            <div className="recommendation-card">
              <h4>Bar Hemingway</h4>
              <p className="recommendation-type">Cocktail Bar & Restaurant</p>
              <p>
                A cozy, intimate cocktail bar that's been a historical landmark
                for over 20 years. Offers seasonal menu with selected background
                music creating a unique atmosphere. Features a cozy gazebo on
                beautiful Piazza Volta during summer.
              </p>
            </div>

            <div className="recommendation-card">
              <h4>Pronobis</h4>
              <p className="recommendation-type">Wine Shop & Eatery</p>
              <p>
                A wine shop and eatery specializing in wines from small Italian
                producers, featuring natural, organic, and biodynamic options.
                Kitchen open daily for lunch and Saturday evenings with seasonal
                menu. Also offers artisanal cheeses, cured meats, and local
                products.
              </p>
            </div>

            <div className="recommendation-card">
              <h4>Ristorante Osteria dal Pain</h4>
              <p className="recommendation-type">Traditional Local Cuisine</p>
              <p>
                A true institution in Como's local restaurant tradition with
                Lake Como as its backdrop. Offers authentic regional fare
                combining local ingredients with traditional Italian culinary
                excellence.
              </p>
            </div>

            <div className="recommendation-card">
              <h4>Caffè Maya</h4>
              <p className="recommendation-type">Café & Coffee Roastery</p>
              <p>
                Artisan coffee roastery with multiple locations in Como. Perfect
                for a quick drink at the bar or to enjoy their famous Italian
                hot chocolate. Known for quality coffee and cozy atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="recommended-plates-section">
        <div className="container">
          <h3 className="subsection-title">{t.recommendedPlatesTitle}</h3>

          <p className="intro-text">{t.platesIntro}</p>

          <div className="plates-grid">
            <div className="plate-card">
              <img
                src={pizzocheri}
                alt="Pizzoccheri"
                className="plate-image"
                loading="lazy"
              />
              <h4>Pizzoccheri</h4>
              <p>
                A hearty buckwheat pasta dish from the nearby Valtellina valley,
                layered with potatoes, cabbage, garlic, and generous amounts of
                local cheese (usually Casera and Bitto), finished with butter
                and sage. Perfect for cooler mountain evenings.
              </p>
            </div>

            <div className="plate-card">
              <img
                src={ossobuco}
                alt="Ossobuco"
                className="plate-image"
                loading="lazy"
              />
              <h4>Ossobuco</h4>
              <p>
                Braised veal shanks cooked slowly in white wine, broth, and
                vegetables until the meat is fall-off-the-bone tender.
                Traditionally served with risotto alla milanese or polenta, and
                topped with gremolata (lemon zest, garlic, and parsley).
              </p>
            </div>

            <div className="plate-card">
              <img
                src={risotto}
                alt="Risotto alla Milanese"
                className="plate-image"
                loading="lazy"
              />
              <h4>Risotto alla Milanese</h4>
              <p>
                The iconic golden risotto from nearby Milan, colored and
                flavored with saffron. Creamy and luxurious, made with butter,
                Parmigiano-Reggiano, and bone marrow. Often served alongside
                ossobuco but delicious on its own.
              </p>
            </div>

            <div className="plate-card">
              <img
                src={cotoletta}
                alt="Cotoletta alla Milanese"
                className="plate-image"
                loading="lazy"
              />
              <h4>Cotoletta alla Milanese</h4>
              <p>
                A breaded veal cutlet, pounded thin and fried in butter until
                golden and crispy. Similar to Wiener schnitzel but with its own
                Milanese character. Simple, classic, and utterly satisfying.
              </p>
            </div>

            <div className="plate-card">
              <img
                src={polenta}
                alt="Polenta"
                className="plate-image"
                loading="lazy"
              />
              <h4>Polenta</h4>
              <p>
                A cornerstone of northern Italian mountain cuisine, this
                cornmeal porridge is served soft and creamy or cooled and
                grilled. Often accompanied by braised meats, mushrooms, or local
                cheeses. Look for polenta taragna, made with buckwheat flour for
                extra flavor.
              </p>
            </div>

            <div className="plate-card">
              <img
                src={tagliatelle}
                alt="Tagliatelle con Porcini"
                className="plate-image"
                loading="lazy"
              />
              <h4>Tagliatelle con Porcini</h4>
              <p>
                Fresh ribbon pasta tossed with porcini mushrooms, a prized
                ingredient from the alpine forests. The earthy, aromatic
                mushrooms are typically sautéed with garlic, parsley, and a
                touch of cream or butter. A celebration of the region's foraging
                traditions and autumn harvest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="exploring-lake-section">
        <div className="container">
          <h2 className="section-title">{t.exploringLakeTitle}</h2>

          <div className="content-with-image">
            <div className="floating-image-left">
              <img
                src={lakeBellagio}
                alt="Bellagio on Lake Como"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>{t.lakePara1}</p>

            <p>{t.lakePara2}</p>

            <div className="floating-image-right">
              <img
                src={lakeNesso}
                alt="Nesso waterfall"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>{t.lakePara3}</p>

            <p>{t.lakePara4}</p>
          </div>
        </div>
      </section>

      <section className="transport-section">
        <div className="container">
          <div className="travel-card local-transport-card">
            <h2>{t.localTransportTitle}</h2>
            <p className="section-intro">{t.transportIntro}</p>

            <div className="content-with-image">
              <div className="floating-image-right">
                <img
                  src={ferries}
                  alt="Lake Como ferries and boats"
                  className="travel-map"
                />
              </div>

              <div className="transport-info">
                <h3>{t.boatsTitle}</h3>
                <p>{t.boatsPara1}</p>
                <p>{t.boatsPara2}</p>
                <p>{t.boatsPara3}</p>
              </div>

              <div className="transport-info">
                <h3>{t.busesTitle}</h3>
                <p>{t.busesPara1}</p>
                <p>{t.busesPara2}</p>
              </div>

              <div className="transport-info">
                <h3>{t.taxisTitle}</h3>
                <p>{t.taxisPara1}</p>
                <p>{t.taxisPara2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
