import { ADD_TO_CART, REFRESH_CART, DELETE_FROM_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("dab_cart") || "[]");

export const cart = (state = initialState, action) => {

  const { type, payload } = action;

  let cart;

  switch (type) {
    case ADD_TO_CART:
      cart = [...state, payload];
      break;

    case REFRESH_CART:
      cart = state.map(comp => comp.id === payload.id ? payload : comp);
      break;

    case DELETE_FROM_CART:
      cart = state.filter(comp => comp.id !== payload.id);
      break;

    default:
      cart = [...state];
      break;
  }

  localStorage.setItem('dab_cart', JSON.stringify(cart));

  return cart;

}