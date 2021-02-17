import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';

const Footer = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  // Add class to change login to logout
  const authLinks = (
    <div>
      <a className="footer-a" href="/">Home</a>
      <a className="footer-a" href="/contact">Contact Us</a>
      <a className="footer-a" href="/tests">Result History</a>
      <a className="footer-a" onClick={logout} href="/">Logout</a>
    </div>
  );


  const guestLinks = (
    <div>
      <a className="footer-a" href="/">Home</a>
      <a className="footer-a" href="/contact">Contact Us</a>
      <a className="footer-a" href="/login">Login</a>
    </div>
  );

  return (
    <div className="footer">
      <div>
        <p>Crescentech</p>
      </div>
      {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </div>
  );
};

Footer.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
});

export default connect(mapStateToProps, { logout })(Footer);
