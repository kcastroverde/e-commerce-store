import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./AdminEdithProducts.css";


const AdminEdithProducts = () => {
    const dispatch = useDispatch();
    const Products = useSelector(state => state.product);
    const category = useSelector(state => state.category);
    const { initialLoad, products } = Products;
    const [productFind, setProductFind] = useState(false);
    const {categories, categoriesLoaded} = category;
    const [product, setProduct] = useState({});

    const { id } = useParams();

    useEffect(() => {
        if (!productFind) {
            if(!initialLoad){
          const Product = products.find((p) => p._id === id);
          setProduct(Product);
          setProductFind(true);
        }}}, [initialLoad]);

 
  return (
    <div className="admin-edith-products">
     <div className="title-adminsite">
         <h2>Editar Producto</h2>
     </div>
    {!productFind?
    <div className="loading-products">
        <h2>Cargando...</h2>
    </div>
    :
      <form className="edit-product-form">
        <div className="edit-top-products-detail">
          <div className="inputs-flex-colum">
            <p>Nombre: </p>
            <input
              type="text"
              value={product.name}
                onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className="inputs-flex-colum">
            <p>Precio: </p>
            <input
              type="number"
                value={product.price}
                onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })}
            />
          </div>
          <div className="inputs-flex-colum">
            <p>stock: </p>
            <input
              type="number"
            value={product.countInStock}
                onChange={(e) =>
                    setProduct({ ...product, countInStock: e.target.value })}  
            />
          </div>

        </div>
        <div>
        <div className="edit-category-admin-product">
            <p>Categoria: </p>
            <select
            value={product.categorieId._id}
            >
              <option value="">{product.categorieId.name}</option>
                {categoriesLoaded &&
                    categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
               
            </select>
          </div>
        </div>
        <div className="admin-edit-description">
        <p>Descripcion: </p>
          <textarea
           value={product.description}
              onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })}
          />
        </div>
        <div className="edit-body-products-detail">

          <div className="edit-image-select-product">
            <p>Imagen:</p>
            <img src={product.imageUrl.url} alt="product" />
          </div>
          <div>
            <input
                type="file"
                onChange={(e) =>
                    setProduct({ ...product, imageUrl: e.target.files[0] })}
            />
         
          </div>
        </div>

        <div className="edit-submits-inputs">
          <input
            type="submit"
           className="edit-submit-save"
            value="Guardar"
          />
                    <input
            type="submit"

            value="Eliminar"
          />

        </div>
      </form>
    }
    </div>
  );
};

export default AdminEdithProducts;
