// Axios
import { authLoginAxios, getProfileAxios } from "../../services/auth"

// ActionString
import { getPofile, authLogin } from "./actionString";

export const getProfileAction = (token) => {
  return {
    type: getPofile,
    payload: authLoginAxios()
  }
}

export const authLoginAction = (token) => {
  return {
    type: authLogin,
    payload: getProfileAxios()
  }
}