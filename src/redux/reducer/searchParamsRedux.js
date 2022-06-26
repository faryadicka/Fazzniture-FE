import { categoryProduct, sizeProduct, brandProduct, colorProduct } from "../actionCreator/actionString";

const initialState = {
  category: "",
  size: "",
  brand: "",
  color: "",
}

const searchParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryProduct:
      const { category } = action.payload
      return { ...state, category }
    case sizeProduct:
      const { size } = action.payload
      return { ...state, size }
    case brandProduct:
      const { brand } = action.payload
      return { ...state, brand }
    case colorProduct:
      const { color } = action.payload
      return { ...state, color }
    default:
      return state
  }
}

export default searchParamsReducer