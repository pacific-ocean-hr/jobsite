/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';

import Cookies from 'js-cookie';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: solid thin #f2f2f2;
`;

const StyledLinks = styled.div`
  flex: 1;
  .styled-link {
    font-size: 1em;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      color: rgba(0.9);
    }
  }
  &.right-nav {
    align-items: center;
    display: flex;
    justify-content: right;
    position: relative;
    text-align: right;
  },
  .greeting {
    color: rgba(0, 0, 0, .6);
  }
`;

const Logo = styled.a`
  cursor: pointer;
  height: 60px;
  .logo-image {
    height: 60px;
  }
`;

const NavDropdown = styled.ul`
  background-color: #eee;
  border: 1px solid rgba(0, 0, 0, .6);
  border-radius: 3px;
  color: rgba(0, 0, 0, .6);
  display: ${(props) => props.isVisible};
  list-style: none;
  margin: 0;
  padding: 6px;
  position: absolute;
  right: -20px;
  text-align: center;
  top: 50px;
  width: fit-content;
  li {
    cursor: pointer;
    padding: 12px;
    &:hover {
      background-color: #bbb;
      a {
        color: #fff;
      }
      button {
        color: #fff;
      }
    }
  }
  a {
    color: rgba(0, 0, 0, .6);
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border: none;
    color: rgba(0, 0, 0, .6);
    font-size: 1em;
    padding: 0;
    margin: 0;
  }
`;

function NavBar({ user }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleSignout = (e) => {
    e.preventDefault();
    // remove cookie
    Cookies.remove('token');
    // reload page
    window.location.reload();
  };

  return (
    <Nav>
      {/* left side nav links */}
      <StyledLinks>
        <NavLink to="/" exact className="styled-link">Home</NavLink>
        <NavLink to="/blog" exact className="styled-link">Blog</NavLink>
      </StyledLinks>
      {/* centered logo */}
      <Logo>
        <img href="/" className="logo-image" src="./assets/logo.png" alt="JobSite" />
      </Logo>
      {/* right side nav links */}
      <StyledLinks className="right-nav">
        {/* user is not signed in */}
        {!user && (
          <>
            <NavLink to="/signup" exact className="styled-link">Sign Up</NavLink>
            <NavLink to="/signin" exact className="styled-link">Sign In</NavLink>
          </>
        )}
        {/* user is signed in */}
        {user && (
          <>
            <span className="greeting">Welcome, {user.firstName}</span>
            <FaRegUserCircle size={24} className="styled-link" onClick={() => setIsVisible(!isVisible)} />
            <NavDropdown onClick={() => setIsVisible(false)} isVisible={isVisible ? 'block' : 'none'}>
              <li><NavLink to="/profile" exact>Profile</NavLink></li>
              <li><NavLink to="/notes" exact>Notes</NavLink></li>
              <li><NavLink to="/saved" exact>Saved</NavLink></li>
              <li><NavLink to="/calendar" exact>Calendar</NavLink></li>
              <li><a href="/" onClick={handleSignout}>Sign Out</a></li>
            </NavDropdown>
          </>
        )}
      </StyledLinks>
    </Nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
}.required;
export default NavBar;
