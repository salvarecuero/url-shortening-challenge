import React, { useState } from "react";
import ShortenerInput from "../ShortenerInput/ShortenerInput.component";
import ShortenerList from "../ShortenerList/ShortenerList.component";
import getShortenLink from "../../utils/getShortenLink";
import "./Shortener.styles.scss";

function Shortener() {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleNewLink = async (newLink) => {
    const { result: shortenedLinkData } = await getShortenLink(newLink);

    const newShortenedLinks = [
      ...shortenedLinks,
      {
        id: shortenedLinks.length
          ? shortenedLinks[shortenedLinks.length - 1].id + 1
          : 0,
        originalLink: newLink,
        shortenedLink: shortenedLinkData.full_short_link,
      },
    ];

    setShortenedLinks(newShortenedLinks);
  };

  return (
    <div className="shortener-container">
      <ShortenerInput handleNewLink={handleNewLink} />
      <ShortenerList shortenedLinks={shortenedLinks} />
    </div>
  );
}

export default Shortener;
