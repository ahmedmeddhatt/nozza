import React from 'react'
import "./account.css"

const Home = ()=>{
    return(

        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="box">
                        <div className="material">
                            <header>Live Metal Prices</header>
                            <div className="market">Market Is Open <span className="circle"></span></div>
                        </div>
                        <div className="gold">
                            <div className="gold-inner">
                                <h6>Gold</h6>
                                <ul>
                                    <li className="green">Buy</li>
                                    <li className="red">Sell</li>
                                    <li>Daily Change</li>
                                    <li>Daily Change %</li>
                                </ul>
                                <ul>
                                    <li className="green"> <i className="fas fa-caret-up"></i> EGP 980.00</li>
                                    <li className="red"> <i className="fas fa-caret-down"></i> EGP 970.00</li>
                                    <li>EGP 50</li>
                                    <li>0.1 %</li>
                                </ul>
                            </div>
                            <div className="yellow">Daily Change - Difference from day before</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="chart">
                            <h6>Price Charts :</h6>
                            <div className="dropdown">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Gold
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Gold</a></li>
                                </ul>
                            </div>
                        </div>
                        <img src="chart.png" />
                            <div className="dropdown">
                                <button type="button" className="btn dropdown-toggle day" data-bs-toggle="dropdown">Day
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Gold</a></li>
                                </ul>
                            </div>
                        </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="box">
                        <header>Instant Buy  Sell</header>
                        <div className="button1">
                            <button type="button" className="btn active">BUY</button>
                            <button type="button" className="btn disabled">SELL</button>
                        </div>
                        <select id="cars">
                            <option>Gold</option>
                        </select>
                        <div className="quantity">
                            <span>Quantity</span>
                            <span>123 gm</span>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn dropdown-toggle second" data-bs-toggle="dropdown">
                                Order Type
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Gold</a></li>
                            </ul>
                            <div className="price">
                                <span>Price Limite</span>
                                <span>EGP </span>
                            </div>
                        </div>
                        <div className="order">
                            <span>Order Value Summary</span>
                            <span>0000000</span>
                        </div>
                        <div className="last">
                            <button type="button" className="reset">Reset</button>
                            <button type="button" className="preview">Preview</button>
                        </div>
                    </div>
                </div>
   
                <div className="col-12 col-lg-4">
                    <div className="box">
                        <header>Account Balance</header>
                        <div className="cash">
                            <span className="balance">Gold Balance</span>
                            <ul>
                                <li><h6 className="yellow2">Available</h6></li>
                                <li className="yellow2">Withdrawal</li>
                                <li className="yellow2">Total</li>
                                <li className="yellow2">Value</li>
                            </ul>
                            <ul>
                                <li><h6>1350 gm</h6></li>
                                <li>EGP 92,257.00</li>
                                <li>100 gm</li>
                                <li>10 gm</li>
                            </ul>
                        </div>
                        <div className="cash">
                            <span>Cashe Balance</span>
                            <span>EGP 950,024.00</span>
                        </div>
                        <div className="cash">
                            <span>Unrealized P/L</span>
                            <span>EGP 950,024.00</span>
                        </div>
                        <div className="cash">
                            <span>Funds in Withdrawal</span>
                            <span>EGP 950,024.00</span>
                        </div>
                        <div className="cash">
                            <span>Portfolio Value</span>
                            <span>EGP 90,183</span>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

    )
}

export default Home

