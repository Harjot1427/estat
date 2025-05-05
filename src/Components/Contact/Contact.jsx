import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="form">
        <div className="formC">
          <h2>Your Name</h2>
          <input type="text" placeholder="Your Name" className="box " />
          <h2>Your Email</h2>
          <input type="text" placeholder="Your Email" className="box" />
        </div>
        <h2>Message</h2>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter Your Message"
          required
        ></textarea>

        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
