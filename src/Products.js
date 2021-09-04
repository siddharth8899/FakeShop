import { TextField } from '@material-ui/core';
import {useEffect, useRef} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { fetchProducts } from "./doShopAction/apiGetProducts";
import Product from './Product';

function Products(){

const dispatch = useDispatch();
const State = useSelector(state => state.reducer);
const {data: products, loading} = State;
const commentSection = useRef(null);

useEffect(() => {
 dispatch(fetchProducts())
  }, [])

  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,  //issue
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,  //XX bottom: 0 XX  //issue
      behavior: 'smooth'
    });
  };

  const scrollToComment = () => {
    return window.scrollTo({
        top: commentSection.current.offsetTop,
        behavior: 'smooth'
    })
  }

return (
  <>
  <br />
  <hr />
  <button onClick={scrollToBottom}> Go to bottom </button>
  <button onClick={scrollToComment}> Comment Form </button>
  <hr />
  {
  loading ? <h4> Loading ... </h4> : products.map((item, index) => {
      return <div key= {index}><Product item= {item}/></div>
    })
  }
  <TextField 
  ref = {commentSection}
  ></TextField>
  <button onClick={scrollToTop}> ^ </button>
  </>
)
}

export default Products; 