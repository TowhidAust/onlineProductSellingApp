import React, { Component } from 'react';
import './productCard.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';


export default class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            productSampleData: [


                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use ...everyday",
                    "category": "men clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                },
                {
                    "id": 20,
                    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
                    "price": 12.99,
                    "description": "95%Cotton,5%Spandex, Features: Casual, ...Winter.",
                    "category": "women clothing",
                    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
                },
                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use ...everyday",
                    "category": "men clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                }
              ],
            quantity: 0,
            chosenProducts: []
            
        }
    }
    
    componentDidMount() {
        this.fetchProductFromBackendDatabase();
        this.setState({
            isDataLoaded: true,
        });
    }

    // fetch products
    fetchProductFromBackendDatabase = () => {
        // first fetch products from backend
        fetch('https://fakestoreapi.com/products')
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
            let searchKey = this.props.searchKey;
            console.log("search key",searchKey);
            // const items = this.state.productSampleData.filter((data)=>{
            //     if (searchKey == null) {
            //         console.log('search state is null');
            //         return data;
            //     }
            //     else if (data.title.toLowerCase().includes(searchKey.toLowerCase())) {
            //         console.log('Search State is not null', data);
                    
            //         return data
            //     }
            //   })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

   

    addToCartClickHandler(productID, productPicture, productName, productPrice) {
        console.log(productID, productPicture, productName, productPrice);

        let data = {
            "id": productID,
            "title": productName,
            "image": productPicture,
            "price": productPrice,
            "quantity": 1,
        }
        let _chosenProducts = this.state.chosenProducts;
        let mergedProd = [..._chosenProducts, data];
        console.log("merged products", mergedProd);
        this.setState({
            quantity: this.state.quantity + 1,
            chosenProducts: mergedProd
        });
        // this.addCartInfoOnBackendDatabase(data);
        this.setState({
            isDataLoaded: true,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.quantity !== this.state.quantity) {
            // this.addQuantityOnCartDatabase();
            this.props.getDataFromProductCard({
                quantity: this.state.quantity,
                chosenProducts: this.state.chosenProducts
            });
        } else {
            // console.log("component donot update", this.state.quantity);  
        }
    }


    createProductCards(){
        const data =this.state.productSampleData;
       return (
        data.map((d,index) =>
           <div className="products" key={index}>
                <img src={d.image} alt="prodImg"/>
                
                <p style={{listStyle:"none", fontSize:"1em", marginTop: "1em"}} onClick={()=>{this.productTitleClickHandler(d)}} to={`/ProductDetails/:${d.id}`} productid = {d.id} productdescription = {d.description}>{d.title}</p>

                <div className="priceAndDiscount">
                    <p>BDT. {d.price}</p>
                    <p>{d.category}</p>
                    {/* <span>{d.discount}%</span> */}
                </div>

                <div className="addTocart">
                    <Button onClick={() => { this.addToCartClickHandler(d.id, d.image, d.title, d.price);}} productname = {d.title} productprice = {d.price}>Add to cart</Button>
                </div>
            </div>
        ));
    }

    onChangeHandlerDefault() {
        // fetch data from the github url
        fetch('https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products')
        .then(response => response.json())
        .then((data) => {
            this.setState({productSampleData: data});
        });
    }


    render() {
        if(this.state.isDataLoaded){
            return (
                <>
                    <div className="productCardsCont">
                        {this.createProductCards()}
                    </div>
                </>
            )

        }else{

            return(
            <>
               Please wait..
               <CircularProgress/>
            </>

            )
        }
    }
}
