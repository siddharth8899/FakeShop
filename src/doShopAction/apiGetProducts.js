import axios from 'axios'

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'


export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({type: FETCH_PRODUCTS_BEGIN})
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FETCH_PRODUCTS_ERROR, payload: {error}})
        })
    }
}

