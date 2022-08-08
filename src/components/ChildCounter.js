import React from "react";
import { handleIncrementDecrement } from "../utils/common";
import { useContextAPI } from "./Context/Context";

export default function ChildCounter(props) {
  const [state, dispatch] = useContextAPI();

  const counter = state.state.find((c) => c.id === props.id);

  const handleIncrement = () =>
    handleIncrementDecrement(counter, dispatch, props.id, state, "Increment");

  const handleDecrement = () =>
    handleIncrementDecrement(counter, dispatch, props.id, state);

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{counter.count}</div>
      <div className="flex space-x-3">
        <button
          onClick={handleIncrement}
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
