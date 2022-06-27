// RequestAXIOS

// ActionString
import { increaseProduct, decreaseProduct, updateCart } from "./actionString"

export const addProduct = (id) => {
  return {
    type: increaseProduct,
    id: id
  }
}

export const reduceProduct = (id) => {
  return {
    type: decreaseProduct,
    id: id
  }
}

export const updateProductCart = (id, qty) => {
  return {
    type: updateCart,
    id: id,
    qty: qty
  }
}