
import { Api } from "../../utils/Api";
import { removeToken } from "../../utils/localstorage";

const requestUser = () => ({
  type: "REQUEST_USER_DETAILS",
});

const receiveUser = payload => ({
  type: "RECEIVE_USER_DETAILS",
  payload
});

const errorUser = payload => ({
  type: "ERROR_USER_DETAILS",
  payload: payload,
});

const logOutUser = () => ({
  type: "LOG_OUT_USER",
});


export const getUserDetails = () => async dispatch => {
  dispatch(requestUser());
  try {
    const data = await Api.getUser();
    dispatch(receiveUser({
      userDetails: data
    }));
  }
  catch (error) {
    dispatch(errorUser(error));
  }

}

export const fetchSignIn = ({email, password}) => async dispatch => {
  try {
    const  data  = await Api.sigIn({email, password});
    console.log("data", data);
    dispatch(receiveUser({
      userDetails: data.user,
    }));
  }
  catch (error) {
    dispatch(errorUser(error));
  }
}

export const fetchSignUp = (fullName, email, password) => async dispatch => {
  try {
    const  data  = await Api.sigUp(fullName, email, password);
    dispatch(receiveUser({
      userDetails: data.user,
    }));
  }
  catch (error) {
    dispatch(errorUser(error));
  }
}

export const logOut = () => async dispatch => {
  dispatch(logOutUser());
  removeToken();
}
