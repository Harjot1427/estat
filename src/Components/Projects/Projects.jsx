import React, { useRef, useState, useEffect } from "react";
import "./Projects.css";
import project1 from "../../assets/project_img_1.jpg";
import project2 from "../../assets/project_img_2.jpg";
import project3 from "../../assets/project_img_3.jpg";
import project4 from "../../assets/project_img_4.jpg";
import project5 from "../../assets/project_img_5.jpg";
import project6 from "../../assets/project_img_6.jpg";

const Projects = () => {
  let tx = useRef(0);
  const slider = useRef();

  const totalItems = 6;

  const [visibleItems, setVisibleItems] = useState(4);
  const [stepSize, setStepSize] = useState(25);

  const maxTranslateX = -((totalItems - visibleItems) * stepSize);

  const updateSliderSettings = () => {
    const width = window.innerWidth;
    if (width > 768) {
      setVisibleItems(4);
      setStepSize(25);
    } else if (width > 480) {
      setVisibleItems(3);
      setStepSize(33.3333);
    } else {
      setVisibleItems(2);
      setStepSize(50);
    }
  };

  useEffect(() => {
    updateSliderSettings();
    window.addEventListener("resize", updateSliderSettings);
    return () => window.removeEventListener("resize", updateSliderSettings);
  }, []);

  const next = () => {
    if (tx.current > maxTranslateX) {
      tx.current -= stepSize;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const back = () => {
    if (tx.current < 0) {
      tx.current += stepSize;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className="projects">
      <button className="next " onClick={next}>
        {">"}{" "}
      </button>
      <button className="back" onClick={back}>
        {"<"}
      </button>
      <div className="slider ">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <img src={project1} alt="" />
            </div>

            <div className="info">
              <h2>Vista Verde</h2>
              <p>$2,50,000 | California</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={project2} alt="" />
            </div>{" "}
            <div className="info">
              <h2>Vista Verde</h2>
              <p>$2,50,000 | California</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={project3} alt="" />
            </div>{" "}
            <div className="info">
              <h2>Vista Verde</h2>
              <p>$2,50,000 | California</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={project4} alt="" />
            </div>{" "}
            <div className="info">
              <h2>Vista Verde</h2>
              <p>$2,50,000 | California</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={project5} alt="" />
            </div>{" "}
            <div className="info">
              <h2>Vista Verde</h2>
              <p>$2,50,000 | California</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={project6} alt="" />
            </div>{" "}
            <div className="info">
              <h2>Vista Verde</h2>
              <p>$2,50,000 | California</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
