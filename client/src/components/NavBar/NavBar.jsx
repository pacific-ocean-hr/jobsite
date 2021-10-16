import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
  return (
    <Header>
      <Nav>
        <StyledLinks>
          <NavLink to='/' exact className='styled-link'>
            Jobs
          </NavLink>
          <NavLink to='/blog' exact className='styled-link'>
            Blog
          </NavLink>
        </StyledLinks>
        <NavLink
          to='/'
          exact
          style={{ textDecoration: 'none', color: 'black', fontSize: '2em' }}
        >
          <h1>JobSite</h1>
        </NavLink>
        <StyledLinks>
          <NavLink to='/signup' exact className='styled-link'>
            Sign Up
          </NavLink>
          <NavLink to='/signin' exact className='styled-link'>
            <b>Sign In</b>
          </NavLink>
        </StyledLinks>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  padding: 0px;
  margin-bottom: 12px;
`;

const Nav = styled.nav`
  margin: auto;
  padding: 2px 0 3px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;
  flex-wrap: nowrap;
  border-bottom: solid thin gray;
`;

const StyledLinks = styled.div`
  .styled-link {
    font-size: 1.5em;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      color: rgba(0.9);
    }
  }
`;

export default NavBar;
