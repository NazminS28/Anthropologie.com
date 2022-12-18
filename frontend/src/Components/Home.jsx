import React, { useEffect, useState } from "react";
import { Slider } from "./Slider";
import "./Homemodule.css";

const Home = () => {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    fetch(
      ` https://anthropologie-server-production.up.railway.app/new_clothing`
    )
      .then((res) => res.json())
      .then((d) => setdata(d));

    fetch(` https://stock-server.onrender.com/lamps`)
      .then((res) => res.json())
      .then((d) => setdata1(d));
  }, []);

  return (
    <div>
      <div id="offer">
        <img
          src="https://images.ctfassets.net/5de70he6op10/g4Rao5dp4XYh9mHJ31Mku/d4fa659fb2753c2aba8ff20538ba126f/121322_Upto50Off_SelectGifting_HPGSecondaryBanner_LS.jpg?w=2882&q=80&fm=webp"
          alt=""
        />
      </div>
      <div id="main1">
        <div id="one">
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/3RVZ7uybOuPPShdGFMqT8v/b5959346a8523c91664dd622f29f0b42/LL_M1b.jpg?w=856&q=80&fm=webp"
              alt=""
            />

            <button>
              <a href="">See What's New</a>
            </button>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/2FN1eYunGjb7iEefWXUqzL/9ebe26aa22ab3e675b1f27195af512f6/LL_M1e.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href="">Shop Dresses</a>
            </button>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/575n66TNKySGUMZHoEPyk1/a8c0be74eb5f6fb558385a19b5cfc120/LL_M1d.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href="">Visit The Gateway Shop</a>
            </button>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/7xr3zj76r8uzB0cWfUrKQR/ed4322b5e2ed657b06321686489bb645/LS_M3_Home_Thursday.jpg?w=2640&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href="">New collection: Party-Ready & Ready to ship</a>
            </button>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/1UtgIRn3AHo7yfB3CsbYdw/ced16c178459bc64efcf64a82422808b/LL_M1a.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href="">See what's new</a>
            </button>
          </div>
        </div>
        <div id="two">
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/29ixjcb2lf5i9QNbF0PWJq/6548be3127a3a13e7b4f13e6f029d059/LL_M1c.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href=""> Shop Accessories</a>
            </button>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/4zCA1PXpVLBKmHSl7Od02R/1b5efdb8c8bb14c2edfa17d49818a4b5/LL_M1f.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href="">Shop Tops</a>
            </button>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/7jPtxFsyU2ZHnQnEMa223v/36cd69a86c3d89e4f0d7ac2ecd2bc76d/RR_Candle.jpg?w=856&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href="">Shop Candles</a>
            </button>
          </div>
        </div>
        <div id="three">
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/5sDk11qKleSdvIOvZc35OD/3eee309aaddeabaa38696b5c92e526a2/4th-Row-2UP_Shop-All.jpg?w=1301&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href="">Shop the look</a>
            </button>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/6zS5hd8iXJvVo6XdWajuVz/e1938a3f0f4a368c3a42cefe3ae7f37b/4th-Row-2UP_New-Apparel-_-Accessories.jpg?w=1301&q=80&fm=webp"
              alt=""
            />
            <button>
              <a href="">Shop clothing & Accessories</a>
            </button>
          </div>
        </div>
      </div>
      <div id="Top">
        <p>Top Viewed</p>
      </div>
      <Slider data={data} />
      <div id="beauty">
        <img
          src="https://images.ctfassets.net/5de70he6op10/6smg43UznC0EXEEvtUZOeK/2d857986576d95ecf780716a37fc0b77/LS_M5_BHLDN.jpg?w=2641&q=80&fm=webp"
          alt=""
        />
      </div>
      <div id="Recent">
        <p>Recently Searched</p>
      </div>
      <Slider data={data1} />

      <div className="lower">
        <div className="exploreData">
          <div className="udiv">
            <p>More to Explore</p>
          </div>
          <div className="exInfo">
            <div>
              <div className="exImg">
                <img src="https://images.ctfassets.net/5de70he6op10/6fqnRygHuJSypTKaxojLDC/62dd14b7b808b58a09012c535a6bbb8d/041122_HPG_MTE_DenimShop.jpg?w=856&q=80&fm=webp" />
              </div>
              <div>
                <div>
                  <h2 className="little">Good Jeans: The Denim Fit Guide</h2>
                </div>
                <div className="h4div">
                  <h4>
                    Introducing the perfect pairs for every <em>wear</em>. From
                    rise to size, here's how to find your new favorite jeans.
                  </h4>
                </div>
              </div>
              <div className="atag">
                <a href="">Find your fit</a>
              </div>
            </div>
            <div>
              <div className="exImg">
                <img src="https://images.ctfassets.net/5de70he6op10/5z1SzJjtkNuitP2HKuc7Ww/4f0f76621a8587e50d4b9e96a30edf36/041122_HPG_MTE_GreaterGood.jpg?w=856&q=80&fm=webp" />
              </div>
              <div>
                <div>
                  <h2 className="little">
                    <u>A</u> Greater Good
                  </h2>
                </div>
                <div className="h4div">
                  <h4>
                    Our priority: to be a force for good,{" "}
                    <em>a greater good</em>, in better service of our planet,
                    its people, and our products.
                  </h4>
                </div>
              </div>
              <div className="atag">
                <a href="">learn more about our journey</a>
              </div>
            </div>
            <div>
              <div className="exImg">
                <img src="https://images.ctfassets.net/5de70he6op10/54SroRrXp9QpYMEn5Zqrvp/c91bcee7f1aad1f53f8ce017576e8985/041122_HPG_MTE_SpringHomeJournal.jpg?w=856&q=80&fm=webp" />
              </div>
              <div>
                <div>
                  <h2 className="little">The Story of Home</h2>
                </div>
                <div className="h4div">
                  <h4>
                    From front (door) to back(yard), we're reading{" "}
                    <em>between</em> the herringbone-inspired lines and
                    handwoven cords of our outdoor collection for spring.
                  </h4>
                </div>
              </div>
              <div className="atag">
                <a href="">shop the collection</a>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div>
            <h2>About Us</h2>
            <h4>
              Our mission at Anthropologie has always been to surprise and
              delight you with unexpected, distinctive finds for your closet and
              home. We source and craft all of our products with care, ensuring
              that any treasure you find at Anthropologie is unique, just like
              you. Explore our dress shop to find styles and fits perfect for
              any occasi...
            </h4>
          </div>
          <p className="atag">
            <a href="">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
