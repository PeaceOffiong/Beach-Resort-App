/* eslint-disable no-unused-vars */
const reducer = (state, action) => {
  if (action.type === "TOOGLE_BTN") {
    return { ...state, navButton: !state.navButton };
  }
  if (action.type === "LOAD_FEATURE_DATA") {
    return { ...state, featuredRooms: action.payload };
  }
  if (action.type === "LOAD_SORTED_DATA") {
    return { ...state, sortedRooms: action.payload };
  }
  if (action.type === "GET_DATA") {
    return { ...state, Rooms: action.payload };
  }
  if (action.type === "SET_FILTERED_STATE") {
    const { name, value } = action.payload;
    return { ...state, [name]: value };
  }
  if (action.type === "SET_MIN_MAX_PRICE") {
    const { tempmaxPrice, tempminPrice } = action.payload;
    return {
      ...state,
      minPrice: tempminPrice,
      maxPrice: tempmaxPrice,
    };
  }
  throw new Error("no matching type");
};
export default reducer;
