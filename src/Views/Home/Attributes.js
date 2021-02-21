import React from "react";
import './home.css';
import AttributeItem from './AttributeItem';

const Attributes = () => {
  const linkPhoto = "https://create.adobe.com/2013/10/1/long_exposure_photography_of_toby_harriman/jcr:content/article-body/full_width_images/image1.img.jpg/1567809082430.jpg";

  const title = ["Fast", "Cheap", "Accurate"];
  const text = ["Results are analysed whithin minutes!",
      "Each Cerscentech kit costs only 5€!", "Test results are 98% acurate!"];

  return (
    <div class="row">

      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card">
          <AttributeItem image={linkPhoto} title={title[0]} text={text[0]}/>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card">
          <AttributeItem image={linkPhoto} title={title[1]} text={text[1]}/>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card">
          <AttributeItem image={linkPhoto} title={title[2]} text={text[2]}/>
        </div>
      </div>

    </div>
  );
}

export default Attributes;
