import "./Adminproducts.css";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNewProduct } from "../../redux/actions/productActions";

const Adminproducts = () => {
  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);
  const { products, initialLoad } = product;
  const {categories, categoriesLoaded} = category;

  

  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    countInStock: "",
    imageToCharge: "",
    category: "",
  });

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("description", newProduct.description);
    formData.append("countInStock", newProduct.countInStock);
    formData.append("imageToCharge", newProduct.imageToCharge);
    formData.append("category", newProduct.category);
    //if value "" alert 
    if(newProduct.name === "" || newProduct.price === "" || newProduct.description === "" || newProduct.countInStock === "" || newProduct.imageToCharge === "" || newProduct.category === ""){
      alert("Please fill all the fields");
      return;
    }

    dispatch(fetchNewProduct(formData));
  }

  return (
    <div className="admin-product-container">
      <div className="title-adminsite">
        <h2>Productos</h2>
      </div>
      <div className="admin-products-option">
        <div className="admin-products-new">
          <h3>Nuevo Producto</h3>
          <div className="admin-products-detail">

          <form onSubmit={handleSubmit}>
            <div className="top-products-detail">
              <div className="inputs-flex-colum">
                <p>Nombre: </p>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
                />
              </div>
              <div className="inputs-flex-colum">
                <p>Precio: </p>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
                />
              </div>
              <div className="inputs-flex-colum">
                <p>stock: </p>
                <input
                  type="number"
                  value={newProduct.countInStock}
                  onChange={(e) => setNewProduct({ ...newProduct, countInStock: e.target.value })}
                />
              </div >
              <div className="category-admin-product">
                <p>Categoria: </p>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}

                >
                  <option value="">seleccione...</option>
                  {categoriesLoaded &&
                    categories.map((category, index) => (
                      <option key={index} value={category.id}>
                        {category.name}
                      </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="body-products-detail">
              <p>Descripcion: </p>
              <textarea
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} 
              />
              <div className="image-select-product">
                  <p>Imagen:</p>
                  <input 
                  type="file"
                  onChange={(e) => {
                    convertImageToBase64(e.target.files[0]).then((image)=>{
                      setNewProduct({ ...newProduct, imageToCharge: image });
                    })}}
                  />
              </div>
            </div>

            <div>
              <input 
              type="submit"
              className="button-admin-product-save"
              value="Guardar"
              />
          
            </div>
            </form>
          </div>
        </div>
        <div className="admin-products-exist">
          <h3>Productos existentes</h3>
          {initialLoad === false ? (
            <>
              {products.map((item, index) => (
                <div className="admin-products-detail-old" key={index}>
                  <div className="top-products-detail">
                    <div className="old-detail-name">
                      <p>Nombre: </p>
                      {item.name}
                    </div>
                    <div>
                      <p>Precio: </p>
                      {item.price}
                    </div>
                    <div className="category-admin-products">
                      <p>Categoria: </p>
                      {item.categorieId.name}
                    </div>
                    <div>
                    <button>editar</button>
                  </div>
                  </div>
                  {/* <div className="body-products-detail">
                    <p>Descripcion: </p>
                    {item.description}
                  </div> */}
                  {/* <div className="products-detail-image">
                      <img src={item.imageUrl} alt="product" />
                    </div> */}
    
              
                </div>
              ))}
            </>
          ) : (
            <div className="admin-products-detail">Cargando...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adminproducts;
