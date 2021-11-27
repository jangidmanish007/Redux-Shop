import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter'
import { BsDash, BsPlus } from 'react-icons/bs'

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const { product } = useSelector(state => state.ProductsReducer);
    
    useEffect(() => {
        dispatch({ type: "PRODUCT", id })
        // eslint-disable-next-line 
    }, [id])

    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className="conatiner detail">
            <div className="row">
                <div className="col-6 detail_size">
                    <div className="details_image">
                        <img src={`/images/${product.image}`} style={{ maxWidth: "80%", maxHeight: "80vh" }} alt="images" />
                    </div>
                </div>
                <div className="col-6 detail_width">
                    <div className="detail-name">
                        {product.name}
                    </div>
                    <div className="detail_price">
                        <span className="detail_actual">
                            {currencyFormatter.format(product.price, { code: 'USD' })}
                        </span>
                        <span className="detail_discount">
                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                        </span>
                    </div>
                    <div className="quantity_info">
                        <div className="flex_row">
                            <span className="dec" onClick={decQuantity}><BsDash /></span>
                            <span className="quantity">{quantity}</span>
                            <span className="inc" onClick={() => setQuantity(quantity + 1)}><BsPlus /></span>
                            <button className="Cart-btn" type="button" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })} >Add To Cart</button>
                        </div>
                    </div>
                    <div className="detail_p">
                        {product.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details



