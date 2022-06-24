import { combineReducers } from "redux";

import userReducer from "./user";
import favoriteProductReducer from "./favorite";

const reducer = combineReducers({
  user: userReducer,
  favorite: favoriteProductReducer
})

export default reducer