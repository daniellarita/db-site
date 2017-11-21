import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = (props) => {
  return (
    <div>
      <div className="email-link">
        <a href="mailto:drbaxter821@gmail.com?Subject=Hello!">Email Me!
        </a>
      </div>
      <div className="icons">
        <SocialIcon url="https://twitter.com/danni__baxter" />
        <SocialIcon url="https://www.facebook.com/danni.baxter.16" />
        <SocialIcon url="https://www.linkedin.com/in/daniellabaxter" />
        <SocialIcon url="https://medium.com/@dannibaxter" />
        <SocialIcon url="https://github.com/dannibaxter" />
      </div>
    </div>
  );
};

export default Contact;
