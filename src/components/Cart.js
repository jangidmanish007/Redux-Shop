import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import { BsDash, BsPlus, BsFillBackspaceFill } from 'react-icons/bs'
const Cart = () => {
  const dispatch = useDispatch();
  const { products, TotalPrice, totalQuantities } = useSelector(state => state.CartReducer);
  console.log(products);
  return (
    <div className="cart-page">
      <div className="container">
        <h3>Cart Items</h3>
        {products.length > 0 ? <>
          <div className="row">
            <div className="col-9">
              <div className="Cart_heading">
                <div className="row">
                  <div className="col-2">Picture</div>
                  <div className="col-2">Name</div>
                  <div className="col-2">price</div>
                  <div className="col-2">Inc/Dec</div>
                  <div className="col-2">Total Price</div>
                  <div className="col-2">remove</div>
                </div>
              </div>
              {products.map(product => (
                <div className="row verticalAlign" key={product.id}>
                  <div className="col-2">
                    <div className="cart_image">
                      <img src={`/images/${product.image}`} alt="" />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart_name">
                      {product.name}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart_price">
                      {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="quantity_info">
                      <div className="flex_row w-30px">
                        <span className="dec Cart_dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })
                        }><BsDash /></span>
                        <span className="quantity Cart_qua">{product.quantity}</span>
                        <span className="inc Cart_inc" onClick={() => dispatch({ type: 'INC', payload: product.id })
                        }><BsPlus /></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart_total">
                      {currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart_remove" onClick={() => dispatch({ type: 'REMOVE', payload: product.id })}>
                      <BsFillBackspaceFill />
                    </div>
                  </div>
                </div>
              ))}

            </div>
            <div className="col-3 summary_width">
              <div className="Summary">
                <div className="summary_heading">
                  summary
                </div>
                <div className="summary_details">
                  <div className="row mb-10">
                    <div className="col-6">
                      Total Items :
                    </div>
                    <div className="col-6">
                      {totalQuantities}
                    </div>
                  </div>
                  <div className="row mb-10">
                    <div className="col-6">
                      Total Price :
                    </div>
                    <div className="col-6">
                      {currencyFormatter.format(TotalPrice, { code: 'USD' })}
                    </div>
                  </div>
                  <div className="row">
                    <button type="button" className="checkout_btn">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </> : 'your Cart is Empty'}
      </div>
    </div>
  )
}

export default Cart