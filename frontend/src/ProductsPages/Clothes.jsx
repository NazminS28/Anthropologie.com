import "./Clothes.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Clothes = () => {
  const [cloth, setClothes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = (page) => {
    axios
      .get(
        `https://anthropologie-server-production.up.railway.app/new_clothing?_limit=12&_page=${page}`
      )
      .then((e) => {
        setLoading(true);
        console.log(e);
        setClothes(e.data);
      })
      .catch((r) => {
        setLoading(false);
        setError(true);
        console.log(r);
      });
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePageChange = (changeBy) => {
    setPage(page + changeBy);
  };

  const filterCloth = (e) => {
    const sorting = e.target.value;
    let arr = [...cloth];

    console.log("working the sort");
    if (sorting == "featured") {
      fetchData();
    }
    if (sorting === "low") {
      arr.sort((a, b) => a.price - b.price);
      setClothes(arr);
    }
    if (sorting === "high") {
      arr.sort((a, b) => b.price - a.price);
      setClothes(arr);
    }
    if (sorting === "asc") {
      arr.sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });
      setClothes(arr);
    }

    if (sorting === "dsc") {
      arr.sort(function (a, b) {
        if (b.title > a.title) return 1;
        if (b.title < a.title) return -1;
        return 0;
      });
      setClothes(arr);
    }
  };
  return (
    <div>
      <div className="mainbar">
        <div>
          <h2>DRESSES</h2>
          <img src="https://images.ctfassets.net/5de70he6op10/7jG36MSbANK4JfVQhSjRtF/6426c0e02280da606c21e1ccef9fc2e5/Fall_Site_Topper_1_LS.jpg?w=630&q=80&fm=webp" />
        </div>
        <div>
          <h2>PANTS</h2>
          <img src="https://images.ctfassets.net/5de70he6op10/558fy5SfamJIIkBQa3MARu/46185b890b51825214d5f74c4fbc9e8e/Fall_Site_Topper_2_LS.jpg?w=630&q=80&fm=webp" />
        </div>
        <div>
          <h2>JEANS</h2>
          <img src="https://images.ctfassets.net/5de70he6op10/2UDMcMxjbqwmwqFrGqKyz2/e4b6e269594e14ee1d677276b00fe4c4/Fall_Site_Topper_3_LS.jpg?w=630&q=80&fm=webp" />
        </div>
        <div>
          <h2>JACKETS </h2>
          <img src="https://images.ctfassets.net/5de70he6op10/63Bfse1VxFdjpyMH2w6i9m/385bd1c59648fd2373c30fae3ad1dcf9/Fall_Site_Topper_4_LS.jpg?w=630&q=80&fm=webp" />
        </div>
        <div>
          <h2>TOPS</h2>
          <img src="https://images.ctfassets.net/5de70he6op10/5v6fF2cEEnm45LRtoyYqNQ/63f35631b4ff5c6afeb1558a75b13967/Fall_Site_Topper_5_LS.jpg?w=630&q=80&fm=webp" />
        </div>
        <div>
          <h2>SWEATERS</h2>
          <img src="https://images.ctfassets.net/5de70he6op10/3WeHfkSEoOeCAnfmxsaHbr/d512eb559e1766178e269b0b6c229246/Fall_Site_Topper_6_LS.jpg?w=630&q=80&fm=webp" />
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <p>Browse by:</p>
          <hr />
          <h4>
            <a href="default.asp" target="_blank">
              Clothing
            </a>
          </h4>
          <h5>
            <a href="default.asp" target="_blank">
              New!
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Top-Rated
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Activewear
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Dresses
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Gateway & Resort Wear
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Intimates & Lingerie
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Jackets
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Jeans
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Jumpsuits
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Kimonos
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Loungewear
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Pants
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Petites
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Plus
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Sets
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Shorts
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Skirts
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Sleepwear
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Sweaters
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Swimwear
            </a>
          </h5>
          <h5>
            <a href="default.asp" target="_blank">
              Tops & Tees
            </a>
          </h5>
        </div>
        <div className="product">
          <div className="product-child1">
            <p>
              Women's Clothing{" "}
              <span
                style={{ fontSize: "12px", color: "grey", marginLeft: "10px" }}
              >
                {cloth.length} products
              </span>
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <label style={{ marginTop: "5px" }}>Sort:</label>
              <select className="select" onChange={filterCloth}>
                <option value="featured">Featured</option>
                <option value="low">Price:Low to High</option>
                <option value="high">Price:High to Low</option>
                <option value="asc">A-Z</option>
                <option value="dsc">Z-A</option>
              </select>
              <div style={{ marginLeft: "10px" }}>
                <button
                  disabled={page === 1}
                  onClick={() => handlePageChange(-1)}
                >
                  <ChevronLeftIcon w={10} h={10} />
                </button>
                {page}
                <button
                  disabled={page === 2}
                  onClick={() => handlePageChange(1)}
                >
                  {" "}
                  <ChevronRightIcon w={10} h={10} />
                </button>
              </div>
            </div>
          </div>
          {!loading && (
            <Spinner
              ml="40%"
              mt="13%"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
          <div className="clothData">
            {cloth.length > 0 &&
              cloth.map((data) => (
                <div key={data.id} className="cloth">
                  <Link to={`/cloth/${data.id}`}>
                    <div className="image">
                      <img src={data.image} alt="" />
                    </div>
                  </Link>
                  <div>
                    {" "}
                    <h1>{data.title}</h1>
                  </div>
                  <div>
                    <p>${data.price}</p>
                  </div>
                  {data.id % 2 == 0 ? (
                    <div style={{ display: "flex", marginTop: "5px" }}>
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                    </div>
                  ) : (
                    <div style={{ display: "flex", margintop: "10px" }}>
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                      <img
                        width="5%"
                        src="https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"
                      />
                    </div>
                  )}
                  <div style={{ display: "flex", marginTop: "10px" }}>
                    {" "}
                    {data.color?.map((colors, i) => (
                      <img
                        width="11%"
                        style={{
                          borderRadius: "50%",
                          marginLeft: "5px",
                          marginBottom: "20px",
                          border: "2px solid black",
                          cursor: "pointer",
                        }}
                        src={data.color[(colors, i)]}
                        alt="colorsimg"
                      ></img>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
