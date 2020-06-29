import { ADD_TO_CART, REFRESH_CART, DELETE_FROM_CART } from "./actionTypes";

const initialState = [];

export const cart = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return [...state, payload];

    case REFRESH_CART:
      return [...state.map(comp => comp.id === payload.id ? payload : comp)]

    case DELETE_FROM_CART:
      return [...state.filter(comp => comp.id !== payload.id)]

    default:
      return [...state];
  }
}