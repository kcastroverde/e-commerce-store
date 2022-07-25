import "./AdminOrders.css";
import {useSelector} from "react-redux";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
const AdminOrders = () => {
  const navigate = useNavigate();
  const Orders = useSelector(state => state.orders);
  const { orderLoaded, orders } = Orders;

  const handleDetails = (id) => {
    navigate(`/admin/oders/${id}`);
  }


  const fiveDigit = (num) => {
    return num.toString().padStart(5, "0");
  }

  return (
    <div className="admin-order-container">
      <div className="title-adminsite">
        <h2>Ordenes</h2>
      </div>
      <div className="admin-orders-options">
        {orderLoaded?
        <>
        <div>
            <h3>Ordenes sin confirmar</h3>
            {orders.filter(order => order.finalStatus === "pending").map((order, index) => (
            <div className="admin-order-view" key={index}>
                <div><p>{index+1}</p></div>
                <div><p>  {fiveDigit(order.orderNumber)} </p></div>
                <div><p> ${order.total.toFixed(2)} </p></div>
                <div className="unconfirmed-order"><p> sin confirmar </p></div>
                <div>
                  <button 
                  onClick={() => handleDetails(order._id)}
                >ver</button></div> 
            </div>
            ))}
        </div>
        <div>
            <h3>Ordenes confirmadas</h3>
            {orders.filter(order => order.finalStatus !== "pending").map((order, index) => (
            <div className="admin-order-view" key={index}>
                <div><p>{index+1}</p></div>
                <div><p>{fiveDigit(order.orderNumber)}</p></div>
                <div><p>${order.total.toFixed(2)}</p></div>
                <div className={order.finalStatus === 'confirmed'?
                "confirmed-order": "cancelled-order"
                }><p>{order.finalStatus === 'confirmed'?
                "confirmada": "cancelada"
              }</p></div>
                <div><button
                 onClick={() => handleDetails(order._id)}
                >ver</button></div> 
            </div>
            ))}
        </div>

        </>
:<div> cargando...</div>}
      </div>
    </div>
  );
};

export default AdminOrders;
