import React, { Component } from 'react';
import "./cartPage.css";
import { AiOutlineDelete, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { get } from 'lodash';
import { database } from '../../firebase';
export default class CartPage extends Component {

    constructor(props) {
        super(props);
        console.log("inside cart page constructor", props);
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
        // this.fetchCartFromDatabase();
    }



    fetchCartFromDatabase = () => {
        
        // Fetch cart from db
        fetch('http://localhost:5000/cart')
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);
            let _chosenProductsJSON = get(data, ['chosenProducts'], {});

            // refactor the data
            let _chosenProducts = [];
            for (let key in _chosenProductsJSON) {
                let products = _chosenProductsJSON[key];
                _chosenProducts.push(products);
            }
            let _quantity = data.quantity;
            let _mergedChosenProd = this.removeDuplicatesFromArr(_chosenProducts);


            this.setState({
                cartCount: _quantity,
                chosenProducts: _mergedChosenProd
            })

        }).then(() => {
            this.addTotalAmountToDatabase();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    addTotalAmountToDatabase = () => {
        let _totalAmount = this.calculateTotalAmount(this.state.chosenProducts);
        // console.log("total amount", totalAmount);
        fetch('http://localhost:5000/addTotalAmount', {
            method: 'POST', // or 'PUT'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'totalAmount':_totalAmount}),
            })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
                this.setState({
                    totalAmount: _totalAmount
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });

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
        let productTitle = e.target.getAttribute('product_title');
        let productPrice = e.target.getAttribute('product_price');
        let productPicture = e.target.getAttribute('product_picture');
        let productDiscount = e.target.getAttribute('product_discount');
        let productQuantity = e.target.getAttribute('product_quantity');
        let _chosenProductsJson = this.state.chosenProducts;

        let data =   {
            "_id": productId,
            "title": productTitle,
            "picture": productPicture,
            "price": productPrice,
            "discount": productDiscount,
            "quantity" : productQuantity
        }
        
        this.addTocartAfterClickingPlusButton(data);

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

    // add to database cart info
    addTocartAfterClickingPlusButton = (data) => {
        // add product on cart database
        fetch('http://localhost:5000/addToCart', {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);
            this.setState({
                cartCount: this.state.cartCount + 1
            })
            this.addQuantityOnCartDatabase();
        }).then(() => {
            this.addTotalAmountToDatabase();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // remove from databse cart after clicking minus button
    removeFromDBCartAfterClickingMinusButton = (data) => {
        // add product on cart database
        fetch('http://localhost:5000/removeSingleDataFromCart', {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);

            this.setState({
                cartCount: this.state.cartCount - 1
            });

            this.addQuantityOnCartDatabase();
            
        }).then(() => {
            this.addTotalAmountToDatabase();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // add quantity on cart database
    addQuantityOnCartDatabase = () => {
        fetch('http://localhost:5000/addQuantityToCart', {
            method: 'POST', // or 'PUT'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity:this.state.cartCount}),
            })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

   
    productMinusClickHandler = (e) => {
        let productId = e.target.getAttribute('productid');
        let _chosenProductsJson = this.state.chosenProducts;

        let data = {
            "productId": productId
        }


        for (let i in _chosenProductsJson) {
            let currentProdId = _chosenProductsJson[i]['_id'];
            let currentProdQuantity = _chosenProductsJson[i]['quantity'];

            if (currentProdId === productId) {
                let minimizeProduct = currentProdQuantity - 1;
                if (minimizeProduct >= 1) {
                    this.removeFromDBCartAfterClickingMinusButton(data);
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
        // console.log("e.target.checked", e.target.checked);
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
    
    deleteProductsAndUpdateTheState = (e, prodId) => {
        let productsData = this.state.chosenProducts;
        let cartCount = 0;
        console.log(" chosen products data", productsData);
        // first remove from the state
        for (let i in productsData) {
            let id = productsData[i]['_id'];
            if (prodId === id) {
                cartCount = cartCount + 1;
                productsData.splice(i, 1);
            }
        }
       
        // this.setState({
        //     chosenProducts: productsData,
        //     cartCount: this.state.cartCount - cartCount
        // });


        
        // minimize the cart count 
        // this.addTotalAmountToDatabase();

        // fix the quantity and total amount

        // TODO now need to remove this cart data from database backend. for now using here
        database.ref('/Cart/chosenProducts').once("value").then(snapshot => {
            let productsJson = snapshot.val();
            for (let key in productsJson) {
                let productID = productsJson[key]['_id'];
                if (productID === prodId) {
                    database.ref(`/Cart/chosenProducts/${key}`).remove().then((snapshot) => {
                        this.addTotalAmountToDatabase();
                        this.setState({
                            chosenProducts: productsData,
                            cartCount: this.state.cartCount - cartCount
                        });

                       
                    }).then(() => {
                        this.addQuantityOnCartDatabase();
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            }
        })

    }

    renderChosenProductDetails() {
        console.log("cart props", this.props)
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
                                <span onClick={(e)=>this.productPlusClickHandler(e)} productid = {d._id} product_title={d.title} product_picture={d.picture} product_price={d.price} product_discount={d.discount} product_quantity={1}>+</span>
                            </div>
                        </div>
                        <div>Total Price: <span>{ d.quantity * d.price}</span></div>
                    </div>

                    <span className="deleteCartProd" onClick={(e)=>{this.deleteProductsAndUpdateTheState(e, d._id)}} productid = {d._id}><AiOutlineDelete/></span>
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

                            <hr/>
                            
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
