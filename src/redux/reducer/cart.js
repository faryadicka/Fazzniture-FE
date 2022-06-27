import { increaseProduct, decreaseProduct, updateCart } from "../actionCreator/actionString"

const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateCart:

    default:
      return state
  }
}

export default cartReducer