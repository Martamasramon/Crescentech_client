import React, {Component} from "react";
import './Home.css';

class StepsItem extends Component {

  render (){

    const {image, title, text} = this.props;

    return(
      <div class="card-body card-step">
        <h5 class="card-title">{title}</h5>
        <img class="card-img" src={image} alt="imag"/>
        <p class="card-text">{text}</p>
      </div>
    );

  }
}

export default StepsItem;
