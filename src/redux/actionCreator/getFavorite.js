// RequestAXIOS
import getFavoriteAxios from "../../services/getFavorite.js"
// ActionString
import { getFavorite } from "./actionString"

export const getFavoriteAction = (token) => {
  return {
    type: getFavorite,
    payload: getFavoriteAxios(token)
  }
}