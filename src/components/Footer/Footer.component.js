import React from "react";
import "./Footer.styles.scss";

import Logo from "../Logo/Logo.component";
import FooterLinkList from "../FooterLinkList/FooterLinkList.component";
import { ReactComponent as FacebookLogo } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as PinterestLogo } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as InstagramLogo } from "../../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <footer id="footer-container">
      <div id="footer-logo">
        <Logo color="white" />
      </div>

      <div id="footer-links">
        <FooterLinkList title="Features">
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </FooterLinkList>
        <FooterLinkList title="Resources">
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </FooterLinkList>
        <FooterLinkList title="Company">
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </FooterLinkList>
      </div>

      <div id="footer-socials">
        <FacebookLogo className="footer-social-logo" />
        <TwitterLogo className="footer-social-logo" />
        <PinterestLogo className="footer-social-logo" />
        <InstagramLogo className="footer-social-logo" />
      </div>
    </footer>
  );
}

export default Footer;
