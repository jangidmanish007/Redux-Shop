import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'

const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    console.log(products);
    return (
        <div>
            <Header />
            <div className="container">
                <h3 className="heading">Product <span> items</span></h3>
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product_img">
                                    <Link to={`/details/${product.id}`}>
                                        <img src={`/images/${product.image}`} alt="images" />
                                    </Link>
                                </div>
                                <div className="product_name">
                                    {product.name}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product_price">
                                            <span className="actual_price">
                                                {currencyFormatter.format(product.price, { code: 'USD' })}
                                            </span>
                                            <span className="discount">
                                                {product.discount}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product_discount_price">
                                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
