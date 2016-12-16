import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className="nav-bar">
        <div className="nav-link">
          <Link to="/about">ABOUT</Link>
        </div>
        <div className="nav-link">
          <Link to="/resume">RESUME</Link>
        </div>
        <div className="nav-link">
          <Link to="/contact">CONTACT</Link>
        </div>
    </div>
  );
};

export default NavBar;