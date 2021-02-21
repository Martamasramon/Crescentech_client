import React from "react";
import './Home.css';
import StepsItem from './StepsItem';

const Steps = () => {
  const linkPhoto = "https://www.brightful.me/content/images/size/w1000/2020/07/david-kovalenko-G85VuTpw6jg-unsplash.jpg";

  const title = ["1. Sample", "2. Shake", "3. Tap", "4. Look"];
  const text = ["Take a soil sample from your field.","Mix the soil sample with the buffer in the kit.",
      "Tap your phone on the tag.", "Upload your results to the website!"];

  return (
    <div class="row">

      <div class="col-xs-12 col-md-6">
        <div class="card card-1">
          <StepsItem image={linkPhoto} title={title[0]} text={text[0]}/>
        </div>
      </div>

      <div class="col-xs-12 col-md-6">
      <div class="card card-2">
          <StepsItem image={linkPhoto} title={title[1]} text={text[1]}/>
        </div>
      </div>

      <div class="col-xs-12 col-md-6">
      <div class="card card-3">
          <StepsItem image={linkPhoto} title={title[2]} text={text[2]}/>
        </div>
      </div>

      <div class="col-xs-12 col-md-6">
      <div class="card card-4">
          <StepsItem image={linkPhoto} title={title[3]} text={text[3]}/>
        </div>
      </div>

    </div>
  );
}

export default Steps;
