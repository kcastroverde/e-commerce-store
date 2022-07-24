import "./AdminCategories.css";
import {MdDeleteForever} from 'react-icons/md'

const AdminCategories = () => {
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
                        <input/>
                        <button>Crear</button>
                    </div>
                </div>
                <div className="admin-categories-exist">
                    <h3>categorias</h3>
                    <div className="admin-categorie-map">
                        <div className="admin-categories-bubble">
                        <p>1</p>
                        <p>nombre: categoria 1</p>
                        <MdDeleteForever className="dasboard-icon"/>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default AdminCategories;