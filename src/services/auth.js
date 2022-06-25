import axios from "axios";
const { REACT_APP_HOST } = process.env

export const authLoginAxios = (body) => {
  const URL = `${REACT_APP_HOST}/auth/login/`
  return axios.post(URL, body)
}

export const getProfileAxios = (token) => {
  const URL = `${REACT_APP_HOST}/users`
  return axios.get(URL, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const updateProfileAxios = (body, token) => {
  const URL = `${REACT_APP_HOST}/users`
  return axios.patch(URL, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    }
  })
}