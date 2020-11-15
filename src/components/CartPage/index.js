import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import "./cartPage.css";
import {RiDeleteBack2Line} from 'react-icons/ri';
import CartTotals from '../cartTotals';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
            cartCount: 0
        }
    }

    componentDidMount() {

        const { data } = this.props.location;

        if (data) {
            this.setState({
                isDataLoaded: true,
                cartCount: data.quantity
            })
        }
    }

    render() {
      
        return (
            <>
                <section className="productBanner">
                    <div className="headerSection">
                        <div className="homeLogo"><h3>Test Logo</h3></div>
                        <div className="searchInput">
                            <i><AiOutlineSearch/></i>
                            <input type="text" placeholder="Search"/>
                        </div>
                        <div className="homeCart">
                            <span>
                                
                                <Link style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }} to={{
                                    pathname: "/CartPage",
                                    data: this.state.chosenProducts}} >
                                    <i><AiOutlineShoppingCart /></i>
                                    Cart
                                    <p className="cartCount">{ this.state.cartCount}</p>
                                    
                                </Link>
                            </span>
                        </div>

                        <span className="userIcon"><AiOutlineUser/></span>
                    </div>

                    <section className="chosenProductDetails">
                        <div className="chosenProduct">
                            <img src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114418/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__02469.1574244136.jpg?c=2" />

                            <div className="column">
                                <h4>Camera</h4>
                                <div>Color: Red</div>
                                <div>Price: BDT: 1500</div>
                            </div>
                            <div className="column">
                                <div>Shipping Method: EMS</div>
                                <div>Shipping Charge: BDT 100</div>
                            </div>
                            <div className="column">
                                <div className="quantityPlusMinusDiv">
                                    <span className="title">quantity:</span>
                                     
                                    <div className="prodPlusMinus">
                                        <span>-</span><span>1</span><span>+</span>
                                    </div>
                                </div>
                                <div>Total Price: <span>BDT. 1500</span></div>
                            </div>
                        </div>
                    </section>
                </section> 
            </>
        )
    }
}
