import React from "react";
import HowToUse from "./HowToUse";
import FAQs from "./FAQs";

const Help = () => {

  return (
    <div id="help">

      <div className="how-to">
          <h1>How to use our tests</h1>
          <HowToUse/>
      </div>

      <div className="faqs">
          <h1>Frequently asked questions</h1>
          <FAQs/>
      </div>

  </div>
  );
}

export default Help;
