import "./dashboard.css";
import {MdDeleteForever} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateStores } from "../../redux/actions/storeActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state.store);

  const { storeName, discount, StoreLoaded } = store;

  const [storeNameInput, setStoreNameInput] = useState();
  const [discountInput, setDiscountInput] = useState();

  const handleUpdateStoreName = () => {
    dispatch(updateStores({name:storeNameInput}));
    setStoreNameInput();
  }

  const handleUpdateDiscount = () => {
    dispatch(updateStores({discount:discountInput}));
  }
 

  return (
    <div className="dashboard-container">
      <div className="title-adminsite">
        <h2>Opciones</h2>
      </div>
      <div className="dasboard-option-container">
        <div className="dashboard-option">
          <div className="dashboard-table">
            <div>
            <h3>Nombre: {storeName}</h3>
            </div>
            <label>
              <p>cambiar nombre</p>
              <input
                type="text" 
                value={storeNameInput}
                onChange={(e) => setStoreNameInput(e.target.value)} 
              />
              <button
                onClick={handleUpdateStoreName}
              >Guardar</button>
            </label>
          </div>
          <div className="dashboard-table">
            <div>
            <h3>Descuento: {discount} %</h3>
            </div>
            <label>
              <p>asignar descuento </p>
              <input
                type="number" 
                value={discountInput}
                onChange={(e) => setDiscountInput(e.target.value)}
              />
              <button
                onClick={handleUpdateDiscount}
              >Guardar</button>
            </label>
          </div>
          <div className="dashboard-table">
            <div>
            <h3>Nuevo Administrador</h3>
            </div>
            <label>
              <p>Nuevo Administrador</p>
              <input
                type="email"
                placeholder="Email"

              />
              <button>send email</button>
            </label>
          </div>
          <div className="dashboard-table">
            <div>
            <h3>Administradores</h3>
            </div>
            <div className="dasboard-user-mail">
              <p>correo@correo.com</p>
              <MdDeleteForever className="dasboard-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
