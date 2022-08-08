import { createContext, useContext, useReducer } from "react";
import { v4 as uid } from "uuid";

const Context = createContext();

const initialState = {
  counter: 0,
  increment: false,
  decrement: false,

  state: [
    {
      id: uid,
      count: 0,
    }
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        ...state,
        // decrement: action.payload.type,
        state: [action.payload, ...state.state],
      };
    case "UPDATE_COUNTER":
      return {
        ...state,
        // decrement: action.payload.type,
        state: action.payload,
      };
    case "RESET_COUNTER":
      return {
        state: action.payload
      };
    default:
      return { state };
  }
};

export const useContextAPI = () => {
  const { state, dispatch } = useContext(Context);

  return [state, dispatch];
};

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}
