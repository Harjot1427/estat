import { useState } from "react";

import "./App.css";
import Home from "./Components/Home/Home";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Title
        subtitle={
          <>
            About <span>Our Brand</span>
          </>
        }
        title={
          <>
            Passionate About Properties, Dedicated to <br />{" "}
            <span>Your Vision</span>{" "}
          </>
        }
      />
      <About />
      <Title
        subtitle={
          <>
            Projects <span>Complete</span>
          </>
        }
        title={
          <>
            Passionate About Properties, Dedicated to <br />{" "}
            <span>Your Vision</span>{" "}
          </>
        }
      />
      <Projects />
      <Title
        subtitle={
          <>
            About<span>Testimonial</span>
          </>
        }
        title={
          <>
            Real Stories from Those Who Found Home
            <br /> <span>with Us</span>{" "}
          </>
        }
      />
      <Testimonial />
      <Title
        subtitle={
          <>
            Contact <span>With Us</span>
          </>
        }
        title={
          <>
            Ready to Make a Move? Let’s Build Your <br />{" "}
            <span>Future Together</span>{" "}
          </>
        }
      />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
