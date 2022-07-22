import axios from 'axios';
import {getToken, setToken} from './localstorage'


const API = "http://localhost:5000/api";
export const STORE_ID= "62d5b22ee529916689066b8c"
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
  setToken(data.token)
  return data
}

const sigUp = async (name, email, password, storeId) => {
  const {data} = await axios.post(`${API}/user/signup`, {name, email, password, storeId})
  //save token to localstorage
  setToken(data.token)
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
  const {data} = await axios.post(`${API}/cart/add`, {productId, count:quantity}, {headers})
  return data
}

const removeFromCart = async (productId) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.post(`${API}/cart/delete/${productId}`, {}, {headers})
  return data
}


const getCart = async () => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.get(`${API}/cart/`, {headers})
  return data
}


const clearCart = async () => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.post(`${API}/cart/clear`, {}, {headers})
  return data
}

const modifyCart = async (productId, quantity) => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.post(`${API}/cart/modify`, {
    productId, 
    count: quantity
  }, {headers})
  return data
}

const getOrders = async () => {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.get(`${API}/orders/`, {headers})
  return data
}

const createOrder = async (order) => {
  const token = getToken()
  const body = {
    fullName: order.Address.fullName,
    address: order.Address.address,
    zipCode: order.Address.zipCode,
    city: order.Address.city,
    country: order.Address.country,
    total: order.total,
    products : order.cartItems.map(item => {
      return {
        productId: item.product,
        count: item.qty
      }})
    
  }
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  const {data} = await axios.post(`${API}/orders/`, body, {headers})
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
  removeFromCart,
  getCart,
  clearCart,
  modifyCart,
  getOrders,
  STORE_ID,
  createOrder
}
