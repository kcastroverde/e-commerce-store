import "./AdminSite.css";
import {useState, useEffect} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {IoMdOptions} from "react-icons/io";
import {GoListUnordered} from "react-icons/go";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BiCategoryAlt} from "react-icons/bi";
import {useSelector, useDispatch} from "react-redux";
import { fetchAdminOrders } from "../redux/actions/adminOrdersAction";

const AdminSite = () => {
  const dispatch = useDispatch();
  const adminOrders = useSelector(state => state.adminOrders);
  const {orders, orderLoaded} = adminOrders;
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [Width, setWidth] = useState(false);

  useEffect(() => {
    if(!orderLoaded) {
    dispatch(fetchAdminOrders());
    }
  }, [dispatch, orderLoaded]);

  useEffect(() => {
    if(Width === false) {
      setWidth(window.innerWidth);
    }
  }, [Width]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 
    }, []);

    useEffect(() => {
      if (Width < 960) {
        setSideBarOpen(false);
      }else{
        setSideBarOpen(true);
      }
    }, [Width]);


  return (
    <div className="adminsite">
      <div className={`${sideBarOpen? "sideBar":"not-display"}`}>
        <ul>
        <NavLink to="/admin/dashboard">
          <li><IoMdOptions className="admin-icon"/>Opciones</li>
        </NavLink>
        <NavLink to="/admin/orders">
          <li><GoListUnordered className="admin-icon"/> Ordenes</li>
        </NavLink>
        <NavLink to="/admin/products">
          <li><AiOutlineShoppingCart className="admin-icon"/> Productos</li>
        </NavLink>
        <NavLink to="/admin/category">
          <li><BiCategoryAlt className="admin-icon"/> Categorias</li>
        </NavLink>
        </ul>
      </div>
      <div className="admin-screen">
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminSite;
