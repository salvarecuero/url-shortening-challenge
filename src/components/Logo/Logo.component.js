import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";
import "./Logo.styles.scss";

function Logo({ color = "black", style }) {
  return <LogoSVG className="brand-logo" style={{ color, ...style }} />;
}

export default Logo;
