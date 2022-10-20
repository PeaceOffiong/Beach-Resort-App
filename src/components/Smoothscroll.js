/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";

const Smoothscroll = () => {
  return (
    <>
      <Link
        to="section1"
        spy={true}
        smooth={true}
        // offset={0}
        duration={500}
      >
        <li>
          <h4>Services</h4>
        </li>
      </Link>
      <Link
        to="section2"
        spy={true}
        smooth={true}
        // offset={-1}
        duration={500}
      >
        <li>
          <h4>Featured Rooms</h4>
        </li>
      </Link>
    </>
  );
};

export default Smoothscroll;
