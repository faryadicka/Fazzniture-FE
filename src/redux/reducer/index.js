import { combineReducers } from "redux";

import userReducer from "./user";
import productsReducer from "./products";
import favoriteProductReducer from "./favorite";
import searchParamsReducer from "./searchParamsRedux";

const reducer = combineReducers({
  user: userReducer,
  favorite: favoriteProductReducer,
  products: productsReducer,
  searchParamsRedux: searchParamsReducer
})

export default reducer