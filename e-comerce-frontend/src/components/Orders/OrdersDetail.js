import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./OrderDetail.css";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Orders = useSelector((state) => state.orders);
  const { orderLoaded, orders } = Orders;
  const [selectedorder, setSelectedOrder] = useState({
    orderNumber: "",
    finalStatus: "",
    total: "",
    _id: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderLoaded && loading) {
      const order = orders.find((p) => p._id === id);
      setSelectedOrder(order);
      setLoading(false);
    }
  }, [id, orders, orderLoaded, selectedorder]);

  const fiveDigit = (num) => {
    return num.toString().padStart(5, "0");
  };

  const dateSplit = (date) => {
    const dateArr = date.split("T");
    const dateArr2 = dateArr[0].split("-");
    return `${dateArr2[1]}/${dateArr2[2]}/${dateArr2[0]}`;
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

            <div className="order-detail-body">
                <div>
                    <h3>${(selectedorder.total).toFixed(2)}</h3>
                </div>

                {selectedorder.payed?
                <>                    
                    <div>
                        <h2>
                            token: {selectedorder.token}
                        </h2>
                    </div>
                    <div>
                        <h2>
                            {selectedorder.txHash}
                        </h2>
                    </div>
                    </>
                    :

                    <div className="order-detail-select">
                        <select>
                            <option value="">token</option>
                            <option value="token-1">token1</option>
                            <option value="token-2">token2</option>
                        </select>
                        <button>Pagar Orden</button>
                    </div> 
                }
            </div>
            <div >
                <div>
                    <h2>Productos:</h2>
                    {selectedorder.products.map((item, index) => (
                        <div className="order-detail-footer" key={index}>
                            <h3>{item.productId.name}</h3>
                            <h3>Qty:{item.count}</h3>
                            <h3>Price:{item.productId.price.toFixed(2)}</h3>
                        </div>
                        ))}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
