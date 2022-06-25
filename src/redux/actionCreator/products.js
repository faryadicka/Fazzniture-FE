// RequestAXIOS
import { getProductsAxios } from "../../services/products"
// ActionString
import { getProductsString } from "./actionString"

export const getProductsAction = (name, category, size, brand, color, max, min, sort, order, page) => {
  return {
    type: getProductsString,
    payload: getProductsAxios(name, category, size, brand, color, max, min, sort, order, page)
  }
}