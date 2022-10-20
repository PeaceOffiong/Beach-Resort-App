/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
  const { featuredRooms } = useGlobalContext();
  return (
    <section id="section2">
      <div className="title">
        <h3>Featured Rooms</h3>
        <div className="underline"></div>
      </div>
      <ul className="ul">
        {featuredRooms.map((each) => {
          return (
            <li key={each.sys.id} className="li">
              <div className="box">
                <img
                  src={each.fields.images[0].fields.file.url}
                  alt={each.fields.name}
                  className="hotel-img"
                />
                <div className="featured">
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

export default FeaturedRooms;
