import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="ft1">
                        <div className="foodzy">
                            <img src="/imgs/imgpovar.svg" alt="" />
                            <div className="foodzyname">
                                <h3>Foodzy</h3>
                                <p> A Treasure of Tastes</p>
                            </div>
                        </div>
                        <p>FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                        <div className="loc">
                            <img src="/imgs/location.svg" alt="" />
                            <p>51 Green St.Huntington ohaio beach ontario, NY
                                11746 KY 4783, USA.</p>
                        </div>
                        <div className="exam">
                            <img src="/imgs/email.svg" alt="" />
                            <p>example@email.com</p>
                        </div>
                        <div className="tel">
                            <img src="/imgs/tel.svg" alt="" />
                            <p>+91 123 4567890</p>
                        </div>
                    </div>
                    <div className="company">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Delivery Information</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">contact Us</a></li>
                            <li><a href="">Support Center</a></li>
                        </ul>
                    </div>
                    <div className="category">
                        <h2>Category</h2>
                        <ul>
                            <li><a href="">Dairy & Bakery</a></li>
                            <li><a href="">Fruits & Vegetable</a></li>
                            <li><a href="">Snack & Spice</a></li>
                            <li><a href="">Juice & Drinks</a></li>
                            <li><a href="">Chicken & Meat</a></li>
                            <li><a href="">Fast Food</a></li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <h2>Subscribe Our Newsletter</h2>
                        <div className="input">
                            <input type="text" placeholder='Search here...' id='inp' />
                            <label htmlFor="inp"><img className='tg' src="/imgs/tg.svg" alt="" /></label>
                        </div>
                        <div className="socials">
                            <img src="/imgs/f.svg" alt="" />
                            <img src="/imgs/x.svg" alt="" />
                            <img src="/imgs/30.svg" alt="" />
                            <img src="/imgs/inst.svg" alt="" />
                        </div>
                        <img src="/imgs/rasimlar.png" alt="" />
                    </div>
                </div>
                <span className='oxiri'>© 2025 foodzy, All rights reserved.</span>
            </footer>
        </div>
    )
}

export default Footer