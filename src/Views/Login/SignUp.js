import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import './login.css';


const SignUp = ({setAlert, register, isAuthenticated }) => {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = contact;

  const update = (e) => setContact({
    ...contact,[e.target.name]:e.target.value
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if(password !== password2){
      setAlert("Passwords do not match", "danger");
    } else{
      register({ name, email, password });
    }
  };

  // redirect when logged in
  if (isAuthenticated){
    return <Redirect to = "/" />;
  }

  return (
      <div className="signup">

        <h1>Sign up!</h1>
        <h2>Fill in with your details to make an account</h2>

        <div className="card card-signup">
          <form onSubmit={onSubmit}>
            <input className="signup-input"
              onChange={update}
              name="name"
              placeholder="Full name"
              value={name}
              required
            />
            <input className="signup-input"
              onChange={update}
              name="email"
              placeholder="Email"
              value={email}
              required
            />
            <input className="signup-input"
              type="password"
              onChange={update}
              name="password"
              placeholder="Password"
              value={password}
              minLength='6'
              required
            />
            <input className="signup-input"
            type="password"
              onChange={update}
              name="password2"
              placeholder="Confirm password"
              value={password2}
              minLength='6'
              required
            />
            <input className="btn signup-submit" type="submit" value="Sign up" />
          </form>
        </div>

        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>

  );

};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register:  PropTypes.func.isRequired,
  isAuthenticated:  PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, register})(SignUp);
