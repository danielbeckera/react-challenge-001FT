import { FooterContainer } from "./styles";
import logo from "../../assets/images/footerLogo.svg";

import facebook from "../../assets/icons/Facebook.svg";
import twitter from "../../assets/icons/Twitter.svg";
import instagram from "../../assets/icons/Instagram.svg";

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src={logo} alt="logo" />
        <div className="navBar">
          <a href="/">Share Your Nanny</a>
          <a href="/">Our Story</a>
          <a href="/">Blog</a>
          <a href="/">Terms & Privacy</a>
        </div>
        <div>
          <a href="/">
            <img src={facebook} alt="button facebook icon" />
          </a>
          <a href="/">
            <img src={twitter} alt="button twitter icon" />
          </a>
          <a href="/">
            <img src={instagram} alt="button instagram icon" />
          </a>
        </div>
      </div>
      <span></span>
      <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
    </FooterContainer>
  );
}
