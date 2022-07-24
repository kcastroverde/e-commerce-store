import "./AdminCategories.css";
import {MdDeleteForever} from 'react-icons/md'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { newCategory } from "../../redux/actions/categoryAction";

const AdminCategories = () => {
    const category = useSelector(state => state.category);
    const { categories, categoriesLoaded } = category;
    const dispatch = useDispatch();
    const [categoryName, setCategoryName] = useState("");

    const handleNewCategory = () => {
        if(categoryName !== ""){
        dispatch(newCategory(categoryName));
        setCategoryName("");
        }else{
            alert("Ingrese un nombre para la categoria");
        }
    }

    return (
        <div className="admin-categories">
            <div className="title-adminsite">
                <h2>Categorias</h2>
            </div>
            <div className="admin-categories-options">
                <div className="admin-categories-option-title">
                    <h3>Nueva Categoria</h3>
                    <div className="admin-categories-inside">
                        <p>Nombre: </p>
                        <input
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                        <button
                        onClick={handleNewCategory}
                        >Crear</button>
                    </div>
                </div>
                <div className="admin-categories-exist">
                    <h3>categorias</h3>
                    {categoriesLoaded?
             <>
                        {categories.map((category, index) => (
                            <div className="admin-categorie-map" key={index}>
                        <div className="admin-categories-bubble" >
                        <p>{index}</p>
                        <p>nombre: {category.name}</p>
                        <div>
                        <MdDeleteForever className="dasboard-icon"/>
                        </div>
                        </div>
                        </div>
                        ))}
               </> 
                    :
                    <div className="admin-categories-loading">
                        <h2>Cargando...</h2>
                    </div>
                    }
                </div>
            
            </div>
        </div>
    );
}

export default AdminCategories;