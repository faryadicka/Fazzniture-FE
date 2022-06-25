// RequestAXIOS
import { authRegisterAxios } from "../../services/auth"
// ActionString
import { registerAuth } from "../actionCreator/actionString"


export const registerAuthAction = (body) => {
  return {
    type: registerAuth,
    payload: authRegisterAxios(body)
  }
}