// ActionString
import {getFavorite , PENDING, FULFILLED, REJECTED } from "../actionCreator/actionString";

const initialState = {
  favoriteProducts : []
}

const favoriteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case getFavorite + PENDING:
      return { ...state, isLoading: true }
    case getFavorite + FULFILLED:
      return { ...state, favoriteProducts: action.payload.data.data, isLoading: false, isLoggedIn: true }
    case getFavorite + REJECTED:
      return { ...state, isLoading: false, err: action.payload }
    default:
      return state
  }
}

export default favoriteProductReducer