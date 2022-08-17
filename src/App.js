import React from "react";
import { Provider } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import store from "./redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}
