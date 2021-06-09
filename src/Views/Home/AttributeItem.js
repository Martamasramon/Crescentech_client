import React, {Component} from "react";
import './Home.css';

class AttributeItem extends Component {

  render (){

    /* eslint-disable react/prop-types */
    const {image, title, text} = this.props;

    return(
      <div className="card-body card-attr">
        <img className="atImg" src={image} alt="imag"/>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    );

  }
}

export default AttributeItem;
