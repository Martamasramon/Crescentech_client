import React, { Fragment, useEffect } from "react";
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import all views
import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import Tests from "./Views/Tests";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import ForgotPass from "./Views/ForgotPass";
import Alert from "./Views/Alert";
import Navbar from "./Views/Navbar";

import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


if (localStorage.token){
  setAuthToken(localStorage.token);
}

const App = ({auth: {isAuthenticated}}) => {
  useEffect(()=>{
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <section>
            <Alert/>
            <Switch>
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/tests" component={isAuthenticated ? Tests : Home} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/forgotpass" component={ForgotPass} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>

    );
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(App);
