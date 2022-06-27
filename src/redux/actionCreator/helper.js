import { sizeProduct, colorProduct, categoryProduct, brandProduct } from "./actionString"

export const setSize = (size) => {
  return {
    type: sizeProduct,
    payload: {
      size
    }
  }
}

export const setColor = (color) => {
  return {
    type: colorProduct,
    payload: {
      color
    }
  }
}
export const setCategory = (category) => {
  return {
    type: categoryProduct,
    payload: {
      category
    }
  }
}
export const setBrand = (brand) => {
  return {
    type: brandProduct,
    payload: {
      brand
    }
  }
}