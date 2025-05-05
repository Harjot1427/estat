import React from "react";
import "./Testimonial.css";
import { IoStarSharp } from "react-icons/io5";
import profile1 from "../../assets/profile_img_1.png";
import profile2 from "../../assets/profile_img_2.png";
import profile3 from "../../assets/profile_img_3.png";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="card">
        <img src={profile1} alt="" />
        <div className="text">
          <h1>Donald Jackman</h1>
          <p>Marketing Manager</p>
          <div className="icon">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <p>
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={profile2} alt="" />
        <div className="text">
          <h1>Donald Jackman</h1>
          <p>Marketing Manager</p>
          <div className="icon">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <p>
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={profile3} alt="" />
        <div className="text">
          <h1>Donald Jackman</h1>
          <p>Marketing Manager</p>
          <div className="icon">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <p>
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
