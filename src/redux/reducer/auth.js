// ActionStrings
import { getPofile, authLogin, PENDING, FULFILLED, REJECTED } from "../actionCreator/actionString";

const initialState = {
  authData: {},
  userData: {},
  err: null,
  isLoggedIn: false,
  isLoading: true,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authLogin + PENDING:
      return { ...state, isLoading: true }
    case authLogin + FULFILLED:
      console.log(action.payload.data)
      return { ...state, authData: action.payload.data.data, isLoading: false }
    case authLogin + REJECTED:
      return { ...state, err: action.payload, isLoading: false }
    default:
      return state
  }
}

export default authReducer