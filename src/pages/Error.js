/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="Error">
      <div className="innerDescription">
        <h3>Oops! It's A Dead End</h3>
        <div className="underline"></div>
        <Link to="/">
          <button className="bttn">Return Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
