import React, { Fragment, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import Tests from "./Views/Tests";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import ForgotPass from "./Views/ForgotPass";
import Alert from "./Views/Alert";
import Navbar from "./Views/Navbar";

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


if (localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
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
              <Route exact path="/tests" component={Tests} />
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

export default App;
