import React from "react";
import Provider from "./components/Context/Context";
import Counter from "./components/Counter";

export default function App() {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
}
