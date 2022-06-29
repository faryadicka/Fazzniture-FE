// RequestAXIOS
import { authLoginAxios, getProfileAxios } from "../../services/auth"
// ActionString
import { loginAuth, getProfile, logoutAuth } from "../actionCreator/actionString"

export const loginAuthAction = (body) => {
  return {
    type: loginAuth,
    payload: authLoginAxios(body)
  }
}

export const getProfileAction = (token) => {
  return {
    type: getProfile,
    payload: getProfileAxios(token)
  }
}

export const logoutAuthAction = (remove, value) => {
  return {
    type: logoutAuth,
    payload: {
      remove,
      value
    }
  }
}
