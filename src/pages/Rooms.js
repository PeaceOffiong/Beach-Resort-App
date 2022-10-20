/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../context";
import Image from "../images/room-2.jpeg";
import { Link } from "react-router-dom";
import FilterForm from "../components/FilterForm";

const Rooms = () => {
  const {
    sortedRooms,
    featuredRooms,
    handleChange,
    capacity,
    type,
    Price,
    breakfast,
    pets,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
  } = useGlobalContext();

  if (sortedRooms.length <= 0) {
    return (
      <section className="Roommie">
        <div className="header">
          <img src={Image} alt="a room" />
          <div className="innerDescription">
            <div className="title">
              <h3>Our Rooms</h3>
              <div className="underline"></div>
              <Link to="/">
                <button className="bttn">Back To Home</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="int">
          <div className="title">
            <h3>Search Rooms</h3>
            <div className="underline"></div>
          </div>
        </div>
        <FilterForm />
        <h3 className="searchResult">There are No Rooms Of That Parameter</h3>
      </section>
    );
  }

  return (
    <section className="Roommie">
      <div className="header">
        <img src={Image} alt="a room" />
        <div className="innerDescription">
          <div className="title">
            <h3>Our Rooms</h3>
            <div className="underline"></div>
            <Link to="/">
              <button className="bttn">Back To Home</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="int">
        <div className="title">
          <h3>Search Rooms</h3>
          <div className="underline"></div>
        </div>
      </div>
      <FilterForm />
      <ul className="roomsZone">
        {sortedRooms.map((each, index) => {
          return (
            <li key={index} className="hi">
              <div className="container">
                <img
                  src={each.fields.images[0].fields.file.url}
                  alt={each.fields.name}
                  className="hotel-img"
                />
                <div className="featured all">
                  <Link to={`/room/${each.fields.slug}`} className="btn">
                    <button>Features</button>
                  </Link>
                </div>
                <div className="name">
                  <h4>{each.fields.name}</h4>
                </div>
                <div className="price">
                  <h3> ${each.fields.price}</h3>
                  <small>per night</small>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Rooms;
