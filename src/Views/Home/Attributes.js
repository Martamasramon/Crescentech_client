import React from "react";
import './Home.css';
import AttributeItem from './AttributeItem';

const Attributes = () => {

  const title = ["Fast", "Cheap", "Accurate"];
  const text = ["Results are analysed whithin minutes!",
      "Each Cerscentech kit costs only 5€!", "Test results are 98% acurate!"];

  /* eslint-disable no-undef */
  return (
    <div className="row">

      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="card">
          <AttributeItem image={process.env.PUBLIC_URL + "/images/Home/fast.png"} title={title[0]} text={text[0]}/>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="card">
          <AttributeItem image={process.env.PUBLIC_URL + "/images/Home/cheap.png"} title={title[1]} text={text[1]}/>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="card">
          <AttributeItem image={process.env.PUBLIC_URL + "/images/Home/accuracy.png"} title={title[2]} text={text[2]}/>
        </div>
      </div>

    </div>
  );
}

export default Attributes;
