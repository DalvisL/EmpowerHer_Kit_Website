/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

function Navigation() {
  return (
    <NavWrapper>
      <NavBar>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#toolkit">Toolkit</NavLink>
          <NavLink href="#about">About Us</NavLink>
        </NavItems>
      </NavBar>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  margin-top: 14px;
  margin-bottom: 20px;
`;

const NavBar = styled.div`
  border-radius: 20px;
  background-color: #92dfbe;
  display: flex;
  height: 40px;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const NavItems = styled.div`
  display: flex;
  width: 100%;
  max-width: 301px;
  justify-content: space-between;
`;

const NavLink = styled.a`
  color: #06423d;
  text-decoration: none;
  font: 20px Josefin Sans, sans-serif;
  transition: color 0.3s ease;
  &:hover {
    color: #F2C758;
  }
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export default Navigation;