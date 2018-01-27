import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-items-container">
        <p className="copyright">COPYRIGHT 2017 DANNI BAXTER |&nbsp;</p>
        <a className="email-me" href="mailto:drbaxter821@gmail.com?Subject=Hello!">Email me</a><p>&nbsp;|&nbsp;</p>
        <div className="icons">
          <SocialIcon style={{height: '25px', width: '25px', margin: '3px'}} className="social-icon" url="https://twitter.com/danni__baxter" />
          <SocialIcon style={{height: '25px', width: '25px', margin: '3px'}} className="social-icon" url="https://www.facebook.com/danni.baxter.16" />
          <SocialIcon style={{height: '25px', width: '25px', margin: '3px'}} className="social-icon" url="https://www.linkedin.com/in/daniellabaxter" />
          <SocialIcon style={{height: '25px', width: '25px', margin: '3px'}} className="social-icon" url="https://medium.com/@dannibaxter" />
          <SocialIcon style={{height: '25px', width: '25px', margin: '3px'}} className="social-icon" url="https://github.com/dannibaxter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
