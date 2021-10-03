import React, { useState } from "react";
import ShortenerListItem from "../ShortenerListItem/ShortenerListItem.component";
import "./ShortenerList.styles.scss";

function ShortenerList({ shortenedLinks = [] }) {
  const [copiedLink, setCopiedLink] = useState(null);

  const handleCopyLink = (id) => {
    const { shortenedLink } = shortenedLinks.find((item) => item.id === id);
    navigator.clipboard.writeText(shortenedLink);

    setCopiedLink(id);
  };

  return (
    <ul>
      {shortenedLinks.map((item) => {
        console.log(item);
        return (
          <ShortenerListItem
            key={item.id}
            {...item}
            isCopied={copiedLink === item.id}
            handleCopyLink={handleCopyLink}
          />
        );
      })}
    </ul>
  );
}

export default ShortenerList;
