import React, { Component } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../../firebase';
import LeftDrawer from '../Left_Drawer';



export default class AddNewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSampleData: [
                {
                  "_id": "5f4011d1fadf274a8862865a",
                  "title": "TShirtXL",
                  "picture": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114418/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__02469.1574244136.jpg?c=2",
                  "price": 1500,
                  "discount": "5%",
                },
                {
                    "_id": "5f4011d1fadf274a8862865b",
                    "title": "TShirtSM",
                    "picture": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114418/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__02469.1574244136.jpg?c=2",
                    "price": 1100,
                    "discount": "15%",
                }
            ],
            
            productID: '',
            productTitle: '',
            productPrice: '',
            productDiscount: '',
            productShippingCharge: '',
            productColor: '',
            productSize: '',
            productActive: ''
        }
    }


    onchangeNameHandler = (e) => {

        this.setState({
            productTitle: e.target.value,
        })
        
    }

    onchangePriceHandler = (e) => {
        this.setState({
             productPrice: e.target.value
        }) 
    }

    onchangeDiscountHandler = (e) => {
        this.setState({
            productDiscount: e.target.value
       }) 
    }

    onchangeShippingChargeHandler = (e) => {
        this.setState({
            productShippingCharge: e.target.value
       }) 
    }

    onchangeColorHandler = (e) => {
        this.setState({
            productColor: e.target.value
       }) 
    }

    onchangeSizeHandler = (e) => {
        this.setState({
            productSize: e.target.value
       }) 
    }


    onclickActiveHandler = (e) => {
        this.setState({
            productActive: true
        })
    }

    onclickInactiveHandler = (e) => {
        this.setState({
            productActive: false
        })
    }





    submitButtonClickHandler = (e) => {
        this.setState({
            productID: uuidv4()
        })
        if (this.state.productID ==='' ||
            this.state.productTitle ==='' ||
            this.state.productPrice ==='' ||
            this.state.productDiscount ==='' ||
            this.state.productShippingCharge ==='' ||
            this.state.productColor ==='' ||
            this.state.productSize ==='' ||
            this.state.productActive === '') {
            
            alert("Please enter all the fields value");
            
        } else {
            let data = {
                "_id": this.state.productID,
                "title": this.state.productTitle,
                "picture": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114418/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__02469.1574244136.jpg?c=2",
                "price": this.state.productPrice,
                "discount": this.state.productDiscount,
            }


            // TODO need to use backend server to add the product with security.
            database.ref('/Products').push(data).then((snapshot) => {
                console.log(snapshot.key);
                alert("product data added successfully");
            });

        }
    }


    render() {
        return (

            <>
            <div className="admin_header">
                <h3 className="logo">
                    <span>Test Logo</span>
                </h3>
                <span className="userIcon">
                        <AiOutlineUser />
                </span>
            </div>
            <div className="adminProductsCard">

                <div className="leftDrawer">
                            <LeftDrawer/>
                </div>
                <div className="rightPanel">
                        
                <div className="addProductInner">
                <div>
                    <div>Product Name:</div>
                    <input onChange={(e)=>{this.onchangeNameHandler(e)}} type="text"/>
                </div> 
                <div>
                    <div>ProductPrice</div>
                    <input onChange={(e)=>{this.onchangePriceHandler(e)}} type="number"/>
                </div> 
                <div>
                    <div>Discount</div>
                    <input onChange={(e)=>{this.onchangeDiscountHandler(e)}} type="number"/>
                </div> 
                <div>
                    <div>Shipping Charge</div>
                    <input onChange={(e)=>{this.onchangeShippingChargeHandler(e)}} type="number"/>
                </div> 
                <div>
                    <div>Color</div>
                    <input onChange={(e)=>{this.onchangeColorHandler(e)}} type="text"/>
                </div> 
                <div>
                    <div>Size</div>
                    <input onChange={(e)=>{this.onchangeSizeHandler(e)}} type="text"/>
                </div> 
                <div className="prodActiveDiv">
                    <span onClick={(e)=>this.onclickActiveHandler(e)} >Active</span>
                    <span onClick={ (e)=>{this.onclickInactiveHandler(e)}}>Inactive</span>
                </div>

                <div><button onClick={(e) => { this.submitButtonClickHandler(e) }}>Add Product</button></div>
                </div>
            </div>
                
            </div>
        </>
        )
    }
}
