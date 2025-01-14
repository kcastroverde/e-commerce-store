import './ProductScreen.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

// Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';
import {fetchProducts} from '../redux/actions/productActions';


const ProductScreen = () => {
  const navigate = useNavigate(); 
  const {id} = useParams();
  const [qty, setQty] = useState(1);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const productDetails = useSelector(state => state.product);
  const {initialLoad, error, products, errorMsg} = productDetails;

  useEffect(() => {
    if(initialLoad){
      dispatch(fetchProducts());
    }
  }, [dispatch], [initialLoad]);

  useEffect(() => {
    if (!initialLoad && id !== products._id) {
      const product = products.find(p => p._id === id)
      setProduct(product);
      setLoading(false);
    }
  }, [id, products, initialLoad, dispatch]);

  const addToCartHandler = () => {
    if (user.loginSuccess) {
     
      dispatch(addToCart(product._id, qty))
      if(error){
        alert(errorMsg);
        return;
      }
      navigate(`/cart`)
      return
    } else {
      alert('You need to first login.')
    }
  }

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (

        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl.url} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map(x => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductScreen
