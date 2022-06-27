// RequestAXIOS
import { getProductsAxios, getProductByIdAxios } from "../../services/products"
// ActionString
import { getProductsString, getProductIdString, setStatus } from "./actionString"

export const getProductsAction = (name, category, size, brand, color, max, min, sort, order, page) => {
  return {
    type: getProductsString,
    payload: getProductsAxios(name, category, size, brand, color, max, min, sort, order, page)
  }
}

export const getProductByIdAction = (id) => {
  return {
    type: getProductIdString,
    payload: getProductByIdAxios(id)
  }
}

export const setStatusAction = (status) => {
  return {
    type: setStatus,
    payload: {
      status
    }
  }
}