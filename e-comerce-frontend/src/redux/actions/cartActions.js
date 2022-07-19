
import {Api} from '../../utils/Api'
import {convertToCartData} from '../../utils/utils.function'


const requestCart = () => ({
  type: "REQUEST_CART",
})

const receiveCart = payload => ({
  type: "RECEIVE_CART",
  payload: payload,
})

const errorCart = payload => ({
  type: "ERROR_CART",
  payload: payload,
})

const updateCart = payload => ({
  type: "UPDATE_CART",
  payload: payload,
})

export const fetchCart = () => async dispatch => {
  dispatch(requestCart());
  try {
    const data = await Api.getCart();
    console.log("data", data);
    const convertTocart = convertToCartData(data.carts);
    dispatch(receiveCart(convertTocart));
  }
  catch (error) {
    dispatch(errorCart(error));
  }
}

export const addToCart = (productId, quantity) => async dispatch => {
  try {
    console.log("productId", productId);
    const data = await Api.addToCart(productId, quantity);
    const convertTocart = convertToCartData(data.carts);
    dispatch(updateCart(convertTocart));
  }
  catch (error) {
    dispatch(errorCart(error));
  }
}

export const removeFromCart = (productId) => async dispatch => {
  try {
    console.log("productId", productId);
    const data = await Api.removeFromCart(productId);
    const convertTocart = convertToCartData(data.carts);
    dispatch(updateCart(convertTocart));
  }
  catch (error) {
    dispatch(errorCart(error));
  }
}

export const modifyCart = (productId, quantity) => async dispatch => {
  try {
    const data = await Api.modifyCart(productId, quantity);
    const convertTocart = convertToCartData(data.carts);
    dispatch(updateCart(convertTocart));
  }
  catch (error) {
    dispatch(errorCart(error));
  }
}

export const clearCart = () => async dispatch => {
  try {
    const data = await Api.clearCart();
    const convertTocart = convertToCartData(data);
    dispatch(updateCart(convertTocart));
  }
  catch (error) {
    dispatch(errorCart(error));
  }
}
