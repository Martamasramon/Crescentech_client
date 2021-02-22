import React from "react";
import './contactUs.css';

const ContactForm = () => {

  const linkPhoto = "https://www.brightful.me/content/images/size/w1000/2020/07/david-kovalenko-G85VuTpw6jg-unsplash.jpg";

  return (
      <div id="contact-info">
        <h3>We would love to hear from you - whether it's a compliment, a query, or just to talk about your day!</h3>

        <ul>
          <li><img src={linkPhoto} alt="imag"/>hello@crescentech.com</li>
          <li><img src={linkPhoto} alt="imag"/>012 3456 7890</li>
          <li><img src={linkPhoto} alt="imag"/>Imperial College London, South Kensington, London, SW7 2BX</li>
        </ul>

      </div>
  );

}

export default ContactForm;
