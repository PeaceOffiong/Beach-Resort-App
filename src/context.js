/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import Data from "./Data";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  navButton: false,
  Rooms: [...Data],
  featuredRooms: [],
  sortedRooms: Data,
  capacity: 1,
  type: "all",
  maxPrice: 0,
  Price: 0,
  breakfast: false,
  pets: false,
  minPrice: 0,
  minSize: 0,
  maxSize: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toogleDisplay = () => {
    dispatch({ type: "TOOGLE_BTN" });
  };

  useEffect(() => {
    const result = state.Rooms.filter((item) => item.fields.featured === true);
    let tempmaxPrice = Math.max(
      ...state.Rooms.map((item) => item.fields.price)
    );
    let tempminPrice = Math.min(
      ...state.Rooms.map((item) => item.fields.price)
    );

    let priceRange = { tempmaxPrice, tempminPrice };

    dispatch({ type: "LOAD_FEATURE_DATA", payload: result });
    dispatch({ type: "SET_MIN_MAX_PRICE", payload: priceRange });
  }, [state.Rooms]);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const passingPayload = { name, value };

    dispatch({ type: "SET_FILTERED_STATE", payload: passingPayload });
    filterRooms();
  };

   const filterRooms = () => {
     let tempRooms = [...Data];
     let capacity = parseInt(state.capacity);
     let price = parseInt(state.Price);
     if (capacity !== 1) {
       tempRooms = tempRooms.filter((room) => room.fields.capacity >= capacity);
       dispatch({ type: "LOAD_SORTED_DATA", payload: tempRooms });
     }
     if (state.type !== "all") {
       tempRooms = tempRooms.filter((room) => room.fields.type === state.type);
       dispatch({ type: "LOAD_SORTED_DATA", payload: tempRooms });
     }
     if (price !== 0) {
       tempRooms = tempRooms.filter((room) => room.fields.price <= price);
       dispatch({ type: "LOAD_SORTED_DATA", payload: tempRooms });
     }
     if (state.breakfast) {
       tempRooms = tempRooms.filter(
         (room) => room.fields.breakfast === state.breakfast
       );
       dispatch({ type: "LOAD_SORTED_DATA", payload: tempRooms });
     }
     if (state.pets) {
       tempRooms = tempRooms.filter((room) => room.fields.pets === state.pets);
       dispatch({ type: "LOAD_SORTED_DATA", payload: tempRooms });
     }
     dispatch({ type: "LOAD_SORTED_DATA", payload: tempRooms });
   };

  useEffect(() => {
    filterRooms();
  }, [state.capacity, state.type, state.Price, state.breakfast, state.pets, filterRooms]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        toogleDisplay,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
