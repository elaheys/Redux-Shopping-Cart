import { combineReducers } from "redux";

import productReducer from "./products/productsReducer";
import cartReducer from "./Cart/cartReducer";

const rootReducer = combineReducers({
    productsState:productReducer,
    cartState:cartReducer
})

export default rootReducer;