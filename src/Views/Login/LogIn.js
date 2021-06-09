import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import './login.css';


const LogIn = ({ login, isAuthenticated }) => {
    const [contact, setContact] = useState({
      email: "",
      password: "",
    });

    const { email, password } = contact;

    const update = (e) => setContact({
      ...contact,[e.target.name]:e.target.value
    });

    const onSubmit = async (e) => {
      e.preventDefault();
      login(email, password)
    };

    // redirect if logged in
    if (isAuthenticated){
      return <Redirect to = "/" />;
    }

    /* eslint-disable react/no-unescaped-entities */
    return (
        <div className="login">

          <h1>Log in!</h1>
          <h2>Fill in with your details to log in</h2>


          <div className="card card-login">
            <form onSubmit={onSubmit}>
              <input
                className="login-input"
                onChange={update}
                name="email"
                placeholder="Email"
                value={email}
              />
              <input
                className="login-input"
                onChange={update}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
              />
              <input className="login-submit btn" type="submit" value="Log in" />
            </form>
          </div>

          <p><a href="/forgotpass">Forgot password</a></p>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>

        </div>

    );
};

LogIn.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login }) (LogIn);
