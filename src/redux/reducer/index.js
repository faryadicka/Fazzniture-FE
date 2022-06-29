import { combineReducers } from "redux";

import userReducer from "./user";
import productsReducer from "./products";
import favoriteProductReducer from "./favorite";
import registerReducer from "./register";
import helpersReducer from "./helpers";
import cartReducer from "./cart";
import wishListReducer from "./wishlist";

const reducer = combineReducers({
  user: userReducer,
  favorite: favoriteProductReducer,
  products: productsReducer,
  register: registerReducer,
  helpers: helpersReducer,
  cartOfProduct: cartReducer,
  wishlist: wishListReducer
})

export default reducer