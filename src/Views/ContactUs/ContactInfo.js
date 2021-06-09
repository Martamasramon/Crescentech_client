import React from "react";
import './contactUs.css';

const ContactForm = () => {

  /* eslint-disable no-undef, react/no-unescaped-entities */
  return (
      <div id="contact-info">
        <h3>We would love to hear from you - whether it's a compliment, a query, or just to talk about your day!</h3>

        <ul>
          <li><img src={process.env.PUBLIC_URL + "/images/Contact/letter.png"} alt="imag"/>hello@crescentech.com</li>
          <li><img src={process.env.PUBLIC_URL + "/images/Contact/call.png"} alt="imag"/>012 3456 7890</li>
          <li><img src={process.env.PUBLIC_URL + "/images/Contact/home.png"} alt="imag"/>Imperial College London, South Kensington, London, SW7 2BX</li>
        </ul>

      </div>
  );

}

export default ContactForm;
