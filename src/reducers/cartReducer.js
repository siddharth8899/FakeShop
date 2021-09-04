import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL, ADD_QTY, REMOVE_QTY } from "../doShopAction/doCartActions";
const initialState = {
    cart:[],
    price: 0
}

export const cartReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {

        case ADD_TO_CART : {
            const { cart } = payload || '';
            const {item} = cart || '';
            const {price} = item || '';
            let existed = state.cart.find((alreadyAdded) => item.id === alreadyAdded.item.id)
            if(existed)
            {
                item.qty += 1;
                return {            
                ...state,
                price: state.price + price,
            }
        } else {
            item.qty = 1;
            return {            
                ...state,
                cart: [...state.cart, cart],
                price: state.price + price,
            }
        }
    }

        case ADD_QTY: {
            console.log(payload)
        const { cart } = payload || '';
        const {item} = cart || '';
        const {price} = item || '';
        item.qty+=1;
            return {
                ...state,
                price: state.price + price
            }
        }

        case REMOVE_QTY: {
            const { cart } = payload || '';
            const {item} = cart || '';
            const {price} = item || '';
            if (item.qty > 1)  
            {
                item.qty-=1 //: (item.qty = 0)
                return {
                    ...state,
                    price: state.price - price
                }
            } else {
                item.qty = 0;
                const newCart = state.cart.filter((removedItem) => item.id !== removedItem.item.id)
                return {
                    ...state,
                    cart : newCart,
                    price: state.price - price
                }
            }
            }

        case REMOVE_FROM_CART: {
            const { cart } = payload || '';
            const {item} = cart || '';
            const {price} = item || '';
            const newCart = state.cart.filter((removedItem) => removedItem.id !== cart.id);
            const priceDeducted = price*(item.qty);

            return {
                ...state,
                cart: newCart,
                price: state.price - priceDeducted
            }
        }

        case CLEAR_ALL: {
            return {
                ...state,
                cart: [],
                price: 0
            }
        }
        
        default : return state
    }
}
