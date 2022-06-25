import { getProductsString, PENDING, FULFILLED, REJECTED } from "../actionCreator/actionString";

const initialState = {
  products: [],
  isLoading: false,
  err: null
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProductsString + PENDING:
      return { ...state, isLoading: true }
    case getProductsString + FULFILLED:
      console.log(action.payload.data)
      return { ...state, products: action.payload.data, isLoading: false }
    case getProductsString + REJECTED:
      return { ...state, isLoading: false, err: action.payload }
    default:
      return state
  }
}

export default productsReducer