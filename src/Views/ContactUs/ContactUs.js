import React from "react";
import './contactUs.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactUs = () => {

  return (
      <div id="contact">

        <div className="heading">
            <h1>Contact Us</h1>
        </div>


        <div className="row">

          <div className="col-xs-12 col-sm-8">
            <ContactInfo/>
          </div>

          <div className="col-xs-12 col-sm-4">
            <div className="card card-contact">
              <ContactForm/>
            </div>
          </div>

        </div>

        <div className="space">
          <hr className="contact-hr"/>
        </div>

    </div>
  );

}

export default ContactUs;
