import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//images
import Logo from "../assets/Logo.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [width, setWidth] = useState(null);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setIsNavOpen(false);
    }
  }, [width]);

  return (
    <Wrapper isNavOpen={isNavOpen}>
      <img src={Logo} alt="" className="logo" />
      <ul className="links">
        <li className="link">
          <Link to="/">Home </Link>
        </li>
        <li className="link">
          <Link to="/about">About </Link>
        </li>
        <li className="link">
          <Link to="/shop">Shop </Link>
        </li>
        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
        <div className="close_menu" onClick={() => setIsNavOpen(false)}>
          +
        </div>
      </ul>
      <MenuIcon className="menu" onClick={() => setIsNavOpen(true)} />
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
  position: relative;
  overflow: hidden;

  .logo {
    width: 8rem;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 768px) {
      color: ${(props) => props.theme.secondary};
      position: fixed;
      top: 0;
      right: ${(props) => (props.isNavOpen ? "0" : "-100%")};
      width: 100%;
      height: 100vh;
      padding: 2rem 1rem;
      background-color: ${(props) => props.theme.primary};
      -webkit-transition: 0.4s;
      transition: 0.4s ease;
      -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      z-index: 100;
      text-align: center;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: auto 0;
    }
  }

  .link {
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }

  .close_menu {
    transform: rotate(-45deg);
    font-size: 3rem;
    font-weight: 400;
    color: white;
    position: absolute;
    top: 1rem;
    left: ${(props) => (props.isNavOpen ? "1rem" : "100%")};
    z-index: 999;
    transition: 0.4s ease;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .menu {
    fill: white;
    width: 2rem;
    @media screen and (min-width: 768px) {
      opacity: 0;
    }
  }
`;
