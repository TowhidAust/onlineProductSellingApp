import React, { Component } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LeftDrawer from '../Left_Drawer'

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDataLoaded: false,
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
                },
                {
                    "_id": "5f4011d1fadf274a8862865b",
                    "title": "TShirtSM",
                    "picture": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114418/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__02469.1574244136.jpg?c=2",
                    "price": 1100,
                    "discount": "15%",
                },
                {
                    "_id": "5f4011d1fadf274a8862865b",
                    "title": "TShirtSM",
                    "picture": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114418/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__02469.1574244136.jpg?c=2",
                    "price": 1100,
                    "discount": "15%",
                },
                {
                    "_id": "5f4011d1fadf274a8862865b",
                    "title": "TShirtSM",
                    "picture": "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114418/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__02469.1574244136.jpg?c=2",
                    "price": 1100,
                    "discount": "15%",
                  }
              ],
        }
    }


    componentDidMount() {
        this.fetchProductFromBackendDatabase();
    }

     // fetch products from backend
     fetchProductFromBackendDatabase = () => {
        // first fetch products from backend
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);
            // now modify the data
            let _productSampleData = [];
            for (let key in data) {
                let product = data[key];
                _productSampleData.push(product);
            }

            if (data.msg !== 'undefined') {
                this.setState({
                    productSampleData: _productSampleData
                })
            }

        }).then(() => {
           
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }



    createProductCards=()=>{
        const data =this.state.productSampleData;
       return (
        data.map((d, index) =>
           <div className="admin_products" key={index}>
                <img src={d.picture} alt="prodImg"/>
                <p style={{listStyle:"none", fontSize:"1em", marginTop: "1em"}} to={`/ProductDetails/:${d._id}`} productid = {d._id} productdescription = {d.description}>{d.title}</p>
                <div className="priceAndDiscount">
                    <p>BDT. {d.price}</p>
                    <span>15%</span>
                </div>
            </div>
        ));
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

                        
                        <div className="addNewProd">
                            <Link style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
                                            to={{ pathname: "/AddNewProduct" }}>
                                <button>Add New Product</button>
                            </Link>
                        </div>     
                        <div className="cardsContainer">
                            {this.createProductCards()}
                        </div>
                    </div>    
                </div>
            </>
        )
    }
}
