export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_ALL = 'CLEAR_ALL';
export const ADD_QTY = 'ADD_QTY';
export const REMOVE_QTY = 'REMOVE_QTY';

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: {
            cart:item
        }
    }
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            cart: item
        }
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL,
    }
}

export const addQty = (item) => {
    return {
        type: ADD_QTY,
        payload: {
            cart:item
        }
    }
}

export const removeQty = (item) => {
    return {
        type: REMOVE_QTY,
        payload: {
            cart:item
        }
    }
}


// export default  (source, action, ...args) => (dispatch, getState) => {
//     const params = {source, type: action, dispatch, getState};
//     console.log(params)
//     const {item} = args;
//     switch(action) {
//         case 'addToCart' : {
//             return dispatch ({
//                 type: ADD_TO_CART,
//                 payload: {
//                     cart:item
//                 }
//             })
//         }
//     }
// }