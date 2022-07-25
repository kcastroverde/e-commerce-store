import './HomeScreen.css';
import {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';

// Components
import Product from '../components/Product';


const HomeScreen = () => {


  const getProducts = useSelector(state => state.product)
  const user = useSelector(state => state.user)

  const {products, loading, error, initialLoad} = getProducts

  const [filterSearch, setFilterSearch] = useState('')
  const [loadedProducts, setLoadedProducts] = useState(products)

  const filter =()=>{
    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(filterSearch.toLowerCase())
    })
    if(filterSearch === ''|| filterSearch === null|| filterSearch === undefined|| filterSearch === ' '){
      setLoadedProducts(products)
    }else{
    setLoadedProducts(filteredProducts)
    }
  }

  useEffect(()=>{
    filter()
  },[filterSearch, initialLoad])


  return (
    <div className="homescreen">
     

      <div className='search-input-homescreen'>
        <h3>Buscar producto:</h3>
        <input 
        type="text"
        placeholder="nombre"
        value={filterSearch}
        onChange={(e)=>{
          setFilterSearch(e.target.value)}}
        />
      </div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          loadedProducts.map((product, index) => (
            <Product
              key={index}
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

export default HomeScreen
