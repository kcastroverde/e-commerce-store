
import {Api} from '../../utils/Api'

const requestProducts = () => ({
  type: "REQUEST_PRODUCTS",
})

const receiveProducts = payload => ({
  type: "RECEIVE_PRODUCTS",
  payload: payload,
})

const errorProducts = payload => ({
  type: "ERROR_PRODUCTS",
  payload: payload,
})

export const fetchProducts = () => async dispatch => {
  dispatch(requestProducts());
  try {
    const data = await Api.getProducts();
    console.log("data", data);
    dispatch(receiveProducts({
      products: data,
    }));
  }
  catch (error) {
    dispatch(errorProducts(error));
  }
}

export const fetchNewProduct = (formData) => async dispatch => {
  try {
    const data = await Api.createProduct(formData);
    dispatch(receiveProducts({
      products: data,
    }));
  }
  catch (error) {
    dispatch(errorProducts(error));
  }
}


