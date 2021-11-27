const initState = {
    products: [
        {
            id: 1,
            name: 'man t-shirt summer season',
            image: '1.jpeg',
            price: 20,
            discount: 2,
            discountPrice: 20 - 2 / 100 * 20,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id: 2,
            name: 'woman jacket summer season',
            image: '2.jpeg',
            price: 30,
            discount: 5,
            discountPrice: 30 - 5 / 100 * 30,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id: 3,
            name: 'man Track-Paint for all season',
            image: '3.jpeg',
            price: 15,
            discount: 3,
            discountPrice: 15 - 5 / 100 * 15,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id: 4,
            name: 'man shoes for all season',
            image: '4.jpeg',
            price: 50,
            discount: 4,
            discountPrice: 50 - 4 / 100 * 50,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id: 5,
            name: 'woman kurta',
            image: '5.jpeg',
            price: 25,
            discount: 2,
            discountPrice: 25 - 2 / 100 * 25,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id: 6,
            name: 'woman jeans',
            image: '6.jpeg',
            price: 60,
            discount: 6,
            discountPrice: 60 - 6 / 100 * 60,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id: 7,
            name: 'men jeans',
            image: '7.jpeg',
            price: 65,
            discount: 6,
            discountPrice: 65 - 6 / 100 * 65,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id: 8,
            name: 'men hoodie',
            image: '8.jpeg',
            price: 55,
            discount: 5,
            discountPrice: 55 - 5 / 100 * 55,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id: 9,
            name: 'men Smart Watch',
            image: '9.jpeg',
            price: 65,
            discount: 7,
            discountPrice: 65 - 7 / 100 * 65,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
        {
            id:10,
            name: 'men Cargoos',
            image: '10.jpeg',
            price: 45,
            discount: 4,
            discountPrice: 45-4 / 100 * 45,
            quantity: 1,
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugit quae dolores? Earum, natus labore! Ad assumenda veritatis quas adipisci.'
        },
    ],
    product:{}

}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT":
         return {...state, product: state.products.find(product => product.id ===parseInt(action.id))}   
        default:
            return state;
        }
}
export default ProductsReducer;