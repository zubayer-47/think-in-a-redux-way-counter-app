import {
  ADD_SHOPPING_ITEM,
  DECREMENT_CART_ITEM,
  INCREMENT_CART_ITEM
} from "./ActionTypes";

const initialState = {
  carts: [
    {
      id: 1,
      totalCount: 20,
      orderCount: 0,
      price: 35500,
      title: "Asus Vivobook X515MA",
      amount: "35,500",
    },
    {
      id: 2,
      totalCount: 35,
      orderCount: 0,
      price: 9300,
      title: "Dell E1916HV 18.5 Inch",
      amount: "9,300",
    },
    {
      id: 3,
      totalCount: 72,
      orderCount: 0,
      price: 36500,
      title: "Canon Eos 4000D 18MP",
      amount: "36,500",
    },
  ],
  totalItem: 0,
  totalAmount: 0,
};

export const CartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPPING_ITEM: {
      const copiedState = { ...state, carts: [...state.carts] };
      const index = copiedState.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      const selectedItem = copiedState.carts.find(
        (item) => item.id === action.payload.id
      );

      if (selectedItem.totalCount) {
        selectedItem.totalCount--;
        selectedItem.orderCount++;
        copiedState.totalItem++;
        copiedState.totalAmount += selectedItem.price;
      }

      copiedState.carts[index] = selectedItem;
      return {
        ...copiedState,
        carts: [...copiedState.carts],
      };
    }

    case INCREMENT_CART_ITEM: {
      const copiedState = { ...state, carts: [...state.carts] };
      const updatedState = copiedState.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          if (cart.totalCount) {
            copiedState.totalItem++;
            cart.orderCount++;
            cart.totalCount--;
            copiedState.totalAmount += cart.price;
          }
        }

        return cart;
      });

      return {
        ...copiedState,
        carts: [...updatedState],
      };
    }

    case DECREMENT_CART_ITEM: {
      const copiedState = { ...state, carts: [...state.carts] };
      const updatedState = copiedState.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          cart.orderCount--;
          copiedState.totalItem--;
          cart.totalCount++;
          copiedState.totalAmount -= cart.price;
        }

        return cart;
      });

      return {
        ...copiedState,
        carts: [...updatedState],
      };
    }
    default:
      return state;
  }
};
