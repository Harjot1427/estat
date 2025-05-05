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
            <strong>10+</strong>
            <p className="para">Years of excellence</p>
          </li>
          <li>
            <strong>20+</strong>
            <p className="para">Projects Completed</p>
          </li>
          <li>
            <strong>20+</strong>
            <p className="para">Mn. Sq. Ft. Delivered</p>
          </li>
          <li>
            <strong>25+</strong>
            <p className="para">Ongoing Projects</p>
          </li>
        </ul>
        <p id="para1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>{" "}
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default About;
