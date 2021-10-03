import React from "react";
import Button from "../Button/Button.component";
import "./ShortenerListItem.styles.scss";

function ShortenerListItem({
  id,
  originalLink,
  shortenedLink,
  isCopied,
  handleCopyLink,
}) {
  return (
    <li className="list-item-container">
      <div className="original-link-container">
        <span>{originalLink}</span>
      </div>
      <div className="shortened-link-container">
        <a href={shortenedLink} target="_blank" rel="noreferrer">
          {shortenedLink}
        </a>
        <Button dark={isCopied} onClick={() => handleCopyLink(id)}>
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </li>
  );
}

export default ShortenerListItem;
