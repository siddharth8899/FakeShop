//import { FETCH_PRODUCT_BEGIN, FETCH_PRODUCT_ERROR, FETCH_PRODUCT_SUCCESS } from "../doShopAction/apiGetProduct";
import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from "../doShopAction/apiGetProducts";

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case FETCH_PRODUCT_BEGIN:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: null
        //     }

        // case FETCH_PRODUCT_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         data: [action.payload.data]

        //     }
        // case FETCH_PRODUCT_ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload.error
        //     }

        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...action.payload]

            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}