/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Singleroom = () => {
  const { id } = useParams();
  const { Rooms } = useGlobalContext();
  const room = Rooms.find((room) => room.fields.slug === id);

  if (room === undefined) {
    return (
      <section className="Error">
        <div className="innerDescription">
          <h3>No Room to display</h3>
          <div className="underline"></div>
          <Link to="/rooms">
            <button className="bttn">Return to Rooms</button>
          </Link>
        </div>
      </section>
    );
  }
  const { fields, sys } = room;
  const {
    description,
    capacity,
    price,
    pets,
    breakfast,
    size,
    extras,
    images,
    name,
  } = fields;
  const otherImages = images.slice(1);

  return (
    <section>
      <div className="header">
        <img src={images[0].fields.file.url} alt={name} />
        <div className="innerDescription">
          <div className="title">
            <h3>{name}</h3>
            <div className="underline"></div>
            <Link to="/rooms">
              <button className="bttn">Back To Rooms</button>
            </Link>
          </div>
        </div>
      </div>
      <ul className="imgcontainer">
        {otherImages.map((eachImage, index) => {
          return (
            <li key={index}>
              <img src={eachImage.fields.file.url} alt="a room"/>;
            </li>
          );
        })}
      </ul>
      <aside>
        <div className="top">
          <div className="details">
            <div className="title">
              <h3>Details</h3>
              <div className="underline"></div>
            </div>
            <p>{description}</p>
          </div>
          <ul className="info">
            <div className="title">
              <h3>Info</h3>
              <div className="underline"></div>
            </div>
            <li>Price: {price}</li>
            <li>Size: {size} SQFT</li>
            <li>Max Capacity: {capacity}</li>
            <li>{pets ? "Pets Allowed" : "Pets Not Allowed"}</li>
            <li>
              {breakfast
                ? "Free Breakfast Included"
                : "Free Breakfast Not Included"}
            </li>
          </ul>
        </div>

        <ul className="extras">
          <div className="title">
            <h3>Extras</h3>
            <div className="underline"></div>
          </div>
          {extras.map((each, index) => {
            return <li key={index}>{each}</li>;
          })}
        </ul>
      </aside>
    </section>
  );
};

export default Singleroom;
