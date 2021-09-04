import React from 'react'
import { useSelector , useDispatch} from 'react-redux';
import CartList from './CartList';
import { clearAll } from './doShopAction/doCartActions';

const Cart = () => {

const state = useSelector(state => state.cartReducer)
const {cart, price} = state;
const dispatch = useDispatch();

return (
    <div>
        {cart.map((item, index) => { return <div key = {index}><CartList item = {item.item}/></div>})}
        Price: $$$ {price.toFixed(2)} 
        <button onClick={() => dispatch(clearAll())}>clear All</button>
    </div>
)
}

export default Cart
