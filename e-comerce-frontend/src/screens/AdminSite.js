import "./AdminSite.css";
import {NavLink} from "react-router-dom";

const AdminSite = () => {
  return (
    <div className="adminsite">
      <div className="sideBar">
        <ul>
        <NavLink to="/admin/dashboard">
          <li>Opciones</li>
        </NavLink>
        <NavLink to="/admin/ordenes">
          <li>Ordenes</li>
        </NavLink>
        <NavLink to="/admin/productos">
          <li>Productos</li>
        </NavLink>
        </ul>
      </div>
      <div className="admin-screen"></div>
    </div>
  );
};

export default AdminSite;
