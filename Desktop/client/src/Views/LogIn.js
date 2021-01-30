import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import PropTypes from 'prop-types';

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

    return (
        <div>
          <h1>Let's get you signed in!</h1>

          <form onSubmit={onSubmit}>
            <input
              onChange={update}
              name="email"
              placeholder="Email"
              value={email}
            />
            <input
              onChange={update}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
            />
            <input type="submit" value="Log in" />
          </form>

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
