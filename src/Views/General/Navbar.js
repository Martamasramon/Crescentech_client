import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import './general.css';

/* eslint-disable no-undef, no-unused-vars, react/prop-types, react/no-unknown-property */


const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  // Add class to change login to logout
  const authLinks = (
    <ul className="nav navbar-nav navbar-right">
      <li id="home"><a className="nav-item" href="/">Home</a></li>
      <li id="help"><a className="nav-item" href="/help">Help</a></li>
      <li id="contact"><a href="/contact">Contact Us</a></li>
      <li id="tests"><a href="/tests">Result History</a></li>
      {
        user && <li id="logout"><a onClick={logout} href="/">
        <img src={user.avatar} alt={user.name} width="50" height="50"/>
        {user.name} - Log out</a></li>
      }
    </ul>
  );


  const guestLinks = (
    <ul className="nav navbar-nav navbar-right">
      <li id="home"><a href="/">Home</a></li>
      <li id="help"><a className="nav-item" href="/help">Help</a></li>
      <li id="contact"><a href="/contact">Contact Us</a></li>
      <li id="login"><a href="/login">Log In</a></li>
    </ul>
  );

  return (
    <div className="row">
        <div className="col-xs-12 col-sm-5">
          <img class="nav-img" src={process.env.PUBLIC_URL + "/images/Home/logo.png"} alt="imag"/>
        </div>

        <div className="col-xs-12 col-sm-7">
          <nav className="navbar navbar-default nav-top">
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
          </nav>
        </div>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
});

export default connect(mapStateToProps, { logout })(Navbar);
