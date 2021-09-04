// import axios from "axios"
// export const FETCH_PRODUCT_BEGIN = 'FETCH_PRODUCT_BEGIN'
// export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
// export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR'

// export const fetchProduct = (id) => {
//     return (dispatch) => {
//         dispatch({type: FETCH_PRODUCT_BEGIN})
//         axios.get(`https://fakestoreapi.com/products/${id}`) //check this
//         .then(response => {
//             dispatch({type: FETCH_PRODUCT_SUCCESS, payload: {response}}) //check this
//         })
//         .catch(error => {
//             dispatch({type: FETCH_PRODUCT_ERROR, payload: {error}})
//         })
//     }
// }