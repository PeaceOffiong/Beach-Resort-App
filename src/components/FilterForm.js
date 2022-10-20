/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../context";

const getUniqueValue = (items, value) => {
  return [...new Set(items.map((item) => item.fields[value]))];
};

const FilterForm = () => {
  const {
    Rooms,
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

  let types = getUniqueValue(Rooms, "type");
  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUniqueValue(Rooms, "capacity");

  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <form className="filter-form">
      <ul className="categories">
        <li>
          <label htmlFor="type"> Room Type</label>
          <select name="type" id="type" onChange={(e) => handleChange(e)}>
            {types}
          </select>
        </li>
        <li>
          <label htmlFor="capacity"> Guests</label>
          <select
            name="capacity"
            id="capacity"
            type="number"
            value={capacity}
            onChange={(e) => handleChange(e)}
          >
            {people}
          </select>
        </li>
        <li>
          <label htmlFor="Price">Room Price : ${Price}</label>
          <input
            type="range"
            name="Price"
            min={minPrice}
            max={maxPrice}
            value={Price}
            id="Price"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <div className="each">
            <label htmlFor="breakfast">Breakfast</label>
            <input
              type="checkbox"
              name="breakfast"
              id="special"
              checked={breakfast}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="each">
            <label htmlFor="pets">Pets</label>
            <input
              type="checkbox"
              name="pets"
              id="special"
              checked={pets}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </li>
      </ul>
    </form>
  );
};

export default FilterForm;
