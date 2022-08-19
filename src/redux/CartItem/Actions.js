import {
  ADD_SHOPPING_ITEM,
  DECREMENT_CART_ITEM,
  INCREMENT_CART_ITEM
} from "./ActionTypes";

export const addCartItem = (id) => {
  return {
    type: ADD_SHOPPING_ITEM,
    payload: {
      id,
    },
  };
};

export const decrementCartItem = (id) => {
  return {
    type: DECREMENT_CART_ITEM,
    payload: {
      id,
    },
  };
};

export const incrementCartItem = (id) => {
  return {
    type: INCREMENT_CART_ITEM,
    payload: {
      id,
    },
  };
};
