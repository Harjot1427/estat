import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    alert("Message sent successfully!");
  };

  return (
    <div className="contact">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formC">
          <h2>Your Name</h2>
          <input type="text" placeholder="Your Name" className="box" />

          <h2>Your Email</h2>
          <input type="email" placeholder="Your Email" className="box" />
        </div>

        <h2>Message</h2>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;