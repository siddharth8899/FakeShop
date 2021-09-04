import {useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { fetchProducts } from "./doShopAction/apiGetProducts";
import Product from './Product';

function Products(){

const dispatch = useDispatch();
const State = useSelector(state => state.reducer);
const {data: products, loading} = State;

useEffect(() => {
 dispatch(fetchProducts())
  }, [])

return (
  loading ? <h4> Loading ... </h4> : products.map((item, index) => {
      return <div key= {index}><Product item= {item}/></div>
    })
)
}

export default Products; 