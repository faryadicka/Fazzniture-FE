import { sizeProduct, brandProduct, categoryProduct, colorProduct, deleteParams, sortProduct, rangeProduct } from "./actionString"

export const setCategory = (category) => {
  return {
    type: categoryProduct,
    payload: {
      category
    }
  }
}
export const setSize = (size) => {
  return {
    type: sizeProduct,
    payload: {
      size
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
export const setColor = (color) => {
  return {
    type: colorProduct,
    payload: {
      color
    }
  }
}

export const setSort = (sort, order) => {
  return {
    type: sortProduct,
    payload: {
      sort,
      order
    }
  }
}

export const setRange = (min, max) => {
  return {
    type: rangeProduct,
    payload: {
      min,
      max
    }
  }
}

export const deleteParamsAction = (object) => {
  return {
    type: deleteParams,
    payload: {
      object
    }
  }
}