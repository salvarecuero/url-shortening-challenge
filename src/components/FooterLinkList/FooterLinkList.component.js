import React from "react";
import "./FooterLinkList.styles.scss";

function FooterLinkList({ title, children }) {
  return (
    <div className="footer-link-list-container">
      <span className="footer-link-list-title">{title}</span>
      <ul className="footer-link-list">{children}</ul>
    </div>
  );
}

export default FooterLinkList;
