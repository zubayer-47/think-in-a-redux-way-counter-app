import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { CartItemReducer } from "./CartItem/CartItemReducer";

const myLogger = store => next => action => {
    return next(action)
}

const store = createStore(CartItemReducer, composeWithDevTools(applyMiddleware(myLogger)));

export default store;