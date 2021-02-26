import React, {useState} from "react";
import nodemailer from 'nodemailer';
import './login.css';


// Email to reset password set-up
let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: "1abf2f6aaae8d5",
      pass: "ef4e4f0bd67390"
    }
});

const body = '<h1>Reset your password</h1>' +
 '<p>If you have forgotten your password, click on the button below to choose a new one!</p>' +
 '<button><a href="https://www.crescentech.herokuapp.com/resetpassword">Reset password<a/><button/>';

const message = {
    from: 'crescentech.testing@gmail.com', // Sender address
    to: 'to@gmail.com',         // List of recipients
    subject: 'Reset your password', // Subject line
    text: body // Plain text body
};


// Main function
function ForgotPass() {
    const [contact, setContact] = useState({
      email: "",
    });

    function update(event) {
      const { value } = event.target;
      setContact((prevData) => {
        return {email: value};
      });
    }

    const onSubmit = async (e) => {
      transport.sendMail(message, function(err, info) {
          if (err) {
            console.log(err)
          } else {
            console.log(info);
          }
      });
    }

    return (
        <div className="forgotpass">
          <h1>Don't worry!</h1>
          <h2 className="forgotpass-h2">Just give us your email and we'll send you a link to reset your password!</h2>

          <hr></hr>

          <div className="card card-forgotpass">
            <form onSubmit={onSubmit}>
                <input className="forgotpass-input"
                  onChange={update}
                  name="email"
                  placeholder="Email"
                  value={contact.email}
                />
                <input className="btn forgotpass-submit" type="submit" value="Send link" />
            </form>
          </div>

          <hr className="forgotpass-hr"/>
          
          <p>Just remembered your password?<a href="/login">Log in</a></p>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>

          <hr className="forgotpass-hr"/>

        </div>
    );

}

export default ForgotPass;
