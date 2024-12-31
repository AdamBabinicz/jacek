import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImImage } from "react-icons/im";
import Slider from "./Slider";
// import { SliderData } from "./SliderData";

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const Logo = styled(Link)`
  position: fixed;
  color: #fff;
  top: 1rem;
  left: 1.5rem;
  transition: all 0.3s ease-in-out;
  font-size: 2.5rem;
  z-index: 11;

  :hover {
    color: #ccc;
  }
`;

const NavItems = styled.div`
  position: fixed;
  z-index: 10;
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 1rem;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #ccc;
    border-bottom: 2px solid #ccc;
  }
`;

const Header = () => {
  return (
    <>
      <Navbar>
        <Logo to="/" aria-label="Strona główna">
          <ImImage />
        </Logo>
        <NavItems>
          <NavbarLink to="/">Jacek</NavbarLink>
          <NavbarLink to="/aneta">Aneta</NavbarLink>
          <NavbarLink to="/ania">Ania</NavbarLink>
          <NavbarLink to="/marysia">Marysia</NavbarLink>
        </NavItems>
      </Navbar>
    </>
  );
};

export default Header;
