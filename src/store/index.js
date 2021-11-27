import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from "./reducers/CartReducer";
const root = combineReducers({
    ProductsReducer,
    CartReducer
});
const store = createStore(root, devToolsEnhancer());
export default store;











// reactdevtool :- iske help se aap state ka pta laga skte hai ke cretate hui hai ya nhi yh ak dev tool he hai bss isnme jo be state bnti hai wo show hoti hai or jo be state me object hai wo be  
//isko use krne kai ley sbse phly isee installkrna pdta hai  npm install --save redux-devtools-extension   pakage se
// uske baad isko import krna pdta hai devToolsEnhancer se

 