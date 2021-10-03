import React from "react";
import "./Header.styles.scss";

import Button from "../Button/Button.component";
import { ReactComponent as HeaderImage } from "../../assets/images/illustration-working.svg";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <span className="header-title">More than just shorter links</span>
        <span className="header-description">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </span>
        <Button rounded>Get Started</Button>
      </div>
      <div className="header-illustration">
        <HeaderImage width="100vw" />
      </div>
    </div>
  );
}

export default Header;
