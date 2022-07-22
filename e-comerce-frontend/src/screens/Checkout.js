import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { clearCart } from "../redux/actions/cartActions";
import { addOrder, createOrder } from "../redux/actions/orderActions";

import "./Checkout.css";

const Checkout = () => {
  const userInfo = useSelector((state) => state.user.userDetails);

  const { fullName, address, country, city, zipCode, state } = userInfo;

  const [Address, setAddress] = useState({
    fullName,
    address,
    country,
    city,
    zipCode,
    state
  });

  const [token, setToken] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const cartItems = useMemo(() => cart.products, [cart]);
  const [checkoutFull, setCheckoutFull] = useState(false);


  const handleOrden = () => {
    if(checkoutFull){
      const Order ={Address,cartItems, total: getCartSubTotal()}
      dispatch(createOrder(Order));
  }else{
    alert("Please complete your Checkout");
  }
}



  useEffect(() => {
    if (fullName) {
      setAddress(...Address, fullName);
    }
    if (address) {
      setAddress(...Address, address);
    }
    if (country) {
      setAddress(...Address, country);
    }
    if (city) {
      setAddress(...Address, city);
    }
    if (zipCode) {
      setAddress(...Address, zipCode);
    }

    if(state){
      setAddress(...Address, state);
    }
  }, [fullName, address, country, city, zipCode, state]);

  useEffect(() => {
    if(
      Address.fullName === "" || 
      Address.address === "" || 
      Address.country === "" || 
      Address.city === "" || 
      Address.zipCode === "" || 
      Address.state === "" || 
      Address.fullName === undefined || 
      Address.address === undefined || 
      Address.country === undefined || 
      Address.city === undefined || 
      Address.zipCode === undefined || 
      Address.state === undefined){
      setCheckoutFull(false);
    }
    else{
      setCheckoutFull(true);
    }
  }, [fullName, address, country, city, zipCode, state, Address]);

  const resetAddress = () => {
    setAddress({
      fullName: "",
      address: "",
      country: "",
      city: "",
      zipCode: "",
      state: ""
    });
  }

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  console.log("cartItems", cartItems);
  return (
    <div className="Checkout">
      <div className="container">
        <div className="Checkout__header">
          <h1 style={{ flexGrow: 1 }}>Shipping</h1>
          <button 
          className='Checkout_testBtn'
          onClick={resetAddress}
          >clear checkout</button>
        </div>

        <p>Please enter your shipping details.</p>
        <hr />
        <div className="form">
          <div className="fields ">
            <label className="field">
              <span className="field__label" htmlFor="lastname">
                FullName
              </span>
              <input
                className="field__input"
                type="text"
                id="lastname"
                value={Address.fullName}
                onChange={(e) => {
                  setAddress({ ...Address, fullName: e.target.value });
                }}
              />
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Address
            </span>
            <input
              className="field__input"
              type="text"
              id="address"
              value={Address.address}
              onChange={(e) =>
                setAddress({ ...Address, address: e.target.value })
              }
            />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="country">
              Country
            </span>
            <input
              className="field__input"
              id="country"
              value={Address.country}
              onChange={(e) =>
                setAddress({ ...Address, country: e.target.value })
              }
            ></input>
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" htmlFor="zipcode">
                Zip code
              </span>
              <input
                className="field__input"
                type="text"
                id="zipcode"
                value={Address.zipCode}
                onChange={(e) =>
                  setAddress({ ...Address, zipCode: e.target.value })
                }
              />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="city">
                City
              </span>
              <input
                className="field__input"
                type="text"
                id="city"
                value={Address.city}
                onChange={(e) =>
                  setAddress({ ...Address, city: e.target.value })
                }
              />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="state">
                State
              </span>
              <input
                className="field__input"
                id="state"
                value={Address.state}
                onChange={(e) =>
                  setAddress({ ...Address, state: e.target.value })
                }
              ></input>
            </label>
            <label className="field">
              <span className="field__label" htmlFor="phone">
                token to use
              </span>
              <select
              onChange={(e) =>{
                setToken(e.target.value)
              }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </label>

          </div>
          <br />
          <h1 style={{ flexGrow: 1 }}>Cart</h1>
          {cartItems.map((item, index) => (
            <div className="fields fields--3" key={index}>
              <label className="field">
                <span className="field__label" htmlFor="zipcode">
                  Producto
                </span>
                <div className="field__input">{item.name}</div>
              </label>
              <label className="field">
                <span className="field__label" htmlFor="city">
                  precio
                </span>
                <div className="field__input">{item.price}</div>
              </label>
              <label className="field">
                <span className="field__label" htmlFor="state">
                  qt
                </span>
                <div className="field__input">{item.qty}</div>
              </label>
            </div>
          ))}
        </div>
        <hr />
        <div className="button-checkout">
    
        < button
        onClick={handleOrden}
        className="button"
        >Pay order {getCartSubTotal()}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
