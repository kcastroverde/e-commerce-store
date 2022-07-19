import axios from 'axios';
import {getToken, setToken} from './localstorage'


const API = "http://localhost:5000/api";
const STORE_ID= "62d5b22ee529916689066b8c"
//const STORE_ID= "62d5b221e529916689066b89"

const getUser = async () => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.get(`${API}/user/user`, {headers})
  return data
}

const sigIn = async ({email, password}) => {
  const {data} = await axios.post(`${API}/user/signin`, 
  {
    email, 
    password, 
    storeId: STORE_ID
  })
  //save token to localstorage
  setToken(data.token, STORE_ID)
  return data
}

const sigUp = async (name, email, password, storeId) => {
  const {data} = await axios.post(`${API}/user/signup`, {name, email, password, storeId})
  //save token to localstorage
  setToken(data.token, storeId)
  return data
}

const getProducts = async () => {
  const {data} = await axios.get(`${API}/products/${STORE_ID}`)
  console.log("dataAPI", data)
  return data
}

const getProductById = async (id) => {
  const {data} = await axios.get(`${API}/products/${id}`)
  return data
}

const getProductsByCategory = async (storeId, category) => {
  const {data} = await axios.get(`${API}/products/category/${storeId}/${category}`)
  return data
}

const createProduct = async (storeId, name, description, price, countInStock, imageUrl, category) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.post(`${API}/products/create`, {storeId, name, description, price, countInStock, imageUrl, category}, {headers})
  return data
}

const updateProduct = async (id, name, description, price, countInStock, imageUrl, category) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.put(`${API}/products/update/${id}`, {name, description, price, countInStock, imageUrl, category}, {headers})
  return data
}

const deleteProduct = async (id) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.delete(`${API}/products/delete/${id}`, {headers})
  return data
}


const getCategories = async (storeId) => {
  const {data} = await axios.get(`${API}/categories/${storeId}`)
  return data
}

const getCategoryById = async (id) => {
  const {data} = await axios.get(`${API}/categories/${id}`)
  return data
}

const createCategory = async (storeId, name) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.post(`${API}/categories/create`, {storeId, name}, {headers})
  return data
}

const deleteCategory = async (id) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.delete(`${API}/categories/delete/${id}`, {headers})
  return data
}

const addToCart = async (productId, quantity) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.post(`${API}/cart/add`, {productId, quantity}, {headers})
  return data
}

const deleteFromCart = async (productId, quantity) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.post(`${API}/cart/delete`, {productId, quantity}, {headers})
  return data
}


const getCart = async () => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.get(`${API}/cart/get`, {headers})
  return data
}





export const Api = {
  getUser,
  sigIn,
  sigUp,
  getProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  addToCart,
  deleteFromCart,
  getCart
}
