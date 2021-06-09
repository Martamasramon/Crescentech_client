import React, {useState} from "react";
import './contactUs.css';

const ContactForm = () => {

  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    body: ""
  });

  const { name, email, subject, body } = message;

  const update = (e) => setMessage({
    ...message,[e.target.name]:e.target.value
  });

  /* eslint-disable no-unused-vars */
  const onSubmit = async (e) => {
      console.log("Submitted" + e);
  };

  return (
      <div id="contact-form">

        <form onSubmit={onSubmit}>
          <input
            className="contact-small"
            onChange={update}
            name="name"
            placeholder="Name"
            value={name}
            required
          />
          <input
            className="contact-small"
            onChange={update}
            name="email"
            placeholder="Email"
            value={email}
            required
          />
          <input
            className="contact-small"
            onChange={update}
            name="subject"
            placeholder="Subject"
            value={subject}
            required
          />
          <textArea
            className="contact-large"
            onChange={update}
            name="body"
            placeholder="Write your message here"
            value={body}
            required
          />
          <input
            className="btn contact-submit"
            type="submit" value="Send"/>
        </form>

    </div>
  );

}

export default ContactForm;
