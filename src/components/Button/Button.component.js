import React from "react";
import "./Button.styles.scss";

function Button({ children, dark, rounded, styles, onClickHandler }) {
  return (
    <button
      className={`button ${dark ? "dark-btn" : "light-btn"} ${
        rounded ? "rounded" : ""
      }`}
      style={{ ...styles }}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
