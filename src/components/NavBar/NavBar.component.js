import React, { useState } from "react";
import "./NavBar.styles.scss";

import Logo from "../Logo/Logo.component";
import NavBarLink from "../NavBarLink/NavBarLink.component";
import LoginAndSignUp from "../LoginAndSignUp/LoginAndSignUp.component";
import useIsMobile from "../../hooks/useIsMobile";
import { ReactComponent as Bars } from "../../assets/images/bars-solid.svg";

function NavBar() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const isMobile = useIsMobile();

  const NavBarItems = () => (
    <div
      className={`nav-items-container ${
        showBurgerMenu ? "show-burger-menu" : ""
      }`}
    >
      <div className="nav-items">
        <NavBarLink title="Features" />
        <NavBarLink title="Pricing" />
        <NavBarLink title="Resources" />
      </div>
      <div className="nav-items">
        <LoginAndSignUp />
      </div>
    </div>
  );

  return (
    <>
      <nav>
        <Logo />
        {!isMobile ? NavBarItems() : null}
        <Bars
          className="burger-button"
          onClick={() => setShowBurgerMenu(!showBurgerMenu)}
        />
      </nav>
      {isMobile ? NavBarItems() : null}
    </>
  );
}

export default NavBar;
