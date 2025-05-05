import React from "react";
import "./Title.css";

const Title = ({ subtitle, title }) => {
  return (
    <div className="head">
      <div className="heading">
        {" "}
        <h1>{subtitle}</h1>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Title;
