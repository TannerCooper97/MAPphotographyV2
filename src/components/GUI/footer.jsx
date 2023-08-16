import React from "react";
import "../../styles/gui-styles/footer.scss";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/faceboook.svg";
import twitter from "../../assets/twitter3.svg";


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <p>Ready to book now? Or want to see more?</p>
        <p>Click below and check out my socials!</p>
        
      </div>
      <div className="footer-social-container">
        <a target="_blank" href="https://www.instagram.com/m_a_photographyutah/">
          <img src={instagram} alt="" />
        </a>
        <a target="_blank" href="https://www.facebook.com/malbair">
          <img src={facebook} alt="" />
        </a>
        <a href="/">
          <img src={twitter} alt="" />
        </a>
        
      </div>
    </div>
  );
}

export default Footer;
