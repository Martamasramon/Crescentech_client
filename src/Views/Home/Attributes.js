import React from "react";
import './Home.css';
import AttributeItem from './AttributeItem';

const Attributes = () => {

  const title = ["Fast", "Cheap", "Accurate"];
  const text = ["Results are analysed whithin minutes!",
      "Each Cerscentech kit costs only 5€!", "Test results are 98% acurate!"];

  return (
    <div class="row">

      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card">
          <AttributeItem image={process.env.PUBLIC_URL + "/images/Home/fast.png"} title={title[0]} text={text[0]}/>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card">
          <AttributeItem image={process.env.PUBLIC_URL + "/images/Home/cheap.png"} title={title[1]} text={text[1]}/>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card">
          <AttributeItem image={process.env.PUBLIC_URL + "/images/Home/accuracy.png"} title={title[2]} text={text[2]}/>
        </div>
      </div>

    </div>
  );
}

export default Attributes;
