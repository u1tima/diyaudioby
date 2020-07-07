import { ADD_TO_CART, REFRESH_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = comp => {
  return {
    type: ADD_TO_CART,
    payload: comp,
  }
}

export const refreshCart = comp => {
  return {
    type: REFRESH_CART,
    payload: comp,
  }
}

export const removeFromCart = comp => {
  return {
    type: REMOVE_FROM_CART,
    payload: comp,
  }
}