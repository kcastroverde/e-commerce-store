import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../redux/actions/orderActions";
import { useNavigate } from "react-router-dom";
import "./OrderScreen.css";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const Orders = useSelector((state) => state.orders);
  const { orderLoaded, orders } = Orders;

  const { loginSuccess, userDetails } = user;


  const fiveDigit = (num) => {
    return num.toString().padStart(5, "0");
  };

  const orderDetail = (id) => {
    navigate(`/order/${id}`);
  }

  const splitDate = (date) => {
    const dateArr = date.split("T");
    const dateArr2 = dateArr[0].split("-");
    return `${dateArr2[1]}/${dateArr2[2]}/${dateArr2[0]}`;
  };

  console.log("ordenes", orders);
  return (
    <div className="orderscreen">
      <div className="Order-tittle">
        <h2>Mis Ordenes</h2>
      </div>
      <div>
        {orderLoaded
          ? orders.length > 0
            ? orders.map((order, index) => (
                <div className="order-card" key={index}>
                  <div>
                    <h3>#{fiveDigit(order.orderNumber)}</h3>
                  </div>
                  <div>
                    <h3>status: {order.finalStatus}</h3>
                  </div>
                  <div>
                    <h3>{order.total.toFixed(2)}</h3>
                  </div>
                  <div>
                    <h3>{splitDate(order.createdAt)}</h3>
                  </div>
                  <div>
                    <button
                     onClick={() => orderDetail(order._id)}
                    >
                      <h3>ver detalles</h3>
                    </button>{" "}
                  </div>
                </div>
              ))
            : "no tienes ordenes"
          : "cargando ordenes"}
      </div>
    </div>
  );
};

export default OrderScreen;
