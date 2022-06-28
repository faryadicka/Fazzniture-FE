import axios from "axios";
const { REACT_APP_HOST } = process.env

export const getProductsAxios = (name = "", category = "", size = "", brand = "", color = "", max = "", min = "", sort = "", order = "", page = "") => {
  const URL = `${REACT_APP_HOST}/product?name=${name}&category=${category}&size=${size}&color=${color}&brand=${brand}&max_range=${max}&min_range=${min}&sort=${sort}&order=${order}&page=${page}&limit=12`
  return axios.get(URL)
}

export const createNewProductAxios = (body, token) => {
  const URL = `${REACT_APP_HOST}/product`
  return axios.post(URL, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    }
  })
}
export const getProductByIdAxios = (id) => {
  const URL = `${REACT_APP_HOST}/product/${id}`
  return axios.get(URL)
}

export const getProductRelatedAxios = (category) => {
  const URL = `${REACT_APP_HOST}/product?category=${category}&page=1&limit=3`
  return axios.get(URL)
}

export const getAllCategoriesAxios = () => {
  const URL = `${REACT_APP_HOST}/categories`
  return axios.get(URL)
}

export const getAllBrandsAxios = () => {
  const URL = `${REACT_APP_HOST}/brands`
  return axios.get(URL)
}

export const getAllColorsAxios = () => {
  const URL = `${REACT_APP_HOST}/colors`
  return axios.get(URL)
}

export const getAllSizesAxios = () => {
  const URL = `${REACT_APP_HOST}/sizes`
  return axios.get(URL)
}