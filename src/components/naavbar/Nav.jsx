import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../../pages/home/Home'
import "./Nav.css"

function Nav() {
    return (
        <div>

            <nav>
                <div className="container">
                    <div className="row1">
                        <img src="/imgs/div.cr-category-toggle.svg" alt="" />
                        <ul>
                            <li><NavLink className="home" to="/">Home</NavLink></li>
                            <li><NavLink to="/products" className="product">Products</NavLink></li>
                            <li><a href="">Category</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Elements</a></li>
                        </ul>
                        <div className="tel">
                            <img src="/imgs/Icon.svg" alt="" />
                            <span>+123 ( 456 ) ( 7890 )</span>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="foodzy">
                            <img src="/imgs/imgpovar.svg" alt="" />
                            <div className="foodzyname">
                                <h3>Foodzy</h3>
                                <p> A Treasure of Tastes</p>
                            </div>
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder='Search For items...' id='poisk' />
                            <label htmlFor="poisk"><div className="poisks">
                                <img className='poisk' src="/imgs/Icon (1).svg" alt="" />
                            </div></label>
                        </div>
                        <div className="cart">
                            <div className="account">
                                <img src="/imgs/Icon (2).svg" alt="" />
                                <h3>Account</h3>
                            </div>
                            <div className="account">
                                <img src="/imgs/Icon (3).svg" alt="" />
                                <h3>Wishlist</h3>
                            </div>
                            <div className="account">
                                <img src="/imgs/Icon (4).svg" alt="" />
                                <h3>Cart</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>



    )
}

export default Nav