import axios from 'axios'
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
    const {data} = await Api.getCart();
    const convertTocart = convertToCartData(data);
    dispatch(receiveCart(convertTocart));
  }
  catch (error) {
    dispatch(errorCart(error));
  }
}

export const addToCart = (productId, quantity) => async dispatch => {
  try {
    const {data} = await Api.addToCart(productId, quantity);
    const convertTocart = convertToCartData(data);
    dispatch(updateCart(convertTocart));
  }
  catch (error) {
    dispatch(errorCart(error));
  }
}

export const removeFromCart = (productId, quantity) => async dispatch => {
  try {
    const {data} = await Api.removeFromCart(productId, quantity);
    const convertTocart = convertToCartData(data);
    dispatch(updateCart(convertTocart));
  }
  catch (error) {
    dispatch(errorCart(error));
  }
}
