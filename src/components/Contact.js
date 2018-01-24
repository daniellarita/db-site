import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="email-link">
        <a href="mailto:drbaxter821@gmail.com?Subject=Hello!">Email me!
        </a>
      </div>
      <div className="icons">
        <SocialIcon className="social-icon" url="https://twitter.com/danni__baxter" />
        <SocialIcon className="social-icon" url="https://www.facebook.com/danni.baxter.16" />
        <SocialIcon className="social-icon" url="https://www.linkedin.com/in/daniellabaxter" />
        <SocialIcon className="social-icon" url="https://medium.com/@dannibaxter" />
        <SocialIcon className="social-icon" url="https://github.com/dannibaxter" />
      </div>
    </div>
  );
};

export default Contact;
