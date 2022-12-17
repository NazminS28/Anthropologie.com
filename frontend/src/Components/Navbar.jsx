import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { RiGlobeLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/action";
import MenSubNav from "./Dropedown";


import { getData } from "../utils/localStorage";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setformData] = useState({});
  const [formData1, setformData1] = useState({});
  const [passtype, setpasstype] = useState(false);
  const isAuth = useSelector((state) => state.isAuth);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartlength = getData("Cart")
    setCart(cartlength);
  }, []);

  const gotohome = () => {
    navigate("/");
  };
  const handleChange = (e) => {
    const inputName = e.target.name;
    setformData({ ...formData, [inputName]: e.target.value });
  };
  const handleLogout = () => {
    dispatch(loginFailure());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.first === undefined ||
      formData.last === undefined ||
      formData.email === undefined ||
      formData.password === undefined
    ) {
      alert("Fill all Fields");
    } else {
      localStorage.setItem("login", JSON.stringify(formData));
    }
  };

  const handleChange1 = (e) => {
    const inputName1 = e.target.name;
    setformData1({ ...formData1, [inputName1]: e.target.value });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    let data1 = JSON.parse(localStorage.getItem("login"));
    if (
      data1.email === formData1.email &&
      data1.password === formData1.password1
    ) {
      alert("Sign up Successful");
      dispatch(loginSuccess("4579438"));
      navigate("/cart");
    } else {
      alert("Login Fail");
    }
  };
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
            style={{ background:"rgb(29, 59, 102)" }}
            className="carousel-item active "
          >
            <div className="d-flex  justify-content-center">
              <p className={`${styles.para} ${styles.small}`}>
                The season's best look are as easy as 1,2,3
              </p>
              <p className={styles.para}>New: Summer,Naturally</p>
              <a className={styles.link} href="">
                shop the latest edit
              </a>
            </div>
          </div>
          <div style={{ background: "rgb(175,26,26)" }} className="carousel-item">
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
          style={{marginRight:"0px",width:"50px"}}
        >
          <span
            className="carousel-control-next-icon"
            style={{ height: "1.5rem"}}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"  >Next</span>
        </button>
      </div>

      {/* Sign-In/sign-up part */}

      <div
        className="d-flex justify-content-end align-items-center py-1"
        style={{ background: "#f7f6f2",height:"40px" }}>
        <div style={{display:"flex",flexDirection:"row",marginTop:"0px",marginRight:"15px"}}>
          <RiGlobeLine fontSize="20px"  color="#2e80a1" />{" "}
          <span className={styles.spans} > English ($) </span>{" "}
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
              <p className="text-center text-sm-start-center px-4 mt-auto">
                Sign in so you can save items to your wishlists, track your
                orders, and check out faster!
              </p>
              <div className="modal-body">
                <div className={style.style2}>
                  <form className={style.form} onSubmit={handleSubmit}>
                    <p>FIRST NAME</p>
                    <input
                      required
                      onChange={handleChange}
                      name="first"
                      type="text"
                      className={style.style3}
                      style={{ textTransform: "capitalize" }}
                    />
                    <p>LAST NAME</p>
                    <input
                      required
                      onChange={handleChange}
                      name="last"
                      type="text"
                      className={style.style3}
                      style={{ textTransform: "capitalize" }}
                    />
                    <p>EMAIL</p>
                    <input
                      required
                      onChange={handleChange}
                      name="email"
                      type="email"
                      className={style.style3}
                    />
                    <p>PASSWORD</p>
                    <input
                      onChange={handleChange}
                      name="password"
                      type={!passtype ? "password" : "text"}
                      className={style.style3}
                    />
                    <FaRegEye
                      style={{ marginLeft: "-30px", cursor: "pointer" }}
                      onClick={() => {
                        setpasstype(!passtype);
                      }}
                    ></FaRegEye>
                    <p></p>
                    <input
                      required
                      type="submit"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      value="Create"
                      className={style.style4}
                    />
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <p className="text-center mx-auto">
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
                <div className={style.style2}>
                  <form className={style.form} onSubmit={handleSubmit1}>
                    <p>EMAIL</p>
                    <input
                      required
                      onChange={handleChange1}
                      name="email"
                      type="email"
                      className={style.style3}
                    />
                    <p>PASSWORD</p>
                    <input
                      required
                      onChange={handleChange1}
                      name="password1"
                      type={!passtype ? "password" : "text"}
                      className={style.style3}
                    />
                    <FaRegEye
                      style={{ marginLeft: "-30px", cursor: "pointer" }}
                      onClick={() => {
                        setpasstype(!passtype);
                      }}
                    ></FaRegEye>

                    <p></p>
                    <input
                      data-bs-dismiss="modal"
                      onSubmit={handleSubmit1}
                      type="submit"
                      value="Sign In"
                      className={style.style4}
                    />
                  </form>
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
        <div style={{marginTop:"0px"}}><AiOutlineUser fontSize="24px" color="#2e80a1" /></div>{" "}
        <div style={{marginTop:"18px"}} className={`me-5 ${styles.cont}`}>
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
      <div style={{position:"sticky",  top:"10px",zIndex:"4"}}>

      <div style={{display:"flex",justifyContent:"space-between",}}>
        <div style={{display:"flex",width:"28%",justifyContent:"space-between",marginLeft:"20px"}}>
          <div onClick={gotohome}  style={{boxShadow:"rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"}}>
            <a href="" >
              <img
              width="95%"
              style={{padding:"22px"}}
                src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
                alt=""
              />
            </a>
          </div>
          <div style={{boxShadow:"rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"}}>
            <a href="">
              <img
               style={{padding:"15px"}}
               width="120%"
                src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div style={{display:"flex",marginRight:"80px"}}>
          <form action="" className="mx-4">
            <div className="input-group" style={{paddingTop:"7px"}}>
              <input
                type="text"
                className=" form-control-lg"
                placeholder="Search Anthropologie"
                style={{
                  fontSize: "14px",
                  outline: "none",
                  border: "1px solid #d3d3d3",
                 
                }}
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
          <Link to="/cart">
           <div style={{paddingTop:"10px"}} > <BsHandbag  color="#2e80a1" fontSize="25px" /></div>{" "}
            <span className="translate-middle badge rounded-pill bg-danger">
              {cart.length == 0 ? 0 : cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </div>
      </div>
      <hr/>

      <div className="d-flex" style={{ borderBottom: "1px solid #d3d3d3" }}>

      <div className="d-flex" style={{ }}>
        <ul className={styles.lists}>
        <li style={{color:"pink"}}>
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
        </ul>
      </div>
      {/* <MenSubNav/> */}
      </div>
      <hr/>
    </div>
    </div>
  );
}

export default Navbar;
