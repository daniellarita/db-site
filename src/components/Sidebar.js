import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {
  return (
    <sidebar className="sidebar">
      <section>
        <h4 className={ `menu-item ${ props.isActive('/albums') ? 'active' : ''}` }>
          <Link to="/about">ABOUT</Link>
        </h4>
        <h4 className={ `menu-item ${ props.isActive('/artists') ? 'active' : ''}` }>
          <Link to="/resume">RESUME</Link>
        </h4>
        <h4 className={ `menu-item ${ props.isActive('/artists') ? 'active' : ''}` }>
          <Link to="/contact">CONTACT</Link>
        </h4>
      </section>
    </sidebar>
  );
};

export default Sidebar;