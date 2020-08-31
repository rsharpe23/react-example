import React from 'react';
import './Nav.css';

function Nav({ className = 'Nav', children }) {
  return (
    <nav className={className}>
      {children}
    </nav>
  );
}

export default Nav;