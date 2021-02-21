import React from "react";
import './home.css';
import Attributes from "./Attributes";
import Steps from "./Steps";

const Home = () => {
  const linkPhoto = "https://create.adobe.com/2013/10/1/long_exposure_photography_of_toby_harriman/jcr:content/article-body/full_width_images/image1.img.jpg/1567809082430.jpg";

  return (
    <div id="home">

      <div className="heading">
          <h1>Easiest way to detect Fusarium</h1>
          <h2>Find out your soil health in minutes</h2>
      </div>

      <div className="image">
          <img src={linkPhoto} alt="Image1" width="100%"/>
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
