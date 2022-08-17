import { ADD_SHOPPING_ITEM } from "./ActionTypes";

const initialState = [
  {
    id: 1,
    totalCount: 20,
    price: 35500,
  },
  {
    id: 2,
    totalCount: 35,
    price: 35500,
  },
  {
    id: 3,
    totalCount: 72,
    price: 35500,
  },
];

export const CartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPPING_ITEM: {
      const copiedArray = [...state];
      const index = copiedArray.findIndex(
        (item) => item.id === action.payload.id
      );

      const selectedItem = copiedArray.find(
        (item) => item.id === action.payload.id
      );
      --selectedItem.totalCount;

      copiedArray[index] = selectedItem

      console.log(copiedArray);
      return {};
    }
    default:
      return state
  }
};
