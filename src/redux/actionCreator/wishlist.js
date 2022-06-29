import { addWhishlist, removeWhishlist } from "./actionString"

export const addWhishlistAction = (data) => {
  return {
    type: addWhishlist,
    payload: data
  }
}

export const deleteWhishlistAction = (remove) => {
  return {
    type: removeWhishlist,
    payload: remove
  }
}