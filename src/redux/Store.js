import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { CartItemReducer } from "./CartItem/CartItemReducer";

const myLogger = store => next => action => {
    console.log("Rendering");
    console.log(store.getState())
    return next()
}

const store = createStore(CartItemReducer, composeWithDevTools(applyMiddleware(myLogger)));

export default store;