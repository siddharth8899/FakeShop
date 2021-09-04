import {combineReducers} from  "redux"
import { cartReducer } from "./cartReducer"
import { reducer } from "./reducer"

export const rootReducer = combineReducers({
    cartReducer, 
    reducer
})