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

  const onSubmit = async (e) => {

  };

  return (
      <div id="contact-form">

        <form onSubmit={onSubmit}>
          <input
            class="contact-small"
            onChange={update}
            name="name"
            placeholder="Name"
            value={name}
            required
          />
          <input
            class="contact-small"
            onChange={update}
            name="email"
            placeholder="Email"
            value={email}
            required
          />
          <input
            class="contact-small"
            onChange={update}
            name="subject"
            placeholder="Subject"
            value={subject}
            required
          />
          <textArea
            class="contact-large"
            onChange={update}
            name="body"
            placeholder="Write your message here"
            value={body}
            required
          />
          <input
            class="btn contact-submit"
            type="submit" value="Send"/>
        </form>

    </div>
  );

}

export default ContactForm;
