import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BsFillCartFill } from "react-icons/bs";

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="nav">
            <div className="container">
                <div className="nav_container">
                    <div className="nav_left">
                        <img src="/images/flipkart-logo.png" alt="logo" />
                    </div>
                    <div className="nav_right">
                        <Link to="/">home</Link>
                        <Link to="/cart">
                            <div className="basket">
                             <BsFillCartFill className="cart-icon" />
                             <span>{totalQuantities}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
