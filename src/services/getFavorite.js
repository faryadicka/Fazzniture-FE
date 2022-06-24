import axios from "axios";
const { REACT_APP_HOST } = process.env


export const getFavoriteAxios = (token) => {
  const URL = `${REACT_APP_HOST}/product/fav`
  return axios.get(URL, {
    headers: { "Authorization": token }
  })
}

export default getFavoriteAxios