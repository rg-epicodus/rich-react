import React, { Component } from "react";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer" >
        <a href="companyFacebook" target="_blank" rel="noreferrer noopener">
          <span className="footer-icon icon fa fa-facebook" />
        </a>
        <a href="companyTwitter" target="_blank" rel="noreferrer noopener">
          <span className="footer-icon icon fa fa-twitter" />
        </a>
        <a href="companyInstagram" target="_blank" rel="noreferrer noopener">
          <span className="footer-icon icon fa fa-instagram" />
        </a>
        <a href="companyYoutube" target="_blank" rel="noreferrer noopener">
          <span className="footer-icon icon fa fa-youtube" />
        </a>
      </div>
    );
  }
}

export default Footer;