import React, {Component} from "react";

class Home extends Component {

  render() {
    return (
      <div id="home">

        <div className="heading">
            <h1>Fusarium Test</h1>
        </div>

        <div className="body">
            <h2>Are you plants slowly dying?</h2>
            <p>If you suspect they might be infected with the Fusarium fungus, then you have come to the right place!</p>
            <p>With our innovative technology we will help you diagnose your plants with a simple and quick test.</p>
        </div>
    </div>
    );
  }
}

export default Home;
