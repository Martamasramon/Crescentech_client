import React, {useState} from "react";

const ContactUs = () => {

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
      <div id="contact">

        <div className="heading">
            <h1>Contact Us</h1>
        </div>

        <form onSubmit={onSubmit}>
          <input
            onChange={update}
            name="name"
            placeholder="Name"
            value={name}
            required
          />
          <input
            onChange={update}
            name="email"
            placeholder="Email"
            value={email}
            required
          />
          <input
            onChange={update}
            name="subject"
            placeholder="Subject"
            value={subject}
            required
          />
          <input
            onChange={update}
            name="body"
            placeholder="Write your message here"
            value={body}
            required
          />
          <input type="submit" value="Send"/>
        </form>

    </div>
  );

}

export default ContactUs;
