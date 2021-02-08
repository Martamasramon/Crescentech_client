import React, { Fragment, Avatar } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading, user : {name, avatar} }, logout }) => {
  // Add class to change login to logout
  const authLinks = (
    <ul className="nav navbar-nav navbar-right">
      <li id="home"><a href="/">HOME</a></li>
      <li id="contact"><a href="/contact">CONTACT US</a></li>
      <li id="tests"><a href="/tests">RESULT HISTORY</a></li>
      <li id="logout"><a onClick={logout} href="/">LOG OUT</a></li>
      <li id="user">{name}</li>
    </ul>
  );
  

  const guestLinks = (
    <ul className="nav navbar-nav navbar-right">
      <li id="home"><a href="/">HOME</a></li>
      <li id="contact"><a href="/contact">CONTACT US</a></li>
      <li id="login"><a href="/login">LOG IN</a></li>
    </ul>
  );

  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <p className="navbar-brand">Crescentech</p>
        </div>
        {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
      </div>
    </nav>
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
