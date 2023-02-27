import { createStore, combineReducers } from "redux";
import { productReducer } from "./Reducer/ProductReducer";

export const configStore = () => {
  const extention =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
    const myStore=createStore(combineReducers({productReducer}),extention);
    
    return myStore
};
