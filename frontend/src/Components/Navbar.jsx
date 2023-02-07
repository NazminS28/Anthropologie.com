import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { RiGlobeLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import "./Search.css";

import { getData } from "../utils/localStorage";

function Navbar() {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState("");
  const toast = useToast();
  const [query, setQuery] = React.useState("");
  const [data, setData] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const cartlength = getData("Cart");
    setCart(cartlength);
  }, []);

  const gotohome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    if (isAuth) {
      setAuth(!isAuth);
      setToken("");
    }
  };
  useEffect(() => {
    if (token) {
      setAuth(true);
      navigate("/");
    }
  }, [token]);

  const handleCreate = () => {
    const payload = {
      email,
      password,
      name,
    };

    fetch("https://ill-ray-cape.cyclic.app/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((er) => console.log(er));
  };

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    if (email === "admin@ostack.org" && password === "admin@321") {
      setAdmin(true);
      toast({
        title: "hello Admin",
        status: "success",
        duration: 3000,
        isClosable: true,
        color: "red",
      });
    } else {
      fetch("https://ill-ray-cape.cyclic.app/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          localStorage.setItem("psctoken", res.token);
          if (res.token) {
            setToken(res.token);
            toast({
              title: "Login Successfull",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else {
            alert(" wrong credentials");
            toast({
              title: "Login fail",
              status: "success",
              duration: 3000,
              isClosable: true,
              color: "red",
            });
          }
        })
        .catch((er) => console.log(er));
    }
  };

  useEffect(() => {
    fetch("https://ill-ray-cape.cyclic.app/todo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("psctoken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCart(res);
        console.log(res);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  console.log(data);
  React.useEffect(() => {
    if (query) {
      setTimeout(() => {
        axios
          .get(`https://stock-server.onrender.com/products?_limit=3&_page=1&q=${query}`)
          .then((r) => {
            setData(r.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, 800);
    }
  }, [query]);
  return (
    <div>
      {/* banner */}
      {/* {console.log(token)} */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "40px" }}>
          <div
            style={{ background: "rgb(29, 59, 102)" }}
            className="carousel-item active "
          >
            <div className="d-flex  justify-content-center">
              <p className={`${styles.para} ${styles.small}`}>
                The season's best look are as easy as 1,2,3
              </p>
              <p className={styles.para}>New: Summer,Naturally</p>
              <a className={styles.link} href="">
                Shop latest.
              </a>
            </div>
          </div>
          <div
            style={{ background: "rgb(175,26,26)" }}
            className="carousel-item"
          >
            <div className="d-flex  justify-content-center">
              <p className={`${styles.para} ${styles.small}`}>just added!</p>
              <p className={styles.para}>NEW SALE STYLES</p>
              <a className={styles.link} href="/">
                Shop, sale clothing, home & more
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          style={{ left: "-76px" }}
        >
          <span
            className="carousel-control-prev-icon"
            style={{ height: "1.5rem" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          style={{ marginRight: "0px", width: "50px" }}
        >
          <span
            className="carousel-control-next-icon"
            style={{ height: "1.5rem" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Sign-In/sign-up part */}

      <div
        className="d-flex justify-content-end align-items-center py-1"
        style={{ background: "#f7f6f2", height: "40px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "0px",
            marginRight: "15px",
          }}
        >
          <RiGlobeLine fontSize="20px" color="#2e80a1" />{" "}
          <span className={styles.spans}> English ($) </span>{" "}
          <MdOutlineKeyboardArrowDown fontSize="20px" color="#2e80a1" />
        </div>
        <div
          className="modal"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p className="text-center fs-2 mb-auto">Sign Up</p>
              <hr />
              <p
                style={{
                  fontFamily: "monospace",
                  marginTop: "10px",
                  marginLeft: "8px",
                  marginRight: "10px",
                }}
              >
                Sign in so you can save items to your wishlists, track your
                orders, and check out faster!
              </p>
              <div className="modal-body">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "90%%",
                    margin: "auto",
                    padding: "0.4%",
                    marginTop: "30px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <input
                    style={{ padding: "7px", border: "1px solid grey" }}
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <input
                    style={{ padding: "7px", border: "1px solid grey" }}
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    style={{ padding: "7px", border: "1px solid grey" }}
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <button
                    style={{
                      padding: "7px",
                      border: "1px solid grey",
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                      backgroundColor: "grey",
                      color: "white",
                      fontWeight: "550",
                    }}
                    onClick={handleCreate}
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    Create
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <p
                  className="text-center mx-auto"
                  style={{ fontFamily: "sans-serif" }}
                >
                  If Already Have An Account Click Sign In.
                </p>
                <button
                  className="btn btn-secondary d-grid col-10 row-2 mx-auto"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------sign in------------------------------ */}
        <div
          className="modal"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p className="text-center fs-1 mb-1">Sign In</p>
              <hr />
              <div className="modal-body">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "90%%",
                    margin: "auto",
                    padding: "0.4%",
                    marginTop: "30px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                >
                  <input
                    style={{ padding: "7px", border: "1px solid grey" }}
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    style={{ padding: "7px", border: "1px solid grey" }}
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <button
                    style={{
                      padding: "7px",
                      border: "1px solid grey",
                      fontFamily: "sans-serif",
                      fontSize: "16px",
                      backgroundColor: "grey",
                      color: "white",
                      fontWeight: "550",
                    }}
                    onClick={handleLogin}
                    data-bs-dismiss="modal"
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <p className="text-center mx-auto">
                  If Don't Have An Account Click Create An Account.
                </p>
                <button
                  className="btn btn-secondary d-grid col-10 row-2 mx-auto"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  CREATE AN ACCOUNT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
        <div style={{ marginTop: "0px" }}>
          <AiOutlineUser fontSize="24px" color="#2e80a1" />
        </div>{" "}
        <div style={{ marginTop: "18px" }} className={`me-5 ${styles.cont}`}>
          {isAuth ? (
            <span onClick={handleLogout} className={styles.spans}>
              SignOut
            </span>
          ) : (
            <span
              role="button"
              href="#exampleModalToggle"
              data-bs-toggle="modal"
              className={styles.spans}
            >
              {" "}
              SignIn
            </span>
          )}
        </div>
      </div>

      {/* Search-area */}
      <div
      // style={{ border:"10px soild red" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className="antropology"
            style={{
              border: "10px soild red",
              display: "flex",
              width: "28%",
              justifyContent: "space-between",
              marginLeft: "20px",
            }}
          >
            <div
              onClick={gotohome}
              style={{
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <a href="">
                <img
                  width="95%"
                  style={{ padding: "22px" }}
                  src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div
              id="antropologie"
              style={{
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <a href="">
                <img
                  style={{ padding: "15px" }}
                  width="120%"
                  src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "80px" }}>
            <form action="" className="mx-4">
              <div className="input-group" style={{ paddingTop: "7px" }}>
                <input
                  type="text"
                  className=" form-control-lg"
                  placeholder="Search Anthropologie"
                  style={{
                    fontSize: "14px",
                    outline: "none",
                    border: "1px solid #d3d3d3",
                  }}
                  onChange={handleSearch}
                />
                <button
                  type="submit"
                  className="input-group-text"
                  style={{ background: "white" }}
                >
                  <AiOutlineSearch color="#77a0b2" fontSize="23px" />
                </button>
              </div>
            </form>
            <Link to="/cartPage">
              <div style={{ paddingTop: "10px" }}>
                <Link to="/cartPage">
                  <BsHandbag color="#2e80a1" fontSize="25px" />
                </Link>
              </div>
              <span className="translate-middle badge rounded-pill bg-danger">
                {cart.length == 0 ? 0 : cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Link>
          </div>
        </div>
        {data.length > 0 && (
          <div
            style={{
              width: "18%",
              borderRadius: "10px",
              borderTop: "1px solid grey",
              zIndex: "3",
              display: "grid",
              position: "absolute",
              left: "72.6%",
              top: "120px",
              backgroundColor: "#EDF2F7",
            }}
          >
            <Link to="cloth">
              {" "}
              <p
                onClick={() => setData([])}
                style={{
                  paddingLeft: "5px",
                  fontFamily: "sans-serif",
                  paddingTop: "10px",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                Trending
              </p>
            </Link>
            {data.length > 0 &&
              data.map((item) => (
                <Link to={`/gardens/${item.id}`}>
                  {" "}
                  <p onClick={() => setData([])} className="searchTitle">
                    {item.name}
                  </p>
                </Link>
              ))}
            <p
              onClick={() => setData([])}
              style={{
                paddingLeft: "5px",
                fontFamily: "sans-serif",
                paddingTop: "10px",
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "12px",
              }}
            >
              Category
            </p>
            <div className="icon">
              <Link to="/shoes">
                {" "}
                <h2 onClick={() => setData([])} className="iconh">
                  <SearchIcon fontSize="12px" /> shoes
                </h2>{" "}
              </Link>
              <Link to="/furniture">
                <h2 onClick={() => setData([])} className="iconh">
                  <SearchIcon fontSize="12px" /> furniture
                </h2>{" "}
              </Link>
              <Link to="gardens">
                {" "}
                <h2 onClick={() => setData([])} className="iconh">
                  <SearchIcon fontSize="12px" /> gardens
                </h2>{" "}
              </Link>
              <Link to="/sale">
                {" "}
                <h2 onClick={() => setData([])} className="iconh">
                  <SearchIcon fontSize="12px" /> sale
                </h2>{" "}
              </Link>
            </div>
            <h2
              style={{
                marginTop: "10px",
                paddingLeft: "5px",
                textDecoration: "underline",
                fontFamily: "sans-serif",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "12px",
              }}
            >
              Product Image
            </h2>
            <div className="searchImage">
              {" "}
              {data.length > 0 &&
                data.map((item) => (
                  <Link to={`/cloth/${item.id}`}>
                    {" "}
                    <img
                      className="searchimg"
                      onClick={() => setData([])}
                      width="80%"
                      src={item.image}
                    />
                  </Link>
                ))}
            </div>
          </div>
        )}
        <hr />

        <div className={"navnav"} style={{ borderBottom: "1px solid #d3d3d3" }}>
          <div className="d-flex" style={{ margin: "auto", width: "100%" }}>
            <ul className={styles.lists}>
              <li style={{ color: "pink" }}>
                <Link to=""> Gifts</Link>
              </li>
              <li>
                <Link to=""> New!</Link>
              </li>
              <li>
                <Link to=""> Gift for Mom</Link>
              </li>
              <li>
                <Link to=""> Dresses</Link>
              </li>
              <li>
                <Link to="/cloth"> Clothing</Link>
              </li>
              <li>
                <Link to="/shoes"> Shoes</Link>
              </li>
              <li>
                <Link to=""> Accessories</Link>
              </li>
              <li>
                <Link to="furniture"> Home & Furniture</Link>
              </li>
              <li>
                <Link to=""> Beauty & Wellness</Link>
              </li>
              <li>
                <Link to="gardens"> Garden & Outdoor</Link>
              </li>
              <li>
                <Link to=""> Weddings</Link>
              </li>
              <li>
                <Link to="sale"> Sale</Link>
              </li>
              <li>
                {admin && (
                  <Link to="/admin">
                    <h1 style={{ color: "red", fontWeight: "650" }}>Admin</h1>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {/* <MenSubNav/> */}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Navbar;
