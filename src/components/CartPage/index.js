import React, { Component } from 'react';
import "./cartPage.css";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
export default class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
            cartCount: 0,
            chosenProducts: [],
            totalAmount: 0,
            shippingCharge: 0,
            discount: 0,
            walletDebit: 0,
            promoCode: 'ABCD',
            promoCodeValidity: 'valid',
            promcodeInputValue: '',
            errorMessage: '',
            termsAgreeCheckbox: false,
            checkOutButtonClick: false
        }
    }

    componentDidMount() {

        const { data } = this.props.location;
        // console.log("data from props location", data);
        if (data) {

          let mergedChosenProd = this.removeDuplicatesFromArr(data.chosenProducts);
        
            let totalAmount = this.calculateTotalAmount(mergedChosenProd);
            console.log("Total Amount", totalAmount);
            this.setState({
                isDataLoaded: true,
                cartCount: data.quantity,
                chosenProducts: mergedChosenProd,
                totalAmount: totalAmount
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

    calculateTotalAmount = (productJson) => {
        let totalPrice = 0;
        for (let i in productJson) {
            let price = productJson[i]['price'] * productJson[i]['quantity'];
            totalPrice = totalPrice + price;
        }

        return totalPrice;
    }


    productPlusClickHandler = (e) => {
        let productId = e.target.getAttribute('productid');
        let _chosenProductsJson = this.state.chosenProducts;

        for (let i in _chosenProductsJson) {
            let currentProdId = _chosenProductsJson[i]['_id'];
            let currentProdQuantity = _chosenProductsJson[i]['quantity'];

            if (currentProdId === productId) {
                _chosenProductsJson[i]['quantity'] = (currentProdQuantity + 1);
                let totalAmount = this.calculateTotalAmount(_chosenProductsJson);

                this.setState({
                    chosenProducts: _chosenProductsJson,
                    totalAmount: totalAmount
                })

                return false;
            }

        }
 
    }

  

    productMinusClickHandler = (e) => {
        let productId = e.target.getAttribute('productid');
        let _chosenProductsJson = this.state.chosenProducts;

        for (let i in _chosenProductsJson) {
            let currentProdId = _chosenProductsJson[i]['_id'];
            let currentProdQuantity = _chosenProductsJson[i]['quantity'];

            if (currentProdId === productId) {

                let minimizeProduct = currentProdQuantity - 1;
                if (minimizeProduct >= 0) {
                    _chosenProductsJson[i]['quantity'] = minimizeProduct;
                }
                let totalAmount = this.calculateTotalAmount(_chosenProductsJson);
                this.setState({
                    chosenProducts: _chosenProductsJson,
                    totalAmount: totalAmount
                })

                return false;
            }

        }

    }

    applyPromoCodeClickHandler = (e) => {
        let promocode = this.state.promoCode;
        let promoCodeValidity = this.state.promoCodeValidity;
        let promcodeInputValue = this.state.promcodeInputValue;
        if (promoCodeValidity === 'valid' && promcodeInputValue !== '' && promcodeInputValue === promocode) {
            let totalAmount = this.state.totalAmount;
            let discount = 15 / 100;
            let amountAfterDiscount = totalAmount - (totalAmount * discount);
            this.setState({
                discount: "15%",
                totalAmount: amountAfterDiscount,
                promoCodeValidity: 'invalid',
                errorMessage: 'PromoCode Applied'
            })
        } else {
            this.setState({
                errorMessage: 'Promo code invalid/expired'
            })
            // return false;
        }
    }

    promocodeInputOnchangeHandler = (e) => {
        this.setState({
            promcodeInputValue: e.target.value,
        })
    }

    checkoutButtonClickHandler = (e) => {
        if (this.state.termsAgreeCheckbox) {
            // alert("true");
            this.setState({
                checkOutButtonClick: true,
            })
        } else {
            this.setState({
                checkOutButtonClick: false,
            })
            alert("You have to agree with terms and conditions.");
       }
    }


    termsCheckBoxClickHandler = (e) => {
        let checkedStatus = e.target.checked;
        console.log("e.target.checked", e.target.checked);
        if (checkedStatus === true) {
            this.setState({
                termsAgreeCheckbox : true
            })
        } else {
            this.setState({
                termsAgreeCheckbox : false
            })
        }
       
    }

    renderConfirmationModal = ()=> {
        if (this.state.termsAgreeCheckbox && this.state.checkOutButtonClick) {
            return (
                <div className="confirmationModal">
                        <div className="confirmationModalInner">
                            <span className="tick"><TiTick/></span>
                            <div>Your order Placed Successfully</div>


                            <Link style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                                to={{
                                    pathname: "/Admin",
                                    data: this.state.chosenProducts}}>
                                <button className="btnAdmin">Go to Admin Panel</button>
                            </Link>
                        </div>
                    </div>
            )
        } else {
            
        }
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
                                <span onClick={(e)=>this.productMinusClickHandler(e)} productid={d._id}>-</span>
                                <span>{d.quantity}</span>
                                <span onClick={(e)=>this.productPlusClickHandler(e)} productid = {d._id}>+</span>
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
                            
                            <div className="termsAndConditions">
                                <input type="checkbox" onChange={(e)=>this.termsCheckBoxClickHandler(e)}/>
                                <span>I agree to the terms and conditions, privacy, return policy.</span>
                                <button onClick={(e)=>this.checkoutButtonClickHandler(e)}>Checkout</button>
                            </div>
                        </div>
                        
                        <div className="orderSummary">
                            <h3>order summary</h3>
                            <hr/>
                            <p>Subtotal ({this.state.cartCount} items): BDT {this.state.totalAmount}</p>
                            <p>Discount: {this.state.discount}</p>
                            <p>Shipping Charge: BDT {this.state.shippingCharge}</p>
                            <p>Wallet Debit: BDT {this.state.walletDebit}</p>

                            <hr/>
                            <div className="promoCode">
                                <div className="promoCodeErrorMsg">{ this.state.errorMessage}</div>
                                <input onChange={(e)=>this.promocodeInputOnchangeHandler(e)} type="text" placeholder="Promo eg: ABCD" />
                                <button onClick={(e)=>this.applyPromoCodeClickHandler(e)}>Apply</button>
                            </div>

                            <hr />
                            
                            <p>Total Payable: BDT { this.state.totalAmount }</p>
                        </div>

                        
                        
                    </section>

                    
                    {/* <div className="confirmationModal">
                        <div className="confirmationModalInner">
                            <span className="tick"><TiTick/></span>
                            <div>Your order Placed Successfully</div>


                            <Link style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                                to={{
                                    pathname: "/Admin",
                                    data: this.state.chosenProducts}}>
                                <button className="btnAdmin">Go to Admin Panel</button>
                            </Link>
                        </div>
                    </div> */}

                    {this.renderConfirmationModal()}
                </section> 
            </>
        )
    }
}
