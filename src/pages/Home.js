/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <section className="home-center">
      <div className="design">
        <div className="left-center"></div>
      </div>
      <div className="inner">
        <h3>Enjoy Your Dream Vacation</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          deleniti enim eum dolor sint laboriosam harum quis voluptate rem.
          Itaque quod ducimus aliquam voluptates blanditiis. Quam iure aut
          accusantium aspernatur.
        </p>
        <Link to="/rooms">
          <button>Our Rooms</button>
        </Link>
      </div>
      <Service />
      <FeaturedRooms />
    </section>
  );
};

export default Home;
