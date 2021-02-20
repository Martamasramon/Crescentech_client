import React, {Component} from "react";
import './Home.css';

class AttributeItem extends Component {

  render (){

    const {image, title, text} = this.props;

    return(
      <div class="card-body">
        <img class="atImg" src={image} alt="imag"/>
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{text}</p>
      </div>
    );

  }
}

export default AttributeItem;
