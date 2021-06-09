import React from "react";
import './Home.css';
import Attributes from "./Attributes";
import Steps from "./Steps";

const Home = () => {

  /* eslint-disable no-undef */
  return (
    <div id="home">

      <div className="heading heading-home">
          <h1>Easiest way to detect Fusarium</h1>
          <h2>Find out your soil health in minutes</h2>
      </div>

      <div className="image">
          <img src={process.env.PUBLIC_URL + "/images/Home/big_man_sampling.png"} alt="man_sampling" width="100%"/>
      </div>

      <div className="attributes">
          <Attributes/>
      </div>

      <div className="steps">
          <Steps/>
      </div>
  </div>
  );
}

export default Home;
