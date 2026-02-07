import React from "react";
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
  return (
    <div className="lakecomo-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${varennaPanorama})` }}
      >
        <div className="header-overlay">
          <h1>Lake Como</h1>
          <p className="header-subtitle">Explore the Area</p>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <p className="intro-text">
            Lake Como is one of Italy's most enchanting destinations, nestled in
            the foothills of the Alps. Known for its dramatic scenery, elegant
            villas, and charming lakeside towns, it has been a retreat for
            artists, writers, and celebrities for centuries. Whether you're
            exploring the cobblestone streets of Como city, taking a boat to
            picturesque villages, or simply enjoying an aperitivo by the water,
            Lake Como offers unforgettable experiences at every turn.
          </p>
        </div>
      </section>

      <section className="exploring-section">
        <div className="container">
          <h2 className="section-title">Exploring Como City</h2>

          <div className="content-with-image">
            <div className="floating-image-right">
              <img
                src={comoCity}
                alt="Como city"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>
              Como is a pretty little city nestled amongst the foothills of the
              Alps, with the stunning backdrop of Lake Como creating a
              picturesque setting. The historic center is a delightful maze of
              narrow cobblestone streets, lined with elegant clothes shops,
              inviting cafes, lively bars, and authentic restaurants.
            </p>

            <p>
              Take a leisurely walk along the lakefront promenade, where you can
              enjoy spectacular views all the way to the charming village of
              Cernobbio—an easy and scenic stroll. Visit the magnificent Duomo
              di Como, the city's historic cathedral that beautifully blends
              Gothic and Renaissance architecture.
            </p>

            <div className="floating-image-left">
              <img
                src={brunate}
                alt="Brunate hillside village"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>
              For breathtaking panoramic views, take the funicular railway up to
              Brunate, a hillside village offering stunning vistas of the lake
              and surrounding mountains. Art and history enthusiasts can explore
              Como's beautiful villas, such as the neoclassical Villa Olmo with
              its lakeside gardens and rotating art exhibitions.
            </p>
          </div>

          <h3 className="subsection-title">Recommended Restaurants & Bars</h3>

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
          <h3 className="subsection-title">Recommended Plates</h3>

          <p className="intro-text">
            Como's cuisine reflects its location in the foothills of the Alps,
            blending mountain and alpine traditions with northern Italian
            flavors. The region is known for hearty, rustic dishes that showcase
            local ingredients like polenta, lake fish, and rich meats. Here are
            some must-try traditional dishes during your visit:
          </p>

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
          <h2 className="section-title">Exploring Lake Como</h2>

          <div className="content-with-image">
            <div className="floating-image-left">
              <img
                src={lakeBellagio}
                alt="Bellagio on Lake Como"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>
              Lake Como is dotted with picturesque villages, all easily
              accessible by boat from the ferry terminal in Como city. Each
              village offers its own unique charm and character, making boat
              hopping a delightful way to explore the region.
            </p>

            <p>
              Bellagio, the main tourist attraction, is known as the "Pearl of
              Lake Como" and sits at the point where the lake splits into two
              branches. This beautiful village enchants visitors with its
              winding cobblestone streets, colorful buildings, elegant gardens,
              and stunning lakeside views.
            </p>

            <div className="floating-image-right">
              <img
                src={lakeNesso}
                alt="Nesso waterfall"
                className="explore-image"
                loading="lazy"
              />
            </div>

            <p>
              Closer to Como, you'll find charming Torno, a very pretty village
              perfect for a peaceful visit, and Cernobbio with its lovely
              lakefront promenade. Further up the lake, Bellano features a
              dramatic large waterfall, while Varenna captivates with its
              beautiful waterfront lined with pastel-colored houses.
            </p>

            <p>
              For a unique cultural experience, visit the historic Abbazia
              Cistercense di Santa Maria di Piona, a Cistercian monastery high
              up the lake dating back to 1138. This peaceful sanctuary offers a
              glimpse into centuries of monastic life and stunning views of the
              surrounding landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="transport-section">
        <div className="container">
          <div className="travel-card local-transport-card">
            <h2>Local Transportation</h2>
            <p className="section-intro">
              Once at Lake Como, boats, buses and taxis are the primary means of
              transportation between towns. The villa is easily accessible by
              foot from anywhere in Como city and from the pier, if you stay in
              another village and take a boat.
            </p>

            <div className="content-with-image">
              <div className="floating-image-right">
                <img
                  src={ferries}
                  alt="Lake Como ferries and boats"
                  className="travel-map"
                />
              </div>

              <div className="transport-info">
                <h3>Boats</h3>
                <p>
                  Boats are cheap and affordable. Every town has a pier and
                  boats are relatively frequent. There is a fast boat
                  (hydrofoil) that is convenient if journeying higher up the
                  lake (beyond Bellagio), but it sells out fast and you cannot
                  book boat tickets online.
                </p>
                <p>
                  If you plan to travel higher up the lake, you should get up
                  early on the day and go to the pier to book the fast boat.
                </p>
                <p>The boat service typically ends at 22:00.</p>
              </div>

              <div className="transport-info">
                <h3>Buses</h3>
                <p>
                  Buses are also a cheap and convenient way to travel around the
                  lake. They are not as frequent as boats but they are a good
                  option if you want to avoid the crowds at the pier.
                </p>
                <p>The bus service typically ends at 00:00.</p>
              </div>

              <div className="transport-info">
                <h3>Taxis</h3>
                <p>
                  Taxis are readily available but very expensive. A fifteen
                  minute journey can cost €60.
                </p>
                <p>
                  Uber and other taxi-like services are not readily available or
                  reliable in Como.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
