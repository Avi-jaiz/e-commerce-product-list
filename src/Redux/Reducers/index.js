import { combineReducers } from "redux";
import { ProductReducer ,selectedProductsReducer} from "./ProductReducer";



const allReducers = combineReducers({
    allProducts:ProductReducer,
    product:selectedProductsReducer,

})


export default allReducers;