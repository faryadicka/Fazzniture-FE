import axios from "axios";
const { REACT_APP_HOST } = process.env

export const getProductsAxios = (name = "", category = "", size = "", brand = "", color = "", max = "", min = "", sort = "", order = "", page = "1") => {
  const URL = `${REACT_APP_HOST}/product?category=${category}&size=${size}&color=${color}&brand=${brand}&max_range=${max}&min_range=${min}&sort=${sort}&order=${order}&page=${page}&limit=12`
  return axios.get(URL)
}

export const getProductByIdAxios = (id) => {
  const URL = `${REACT_APP_HOST}/product/${id}`
  return axios.get(URL)
}

export const getProductRelatedAxios = (category) => {
  const URL = `${REACT_APP_HOST}/product?category=${category}&page=1&limit=3`
  return axios.get(URL)
}