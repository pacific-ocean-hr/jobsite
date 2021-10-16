import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 2,
        boxShadow: '0 6px 20px 0 rgba(256, 256, 256, 0.4)',
      }}
      className='bg-gray-800'
    ></header>
  );
}

export default NavBar;
