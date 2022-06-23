import axios from "axios";
const { REACT_APP_HOST } = process.env

export const authLoginAxios = (body) => {
  const URL = `${REACT_APP_HOST}/auth/login`
  return axios.post(URL, body)
}

// export const getProfileAxios = (token) => {
//   const URL = `${REACT_APP_HOST}/auth/login`
//   return axios.post(URL, {
//     headers: { "Authorization": token }
//   })
// }