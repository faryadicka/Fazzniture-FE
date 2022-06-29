// ActionString
import { loginAuth, getProfile, PENDING, FULFILLED, REJECTED, logoutAuth } from "../actionCreator/actionString";

const initialState = {
  loginData: {},
  userInfo: {},
  isLoading: false,
  isLoggedIn: false,
  err: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginAuth + PENDING:
      return { ...state, isLoading: true }
    case loginAuth + FULFILLED:
      console.log(action.payload.data)
      return { ...state, loginData: action.payload.data, isLoading: false, isLoggedIn: true }
    case loginAuth + REJECTED:
      return { ...state, isLoading: false, err: action.payload }

    case getProfile + PENDING:
      return { ...state, isLoading: true }
    case getProfile + FULFILLED:
      return { ...state, userInfo: action.payload.data, isLoading: false, isLoggedIn: true }
    case getProfile + REJECTED:
      return { ...state, isLoading: false, err: action.payload }

    case logoutAuth:
      const { remove, value } = action.payload
      state.loginData = remove
      state.isLoggedIn = value
      return { ...state }
    default:
      return state
  }
}

export default userReducer