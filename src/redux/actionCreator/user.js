// RequestAXIOS
import { authLoginAxios } from "../../services/auth"
// ActionString
import { loginAuth } from "../actionCreator/actionString"

export const loginAuthAction = (body) => {
  return {
    type: loginAuth,
    payload: authLoginAxios(body)
  }
}