import { ADD_SHOPPING_ITEM, REMOVE_SHOPPING_ITEM } from './ActionTypes'

export const addCartItem = id => {
  return {
    type: ADD_SHOPPING_ITEM,
    payload: {
      id
    }
  }
}

export const removeCartItem = id => {
  return {
    type: REMOVE_SHOPPING_ITEM,
    payload: {
      id
    }
  }
}
