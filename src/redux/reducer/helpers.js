import { categoryProduct, sizeProduct, brandProduct, colorProduct, deleteParams, sortProduct, rangeProduct, searchProduct, pageProduct } from "../actionCreator/actionString"
import { setPage } from "../actionCreator/helpers"

let initialState = {
  urlParams: {
  }
}

const helpersReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryProduct:
      const { category } = action.payload
      console.log(category)
      state.urlParams.category = category
      return { ...state }
    case sizeProduct:
      const { size } = action.payload
      state.urlParams.size = size
      return { ...state }
    case brandProduct:
      const { brand } = action.payload
      state.urlParams.brand = brand
      return { ...state }
    case colorProduct:
      const { color } = action.payload
      state.urlParams.color = color
      return { ...state }
    case searchProduct:
      const { name } = action.payload
      state.urlParams.name = name
      return { ...state }
    case sortProduct:
      const { sort, order } = action.payload
      state.urlParams.sort = sort
      state.urlParams.order = order
      return { ...state }
    case rangeProduct:
      const { min, max } = action.payload
      state.urlParams.min_range = Number(min)
      state.urlParams.max_range = Number(max)
      return { ...state }
    case deleteParams:
      const { object } = action.payload
      state.urlParams = object
      return { ...state }
    case pageProduct:
      const { page } = action.payload
      state.urlParams.page = page
      return { ...state }
    default:
      return state
  }
}

export default helpersReducer