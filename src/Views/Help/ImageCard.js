import React, {Component} from "react";
import './Help.css';

class ImageCard extends Component {

  render (){

    const image = ["man_sampling.png", "man_shaking.png", "nfc_phone.png", "man_looking.png"];

    const title = ["1. Sample", "2. Shake", "3. Tap", "4. Look"];
    const text = ["Take a soil sample from your field.","Mix the soil sample with the buffer in the kit.",
        "Tap your phone on the tag.", "Upload your results to the website!"];

    const numb = this.props.number;

    return(
      <div class="card-body card-step">
        <h5 class="card-title">{title[numb]}</h5>
        <img class="card-img" src={process.env.PUBLIC_URL + "/images/Home/" + image[numb]} alt="imag"/>
        <p class="card-text">{text[numb]}</p>
      </div>
    );

  }
}

export default ImageCard;
