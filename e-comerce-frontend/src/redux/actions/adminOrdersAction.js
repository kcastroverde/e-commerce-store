import {Api} from '../../utils/Api';

const requesAdminOrders = () => ({
    type: "REQUEST_ADMIN_ORDER",
});

const receiveAdminOrders = payload => ({
    type: "RECEIVE_ADMIN_ORDER",
    payload: payload,
});

const errorAdminOrders = payload => ({
    type: "ERROR_ADMIN_ORDER",
    payload: payload,
});

const updateAdminOrders = payload => ({
    type: "UPDATE_ADMIN_ORDER",
    payload: payload,
});

export const fetchAdminOrders = () => async dispatch => {
    dispatch(requesAdminOrders());
    try {
        const data = await Api.getAdminOrders();
        dispatch(receiveAdminOrders(data));
    }
    catch (error) {
        dispatch(errorAdminOrders(error));
    }
}