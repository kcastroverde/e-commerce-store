export const token_key = 'E_COMMERCE_TOKEN'

export const setToken = (token, storeId) => {
  window.localStorage.setItem(`token_store${storeId}`, token)
}

export const getToken = (storeId) => {
  let token = window.localStorage.getItem(`token_store${storeId}`)
  if (!!token) return token
  return false
}




