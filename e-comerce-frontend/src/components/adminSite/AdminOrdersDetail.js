import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./AdminOrdersDetail.css";
import { confirmOrCancelOrder } from "../../redux/actions/orderActions";

const AdminOrdersDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Orders = useSelector((state) => state.orders);


  const [selectedorder, setSelectedOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [lodedOrders, setLoadedOrders] = useState(false);
  

  useEffect(() => {
    setLoadedOrders(Orders.orderLoaded);
  }, [Orders.orderLoaded]);

  useEffect(() => {
    if (loading) {
  
        if(lodedOrders){
      const order = Orders?.orders?.find((p) => p._id === id);
      setSelectedOrder(order);
      setLoadedOrders(false);
      setLoading(false);
        }
 
    }
  }, [lodedOrders, Orders.orders]);

  const fiveDigit = (num) => {
    return num.toString().padStart(5, "0");
  };

  const dateSplit = (date) => {
    const dateArr = date.split("T");
    const dateArr2 = dateArr[0].split("-");
    return `${dateArr2[1]}/${dateArr2[2]}/${dateArr2[0]}`;
  };

  const confirmOrCancelOrders = (orderId, finalStatus)=>{
    dispatch(confirmOrCancelOrder(orderId, finalStatus));
    setLoadedOrders(false)
    setLoading(true);
    
  }


  return (
    <div className="orders-detail">
      <div className="order-detail-tittle">
        {" "}
        <h2>Order Details</h2>
      </div>
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="order-detail-format">
            <div className="order-detail-top">
              <div>
                <h2># {fiveDigit(selectedorder.orderNumber)}</h2>
              </div>

              <div>
                <h3>status: {selectedorder.finalStatus}</h3>
              </div>

              <div>
                <h3>{dateSplit(selectedorder.createdAt)}</h3>
              </div>
            </div>

           
            <div>
              <div>
                <h2>Productos:</h2>
                {selectedorder.products.map((item, index) => (
                  <div className="orders-detail-footer" key={index}>
                    <h3>{item.productId.name}</h3>
                    <h3>Qty:{item.count}</h3>
                    <h3>Price:{item.productId.price.toFixed(2)}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-detail-body">
              <div>
                <h3>TOTAL: ${selectedorder.total.toFixed(2)}</h3>
              </div>
            </div>
            <div className="order-detail-body">
              {selectedorder.payed ? (
                <>
                  <div>
                    <h2>token: {selectedorder.token}</h2>
                  </div>
                  <div>
                    <h2>{selectedorder.txHash}</h2>
                  </div>
                </>
              ) : (
                <div className="orders-detail-select">
                {selectedorder.finalStatus==='pending' ? 
                <>
                <button 
                className="confirm-order"
                onClick={()=>confirmOrCancelOrders(selectedorder._id, 'confirmed')}
                >
                    Confirmar Orden</button>
                 <button 
                 className="cancel-order"
                onClick={()=>confirmOrCancelOrders(selectedorder._id, 'cancelled')}
                 > 
                 Cancelar Orden</button>
                </>
                :
                selectedorder.finalStatus==='confirmed' ?
                <div className="confirmed-order-details">Orden Confirmada</div>:
                <div className="cancelled-order-details">Orden Cancelada</div>
                }
                  
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrdersDetail;
