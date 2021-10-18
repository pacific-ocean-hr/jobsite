import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import logo from '../../../dist/assets/logo.png';

function NavBar() {
  return (
    <Header>
      <Nav>
        <StyledLinks>
          <NavLink
            to='/'
            exact
            activeStyle={{
              borderBottom: 'solid thin #ACC196',
            }}
            className='styled-link'>
            Jobs
          </NavLink>
          <NavLink
            to='/blog'
            exact
            activeStyle={{
              borderBottom: 'solid thin #ACC196',
            }}
            className='styled-link'>
            Blog
          </NavLink>
        </StyledLinks>
        <NavLink
          to='/'
          exact
          style={{ textDecoration: 'none', color: 'black', fontSize: '2em' }}
        >
          <img src='../assets/logo.png' alt='JobSite' style={{ maxHeight: '70px', maxWidth: '150px' }} />
        </NavLink>
        <StyledLinks>
          <NavLink
            to='/signup'
            exact
            activeStyle={{
              borderBottom: 'solid thin #ACC196',
            }}
            className='styled-link'>
            Sign Up
          </NavLink>
          <NavLink
            to='/signin'
            exact
            activeStyle={{
              borderBottom: 'solid thin #ACC196',
            }}
            className='styled-link'>
            <b>Sign In</b>
          </NavLink>
        </StyledLinks>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  padding: 0px;
  margin-bottom: 5px;
`;

const Nav = styled.nav`
  margin: auto;
  padding: 2px 0 3px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;
  flex-wrap: nowrap;
  border-bottom: solid thin #f2f2f2;
`;

const StyledLinks = styled.div`
  .styled-link {
    font-size: 18px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      background-color: #ACC196;
      color: white;
    }
  }
`;

export default NavBar;
