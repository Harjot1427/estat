import React from "react";
import "./About.css";
import brand from "../../assets/brand_img.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={brand} alt="" />
      </div>
      <div className="about-right">
        <ul className="status-list">
          <li>
            <h2>10+</h2>
            <ol>Years of excellence</ol>
          </li>
          <li>
            <h2>20+</h2>
            <ol>Projects Completed</ol>
          </li>
          <li>
            <h2>15+</h2>
            <ol>Mn. Sq. Ft. Delivered</ol>
          </li>
          <li>
            <h2>25+</h2>
            <ol>Ongoing Projects</ol>
          </li>
        </ul>
        <div className="about-content">
          <p id="para1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>{" "}
        </div>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default About;
