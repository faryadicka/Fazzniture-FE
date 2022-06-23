// ActionString
import { loginAuth, PENDING, FULFILLED, REJECTED } from "../actionCreator/actionString";

const initialState = {
  loginData: {},
  isLoading: false,
  isLoggedIn: false,
  err: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginAuth + PENDING:
      return { ...state, isLoading: true }
    case loginAuth + FULFILLED:
      return { ...state, loginData: action.payload.data, isLoading: false, isLoggedIn: true }
    case loginAuth + REJECTED:
      return { ...state, isLoading: false, err: action.payload }
    default:
      return state
  }
}

export default userReducer