import { Button, Grid, TextField } from '@material-ui/core';
import {useEffect, useRef} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { fetchProducts } from "./doShopAction/apiGetProducts";
import Product from './Product';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

function Products(){

const dispatch = useDispatch();
const productsInfo = useSelector(state => state.reducer);
const cartInfo = useSelector(state => state.cartReducer);
const {cart} = cartInfo;

const {data: products, loading} = productsInfo;
const commentSection = useRef(null);

useEffect(() => {
 dispatch(fetchProducts()) // eslint-disable-next-line
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
  <Button onClick={scrollToBottom} color= 'primary' variant="contained"> Go to bottom </Button>
  <Button onClick={scrollToComment} color= 'primary' variant="contained"> Comment Form </Button>
  <hr />
  {
  loading ? <h4><Loader /> <br/></h4> : 
  <Grid >
  <Grid item xs={10} sm={6} md={4}>
  {products.map((item, index) => {
      return <Product item= {item} key= {index}  cart={cart}/>
    })}
  </Grid>
    </Grid>
  }


{/* 
<InfiniteScroll
  dataLength={products.length} //This is important field to render the next data
  //next={dispatch(fetchProducts())}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  // refreshFunction={this.refresh}
  // pullDownToRefresh
  // pullDownToRefreshThreshold={50}
  // pullDownToRefreshContent={
  //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  // }
  // releaseToRefreshContent={
  //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  // }
>
  {products}
</InfiniteScroll> */}





  <TextField 
  ref = {commentSection}
  ></TextField>
  <br />
  <Button onClick={scrollToTop} color= 'primary' variant="contained"> GO TO TOP </Button>
  </>
)
}

export default Products; 