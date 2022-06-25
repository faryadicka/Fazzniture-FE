import { combineReducers } from "redux";

import userReducer from "./user";
import productsReducer from "./products";
import favoriteProductReducer from "./favorite";
import registerReducer from "./register";

const reducer = combineReducers({
  user: userReducer,
  favorite: favoriteProductReducer,
  products: productsReducer,
  register: registerReducer
})

export default reducer