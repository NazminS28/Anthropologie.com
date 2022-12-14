import React, { useEffect, useState } from "react";
import { Slider } from "./Slider";
import "./Homemodule.css";

const Home = () => {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);

  return (
    <div className="home-container">
      <div className="upper">
        <div className="upleft">
          <div className="full">
            <img src="https://images.ctfassets.net/5de70he6op10/6O4o9CPoov1N3SUAzpVx0J/5a33425eac3c498bc66a2d0aa4795c67/050222_HPG_LS_M1.jpg?w=1756&q=80&fm=webp" />
            <div className="fullBtn">
              <div className="btn1">
                <a href="" className="firsta">
                  Shop New Arrivals
                </a>
              </div>
            </div>
          </div>
          <div className="mid">
            <div className="midimage">
              <img src="https://images.ctfassets.net/5de70he6op10/2cIhOhx0EenQ1hIURAWLK7/7f322ffde6eb24472f9454e18f457027/050222_HPG_2UP_Dresses.jpg?w=856&q=80&fm=webp" />
              <div className="midBtn">
                <div className="btn2">
                  <a href="" className="firsta">
                    Shop Dresses
                  </a>
                </div>
              </div>
            </div>
            <div className="midimage">
              <img src="https://images.ctfassets.net/5de70he6op10/j4jfRLSCojibA9tLTz7tq/fe904a67d777bf6af9da224f0e5c227f/050222_HPG_2UP_Sets.jpg?w=856&q=80&fm=webp" />
              <div className="midBtn">
                <div className="btn3">
                  <a href="" className="firsta">
                    Shop Skirts
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full">
            <img src="https://images.ctfassets.net/5de70he6op10/4L4MxwDigk4N40JIiWpXeq/264edf2c0e8af695014b8e0c7ad392dd/050222_HPG_LS_M2.jpg?w=1756&q=80&fm=webp" />
            <div className="two">
              <div className="btn4">
                <a href="" className="firsta">
                  Raise a glass
                </a>
              </div>
              {/* <div className="btn45">
                <a href="" className="firsta">
                  Get the cocktail recipes
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="up-right">
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/52bbfxp2kzymVZ339bWds3/8ba1fffd453536dfd180e1f2dccd6d19/050222_HPG_RR_Kitchen_Dining.jpg?w=856&q=80&fm=webp" />
            <div className="rightBtn">
              {/* <div className="btn22">
                <a href="" className="firsta">
                  shop kitchen & dining
                </a>
              </div> */}
            </div>
          </div>
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/21TPmULTbJZbOoJvpDT6hF/cc9481d1d4b7952946247c563f7a742c/050222_HPG_RR_MarkSikes.jpg?w=856&q=80&fm=webp" />
            <div className="rightBtn">
              {/* <div className="btn33">
                <a href="" className="firsta">
                  shop the Mark D. Sikes collection
                </a>
              </div> */}
            </div>
          </div>
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/3Fp3TqyVqgSjPQZthY3sFD/9386f17ed897837b78eb461bf903c72a/050222_HPG_RR_Swim.jpg?w=856&q=80&fm=webp" />
            <div className="rightBtn">
              {/* <div className="btn44"> */}
                {/* <a href="" className="firsta">
                  shop swim
                </a> */}
              {/* </div> */}
            </div>
          </div>
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/znSM83ZPZIn5qwRZyUZRR/65849a331166953a2cc1aa24c862afcd/050222_HPG_RR_Bags.jpg?w=856&q=80&fm=webp" />
            <div className="rightBtn">
              {/* <div className="btn55">
                <a href="" className="firsta">
                  shop bags
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <img src="https://images.ctfassets.net/5de70he6op10/7DEijhrVDU6Yq9fW3H4NYu/1ccd807faed448b9ca75bac79944b9c5/050222_HPG_LS_M3.jpg?w=2694&q=80&fm=webp" />
        <div className="rightBtn">
          {/* <div className="btn10">
            <a href="" className="firsta">
              visit the getaway shop
            </a>
          </div> */}
        </div>
      </div>
      <div className="udivslider">
        <p>You May Also Like</p>
      </div>
      <Slider data={data} />
      <div className="udivslider">
        <p>Trending Now</p>
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
