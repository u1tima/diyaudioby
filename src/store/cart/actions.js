import { ADD_TO_CART, REFRESH_CART, DELETE_FROM_CART } from './actionTypes';

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

export const deleteFromCart = comp => {
  return {
    type: DELETE_FROM_CART,
    payload: comp,
  }
}