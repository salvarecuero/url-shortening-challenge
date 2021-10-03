import React, { useState } from "react";
import isURL from "validator/lib/isURL";

import Button from "../Button/Button.component";
import "./ShortenerInput.styles.scss";

function ShortenerInput({ handleNewLink }) {
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = () => {
    if (isURL(inputValue)) {
      handleNewLink(inputValue);
      setInputValue("");
    } else setError(true);
  };

  const onChange = (e) => {
    setError(false);
    setInputValue(e.target.value);
  };

  return (
    <div className="shortener-input-container">
      <div id="input-and-error">
        <input
          id="url-input"
          className={error ? "error" : ""}
          value={inputValue}
          onChange={onChange}
          placeholder="Shorten a link here..."
          onKeyDown={(e) => e.key === "Enter" && onSubmit()}
          required
        />
        {error ? <span className="error-msg">Please add a link</span> : null}
      </div>
      <div className="submit-button">
        <Button onClick={onSubmit}>Shorten It!</Button>
      </div>
    </div>
  );
}

export default ShortenerInput;
