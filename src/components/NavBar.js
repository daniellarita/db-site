import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Link style={{display: 'inline-block', color: 'black', textDecoration: 'none', margin: '5px', width: '45%', textAlign: 'center', flex: '1 100%'}} to="/about">ABOUT</Link>
        <Link style={{display: 'inline-block', color: 'black', textDecoration: 'none', margin: '5px', width: '45%', textAlign: 'center', flex: '1 100%'}} to="/contact">CONTACT</Link>
      </div>
      <hr style={{height: '3px', border: 'none', backgroundColor: 'black'}}/>
    </div>
  );
};

export default NavBar;
