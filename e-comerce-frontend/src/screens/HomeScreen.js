import './HomeScreen.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Components
import Product from '../components/Product';

//Actions
import { fetchProducts } from '../redux/actions/productActions';



const HomeScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.product)
  const user = useSelector(state => state.user)
  console.log("user", user)
  const {products, loading, error} = getProducts
  





  console.log(getProducts)
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default HomeScreen
