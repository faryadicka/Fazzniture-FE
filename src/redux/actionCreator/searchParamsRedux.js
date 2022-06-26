import { categoryProduct, sizeProduct, brandProduct, colorProduct } from "./actionString";


export const setCategoryAction = (category) => {
  return {
    type: categoryProduct,
    payload: {
      category
    }
  }
}

export const setSizeAction = (size) => {
  return {
    type: sizeProduct,
    payload: {
      size
    }
  }
}
export const setBrandAction = (brand) => {
  return {
    type: brandProduct,
    payload: {
      brand
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