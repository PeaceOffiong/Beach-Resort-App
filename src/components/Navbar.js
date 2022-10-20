/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../images/logo.svg";
import { useGlobalContext } from "../context";
import Smoothscroll from "../components/Smoothscroll";

const Navbar = () => {
  const location = useLocation();

  const { toogleDisplay, navButton } = useGlobalContext();

  const navBarProperties = () => {
    if (location.pathname === "/") {
      return <Smoothscroll />;
    } else {
      return null;
    }
  };

  let toogle = navButton ? "show" : null;
  return (
    <nav>
      <div className="nav-header">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <button className="toggle-button" onClick={(e) => toogleDisplay(e)}>
          <FaAlignJustify />
        </button>

        <ul className={`section ${toogle}`} id="ul">
          <Link to="/">
            <li>
              <h4>Home</h4>
            </li>
          </Link>
          <Link to="rooms">
            <li>
              <h4>Rooms</h4>
            </li>
          </Link>
          {navBarProperties()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
