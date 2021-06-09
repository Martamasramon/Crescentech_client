import React, {Component} from "react";
import './Home.css';

class StepsItem extends Component {

  render (){

    /* eslint-disable react/prop-types */
    const {image, title, text} = this.props;

    return(
      <div className="card-body card-step">
        <h5 className="card-title">{title}</h5>
        <img className="card-img" src={image} alt="imag"/>
        <p className="card-text">{text}</p>
      </div>
    );

  }
}

export default StepsItem;
