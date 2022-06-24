import { combineReducers } from "redux";

import userReducer from "./user";
import favoriteProductReducer from "./favorite";
import registerReducer from "./register";

const reducer = combineReducers({
  user: userReducer,
  favorite: favoriteProductReducer,
  register: registerReducer
})

export default reducer