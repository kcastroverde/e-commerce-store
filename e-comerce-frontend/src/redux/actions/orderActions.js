import { Api } from "../../utils/Api";

const requestOrder = () => ({
    type: "REQUEST_ORDER",
});

const receiveOrder = payload => ({
    type: "RECEIVE_ORDER",
    payload: payload,
});

const errorOrder = payload => ({
    type: "ERROR_ORDER",
    payload: payload,
});

const updateOrder = payload => ({
    type: "UPDATE_ORDER",
    payload: payload,
});

const deleteOrder = payload => ({
    type: "DELETE_ORDER",
    payload: payload,
});

export const fetchOrder = () => async dispatch => {
    dispatch(requestOrder());
    try {
        const data = await Api.getOrder();
        console.log("data", data);
        dispatch(receiveOrder(data));
    }
    catch (error) {
        dispatch(errorOrder(error));
    }
}