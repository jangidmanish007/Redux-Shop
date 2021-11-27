const initstate = {
    products: [],
    TotalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initstate, action) => {
    let findProduct;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload;
            const check = state.products.find(pr => pr.id === product.id);
            if (check) {
                return state;
            } else {
                const Tprice = state.TotalPrice + product.discountPrice * quantity
                console.log(Tprice);
                const Tquantities = state.totalQuantities + quantity
                return {
                    ...state, products: [...state.products, product], 
                    TotalPrice: Tprice,
                    totalQuantities: Tquantities
                }
            }

        case 'INC':
            findProduct = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            findProduct.quantity += 1;
            state.products[index] = findProduct;
            return {
                ...state,
                TotalPrice: state.TotalPrice + findProduct.discountPrice, 
                totalQuantities: state.totalQuantities + 1
            }

        case 'DEC':
            findProduct = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if (findProduct.quantity > 1) {
                findProduct.quantity -= 1;
                state.products[index] = findProduct;
                return {
                    ...state,
                    TotalPrice: state.TotalPrice - findProduct.discountPrice, 
                    totalQuantities: state.totalQuantities - 1
                }
            } else {
                return state;
            }
        case 'REMOVE':
            findProduct = state.products.find(product => product.id === action.payload);
            const filteritem = state.products.filter(product => product.id !== action.payload);
            return {
                ...state,
                products: filteritem,
                TotalPrice: state.TotalPrice - findProduct.discountPrice * findProduct.quantity,
                totalQuantities: state.totalQuantities - findProduct.quantity
            }
        default:
            return state;
    }
}
export default CartReducer;




