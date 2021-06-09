import React, {Component} from "react";
import './Help.css';

class TextCard extends Component {

  render (){

    /* eslint-disable react/prop-types, react/no-unescaped-entities */
    const numb = this.props.number;

    const text1 = (
      <div className="card-body card-step">
        <p className="card-text card-right">Divide your field into <b>grids using the field map tool</b>. Start sampling at grid 1,1.</p>
        <p className="card-text card-right"><b>Remove large debris</b> at sample size. Using a soil core sampler or a spade, dig approximately <b>20cm</b> down. Obtain sufficient soil to mic in a flask.</p>
        <p className="card-text card-right">Continue to systematically sample at each grid site and <b>form composites</b>. Approximately 5 sites can form 1 composite. Fill up to <b>soil maximum fill-line</b>.</p>
      </div>
    );

    const text2 = (
      <div className="card-body card-step">
        <p className="card-text card-right">Fill up the flask with clean water, until the water reaches the <b>maximum fill line</b>.</p>
        <p className="card-text card-right">Place the lid back on, ensuring a tight seal.</p>
        <p className="card-text card-right"><b>Shake the flask</b> vigorously for 30 seconds.</p>
        <p className="card-text card-right"><b>Pierce the flask</b> and <b>keep the kit still in a level surface</b> for 30 seconds.</p>
      </div>
    );

    const text3 = (
      <div className="card-body card-step">
        <p className="card-text card-right">Ensure your smartphone's <b>NFC functionality is turned on</b>.</p>
        <p className="card-text card-right">Open the app and go to 'Collect Results'.</p>
        <p className="card-text card-right"><b>Tap the phone</b> on the test's NFC tag to transfer the data.</p>
      </div>
    );

    const text4 = (
      <div className="card-body card-step">
        <p className="card-text card-right">When your phone is connected to the <b>Internet</b>, the collected results will be sent to our database.</p>
        <p className="card-text card-right">Now you can access these results <b>from the website!</b></p>
        <p className="card-text card-right"><b>Log in</b> and head over to the 'Result History' tab to see your test results.</p>
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
