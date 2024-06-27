import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*Responsiveness of Navbar */
const NavbarContainer = styled.div`
  background-color: #212e3d;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Logo = styled.h1`
  color: #fff;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0e87ea;
  }

  @media (max-width: 600px) {
    margin-left: 10px;
    font-size: 0.9rem;
  }
`;

 
const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>Community Forum</Logo>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                {/* Add more navigation links as needed */}
            </div>
        </NavbarContainer>
    );
};
 
export default Navbar;