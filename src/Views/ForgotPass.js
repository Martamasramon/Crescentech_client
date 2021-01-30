import React, {useState} from "react";

function ForgotPass() {
    const [contact, setContact] = useState({
      email: "",
    });

    function update(event) {
      const { name, value } = event.target;
      setContact((prevData) => {
        return {email: value};
      });
    }

    return (
        <div>
          <h1>Don't worry!</h1>
          <p>Just give us your email and we'll send you a link to reset your password!</p>

          <form>
            <div>
              <input
                onChange={update}
                name="email"
                placeholder="Email"
                value={contact.email}
              />
            </div>
            <button>Reset password</button>
          </form>


          <p>Just remembered your password?<a href="/login">Log in</a></p>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>

    );

}

export default ForgotPass;
