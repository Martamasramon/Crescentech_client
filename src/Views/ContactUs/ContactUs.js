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


        <div class="row">

          <div class="col-xs-12 col-sm-8">
            <ContactInfo/>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="card card-contact">
              <ContactForm/>
            </div>
          </div>

        </div>

        <div className="space">
          <hr/>
        </div>

    </div>
  );

}

export default ContactUs;
