// RequestAXIOS

import { getProductsAxios, getProductByIdAxios, createNewProductAxios } from "../../services/products"
// ActionString
import { getProductsString, getProductIdString, setStatus, createNewProduct } from "./actionString"

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