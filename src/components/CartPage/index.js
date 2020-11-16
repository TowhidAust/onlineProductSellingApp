import React, { Component } from 'react';
import "./cartPage.css";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
            cartCount: 0,
            chosenProducts: [],
            totalAmount: 0
        }
    }

    componentDidMount() {

        const { data } = this.props.location;
        // console.log("data from props location", data);



        
        if (data) {

          let mergedChosenProd = this.removeDuplicatesFromArr(data.chosenProducts);

            this.setState({
                isDataLoaded: true,
                cartCount: data.quantity,
                chosenProducts: mergedChosenProd
            })
        } else {
            this.setState({
                cartCount: 0,
                chosenProducts: []
            })
        }
    }



    // remove duplicate products from the array and calculate the quantity of the same product
    removeDuplicatesFromArr(arr) {
        let result = [];

        arr.forEach(function (d) {
            if (!this[d._id]) {
                this[d._id] = {
                    _id: d._id,
                    quantity: 0,
                    title: d.title,
                    price: d.price,
                    discount: d.discount,
                    picture: d.picture
                };
                result.push(this[d._id]);
            }
            this[d._id].quantity += 1;
        }, Object.create(null));

        // console.log("result", result);
        return result;
    }


    
    renderChosenProductDetails() {
        let productsData = this.state.chosenProducts;
        
        return (
            productsData.map((d, index) =>
                <div className="chosenProduct" key={index}>
                    <img src={d.picture} alt="productimage"/>

                    <div className="column">
                        <h4>{d.title}</h4>
                        <div>Color: Red</div>
                        <div>Price: BDT: {d.price}</div>
                    </div>
                    <div className="column">
                        <div>Shipping Method: EMS</div>
                        <div>Shipping Charge: BDT 100</div>
                    </div>
                    <div className="column">
                        <div className="quantityPlusMinusDiv">
                            <span className="title">quantity:</span>
                            
                            <div className="prodPlusMinus">
                                <span>-</span><span>{ d.quantity}</span><span>+</span>
                            </div>
                        </div>
                        <div>Total Price: <span>{ d.quantity * d.price}</span></div>
                    </div>
                </div>
            ));
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
                                    data: this.state.chosenProducts}}>
                                    <i><AiOutlineShoppingCart /></i>
                                    Cart
                                    <p className="cartCount"> { this.state.cartCount} </p>
                                    
                                </Link>
                            </span>
                        </div>

                        <span className="userIcon"><AiOutlineUser/></span>
                    </div>

                    <section className="chosenProductDetails">
                        <div className="chosenProdInner">
                            {this.renderChosenProductDetails()}
                        </div>
                        
                        <div className="orderSummary">
                            <h3>order summary</h3>
                            <p>Subtotal ({this.state.cartCount} items): {this.state.totalAmount}</p>
                            <p>Discount: 15%</p>
                            <p>Shipping Charge: 100</p>
                            <p>Wallet Debit: 0</p>
                        </div>


                    </section>
                </section> 
            </>
        )
    }
}
