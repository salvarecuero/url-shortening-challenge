import React from "react";
import "./NavBarLink.styles.scss";

function NavBarItem({ title, link = "#" }) {
  return (
    <a href={link} className="NavBar-link">
      {title}
    </a>
  );
}

export default NavBarItem;
