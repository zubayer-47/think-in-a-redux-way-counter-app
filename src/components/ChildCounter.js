import React from "react";
import { useContextAPI } from "./Context/Context";

export default function ChildCounter(props) {
  const [state, dispatch] = useContextAPI();

  const counter = state.state.find((c) => c.id === props.id);

  const handleIncrement = () => {
    let counterState = [...state.state];
    const index = counterState.findIndex((c) => c.id === props.id);
    counter.count += 1;

    counterState.splice(index, 1, counter);

    dispatch({
      type: "UPDATE_COUNTER",
      payload: counterState,
    });
  };

  const handleDecrement = () => {
    let counterState = [...state.state];
    const index = counterState.findIndex((c) => c.id === props.id);
    counter.count -= 1;
    counterState.splice(index, 1, counter);

    dispatch({
      type: "UPDATE_COUNTER",
      payload: counterState,
    });
  };

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
        <button onClick={handleDecrement} className="bg-red-400 text-white px-3 py-2 rounded shadow">
          Decrement
        </button>
      </div>
    </div>
  );
}
