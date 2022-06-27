// RequestAXIOS
import { getProductsAxios, createNewProductAxios } from "../../services/products"
// ActionString
import { getProductsString , createNewProduct} from "./actionString"

export const getProductsAction = (name, category, size, brand, color, max, min, sort, order, page) => {
  return {
    type: getProductsString,
    payload: getProductsAxios(name, category, size, brand, color, max, min, sort, order, page)
  }
}

export const createProduct = (body, token) => {
  return {
    type: createNewProduct,
    payload: createNewProductAxios(body, token)
  }
}