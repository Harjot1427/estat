import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import logo from "../../assets/logo.svg";
import { FaSearch } from "react-icons/fa";
import {
  IoPersonCircleSharp,
  IoMenuSharp,
  IoCloseSharp,
} from "react-icons/io5";
import google from "../../assets/google_img.jpg";
import twitter from "../../assets/twitter_img.webp";
import facebook from "../../assets/facebook.png";
import { Link } from "react-scroll";

const Home = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [login, setLogin] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const lastScrollY = useRef(0);
  const searchRef = useRef();

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const searchHandler = () => {
    setSearchActive((prev) => {
      if (!prev) setLogin(false);
      return !prev;
    });
  };

  const loginPage = () => {
    setLogin((prev) => {
      if (!prev) setSearchActive(false);
      return !prev;
    });
  };

  const handleLogin = () => {
    alert("Login button clicked");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrolledDown = currentScroll > lastScrollY.current + 10;

      if (mobileMenu && scrolledDown) {
        setMobileMenu(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenu]);

  return (
    <div>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
            <li>
              <Link to="container" smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-100} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} offset={-200} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="testimonial" smooth={true} offset={-170} duration={500}>
                Testimonial
              </Link>
            </li>
          </ul>

          <div className="icon">
            <FaSearch onClick={searchHandler} className="s" />
            <IoPersonCircleSharp onClick={loginPage} className="i" />
            {mobileMenu ? (
              <IoCloseSharp onClick={toggleMenu} className="menu" />
            ) : (
              <IoMenuSharp onClick={toggleMenu} className="menu" />
            )}
          </div>
        </nav>

        <div
          className={`search ${searchActive ? "active" : ""}`}
          ref={searchRef}
        >
          <input type="text" placeholder="Search" />
        </div>

        <div className={`loginPage ${login ? "active" : ""}`}>
          <h1>Login</h1>
          <div className="loginText">
            <p className="para">Username</p>
            <input type="text" placeholder="Type your username" />
            <p className="para">Password</p>
            <input type="password" placeholder="Type your password" />
            <p className="pa">Forget password?</p>
            <button onClick={handleLogin}>LOGIN</button>
            <p className="p">Or Sign Up Using</p>
          </div>
          <div className="icon-img">
            <img src={facebook} alt="Facebook" />
            <img src={google} alt="Google" />
            <img src={twitter} alt="Twitter" />
          </div>
        </div>

        <div className="texts">
          <div className="text">
            <h1>
              Explore homes that <br />
              <span>fit your dreams</span>
            </h1>
            <div className="btn">
              <button>
                <Link to="projects" smooth={true} offset={-200} duration={500}>
                  Projects
                </Link>
              </button>
              <button>
                <Link to="contact" smooth={true} offset={-200} duration={500}>
                  Contact us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
