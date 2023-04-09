import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, addToCart  } from "./productReducer";

export const reducers = combineReducers({
    allProducts : productReducer,
    singleProduct : selectedProductReducer,
    cartProduct: addToCart
})