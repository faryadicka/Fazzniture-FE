import { combineReducers } from "redux";

import userReducer from "./user";
import productsReducer from "./products";
import favoriteProductReducer from "./favorite";
import registerReducer from "./register";
import helpersReducer from "./helpers";

const reducer = combineReducers({
  user: userReducer,
  favorite: favoriteProductReducer,
  products: productsReducer,
  register: registerReducer,
  helpers: helpersReducer,
})

export default reducer