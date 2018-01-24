import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div>
      <div className="nav-bar">
        <Link className="nav-link" to="/about">ABOUT</Link>
        <Link className="nav-link" to="/contact">CONTACT</Link>
      </div>
      <hr className="nav-bar-line"/>
    </div>
  );
};

export default NavBar;
