import React from "react";
import Button from "../Button/Button.component";

import "./Boost.styles.scss";

function Boost() {
  return (
    <div id="boost-container">
      <span id="boost-title">Boost your links today</span>
      <Button id="boost-button" rounded>
        Get Started
      </Button>
    </div>
  );
}

export default Boost;
