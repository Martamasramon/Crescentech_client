import React, {Component} from "react";
import './Help.css';

class TextCard extends Component {

  render (){

    const numb = this.props.number;

    const text1 = (
      <div class="card-body card-step">
        <p class="card-text card-right">Divide your field into grids using the field map tool. Start sampling at grid 1,1.</p>
        <p class="card-text card-right">Remove large debris at sample size. Using a soil core sampler or a spade, dig approximately 20m down. Obtain sufficient soil to mic in a flask.</p>
        <p class="card-text card-right">Continue to systematically sample at each grid site and form composites. Approximately 5 sites can form 1 composite. Fill up to soil maximum fill-line.</p>
      </div>
    );

    const text2 = (
      <div class="card-body card-step">
        <p class="card-text card-right">Fill up the flask with clean water, until the water reaches the maximum fill line.</p>
        <p class="card-text card-right">Place the lid back on, ensuring a tight seal.</p>
        <p class="card-text card-right">Shake the flask vigorously for 30 seconds.</p>
        <p class="card-text card-right">Pierce the flask and keep the kit still in a level surface for 30 seconds.</p>
      </div>
    );

    const text3 = (
      <div class="card-body card-step">
        <p class="card-text card-right">Ensure your smartphone's NFC functionality is turned on.</p>
        <p class="card-text card-right">Open the app and go to 'Collect Results'.</p>
        <p class="card-text card-right">Tap the phone on the test's NFC tag to transfer the data.</p>
      </div>
    );

    const text4 = (
      <div class="card-body card-step">
        <p class="card-text card-right">When your phone is connected to the Internet, the collected results will be sent to our database.</p>
        <p class="card-text card-right">Now you can access these results from the website!</p>
        <p class="card-text card-right">Log in and head over to the 'Result History' tab to see your test results.</p>
      </div>
    );


    return(
      <div>
        {(numb==="0") && text1}
        {(numb==="1") && text2}
        {(numb==="2") && text3}
        {(numb==="3") && text4}
      </div>
    );

  }
}

export default TextCard;
