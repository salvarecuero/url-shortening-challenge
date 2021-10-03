import React from "react";
import "./Button.styles.scss";

function Button({ children, dark, rounded, ...otherProps }) {
  return (
    <button
      className={`button ${dark ? "dark-btn" : "light-btn"} ${
        rounded ? "rounded" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
