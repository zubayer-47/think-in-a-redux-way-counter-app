import React from "react";
import { v4 as uid } from 'uuid';

import ChildCounter from "./ChildCounter";
import { useContextAPI } from "./Context/Context";

export default function Counter() {
  const [state, dispatch] = useContextAPI();

  const handleCounterAdd = () => {
    dispatch({type: "ADD_COUNTER", payload: {
        id: uid(),
        count: 0
    }})
  }

  const handleReset = () => {
    dispatch({type: "RESET_COUNTER", payload: [{
        id: uid(),
        count: 0
    }]})
  }

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">

       {state?.state?.map(counter => <ChildCounter key={counter?.id} id={counter?.id} />)}

        <div className="h-auto bg-transparent flex justify-end">
          <div className="flex space-x-3">
            <button onClick={handleCounterAdd} className="bg-indigo-400 text-white px-3 py-2 rounded shadow">
              + Add Counter
            </button>
            <button onClick={handleReset} className="bg-red-400 text-white px-3 py-2 rounded shadow">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
