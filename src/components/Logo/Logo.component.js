import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";
import "./Logo.styles.scss";

function Logo({ color = "black", style }) {
  return <LogoSVG style={{ color, ...style }} />;
}

export default Logo;
