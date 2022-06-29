import { addWhishlist, removeWhishlist } from "../actionCreator/actionString"

const initialState = {
  wishlist: []
}

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case addWhishlist:
      console.log(state.wishlist)
      return { wishlist: action.payload }
    case removeWhishlist:
      return { wishlist: action.payload }
    default:
      return state
  }
}

export default wishListReducer