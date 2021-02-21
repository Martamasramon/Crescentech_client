import React, {Component} from "react";
import './home.css';

class AttributeItem extends Component {

  render (){

    const {image, title, text} = this.props;

    return(
      <div class="card-body card-attr">
        <img class="atImg" src={image} alt="imag"/>
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{text}</p>
      </div>
    );

  }
}

export default AttributeItem;