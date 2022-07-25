import './HomeScreen.css';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

// Components
import Product from '../components/Product';


const CategoryScreen = () => {
  const {id} = useParams();
  const category = useSelector(state => state.category)
  const getProducts = useSelector(state => state.product);
  const user = useSelector(state => state.user);

  const {products, loading, error, initialLoad} = getProducts;
  const {categoriesLoaded, categories} = category;
  const [categoryOnProductLoaded, setCategoryOnProductLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState({});

  useEffect(() => {
    if (!categoryOnProductLoaded && categoriesLoaded && !initialLoad){
      const category = categories.find(category => category._id === id);
      setSelectedCategory(category);
      setSelectedCategoryProducts(products.filter(product => product.categorieId._id === id));
      setCategoryOnProductLoaded(true);
    }
  }, [categoryOnProductLoaded, categoriesLoaded, categories, id, products, initialLoad]);

  //if id change reload products
  useEffect(() => {
    if(categoryOnProductLoaded){
    if (id !== selectedCategory._id){
      setSelectedCategoryProducts(products.filter(product => product.categorieId._id === id));
      setSelectedCategory(categories.find(category => category._id === id));
    }}
  }, [id, products, categories, selectedCategory, categoryOnProductLoaded]);


  

  return (
    <div className="homescreen">
     
      {categoryOnProductLoaded? 
      <h2>{selectedCategory.name}</h2>: <h2>Loading...</h2>}

      <div className="homescreen__products">
        {!categoryOnProductLoaded ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          selectedCategoryProducts.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl.url}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default CategoryScreen
