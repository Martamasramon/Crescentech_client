import React, { Fragment, useEffect } from "react";
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import all views
import Home from "./Views/Home/Home";
import ContactUs from "./Views/ContactUs";
import Tests from "./Views/Tests/Tests";
import LogIn from "./Views/Login/LogIn";
import SignUp from "./Views/Login/SignUp";
import ForgotPass from "./Views/Login/ForgotPass";
import Alert from "./Views/General/Alert";
import Navbar from "./Views/General/Navbar";
import Footer from "./Views/General/Footer";
import Help from "./Views/Help/Help";

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
              <Route exact path="/help" component={Help} />
              <Route exact path="/forgotpass" component={ForgotPass} />
            </Switch>
          </section>
          <Footer/>
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
