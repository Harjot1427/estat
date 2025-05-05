import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-c">
        {/* Logo and Description */}
        <li className="para">
          <img src={logo} alt="Company Logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </li>

        {/* Company Links */}
        <li>
          <div className="footer-content">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </li>

        {/* Newsletter */}
        <li className="inp">
          <h2>Subscribe to our newsletter</h2>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="input">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
