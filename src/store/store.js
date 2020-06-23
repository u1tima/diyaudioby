import { createStore } from 'redux';

const ADD_TO_CART = "ADD_TO_CART";

const initialSstate = {
  cart: [],
  count: 0,
}

export const addToCart = comp => {
  return {
    type: ADD_TO_CART,
    payload: comp,
  }
}

const reducer = (state = initialSstate, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: state.cart.push(action.payload),
        ...state
      }

    default:
      return { ...state };
  }
}

const store = () => createStore(
  reducer,
  initialSstate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;