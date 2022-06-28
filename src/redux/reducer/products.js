import { getProductsString, getProductIdString, PENDING, FULFILLED, REJECTED, setStatus, createNewProduct } from "../actionCreator/actionString";

const initialState = {
  products: [],
  productId: [],
  isLoading: false,
  err: null,
  statusGet: false,
  result: []
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProductsString + PENDING:
      return { ...state, isLoading: true }
    case getProductsString + FULFILLED:
      return { ...state, products: action.payload.data, isLoading: false }
    case getProductsString + REJECTED:
      return { ...state, isLoading: false, err: action.payload }

    case createNewProduct + PENDING:
      return { ...state, isLoading: true }
    case createNewProduct + FULFILLED:
      return { ...state, results: action.payload.data, isLoading: false }
    case createNewProduct + REJECTED:
      return { ...state, isLoading: false, err: action.payload }

    case getProductIdString + PENDING:
      return { ...state, isLoading: true }
    case getProductIdString + FULFILLED:
      return { ...state, productId: action.payload.data, isLoading: false }
    case getProductIdString + REJECTED:
      return { ...state, isLoading: false, err: action.payload }

    case setStatus:
      const { status } = action.payload
      return { ...state, statusGet: status }
    default:
      return state
  }
}

export default productsReducer
