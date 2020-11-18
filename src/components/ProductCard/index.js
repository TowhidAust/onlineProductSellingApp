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
            quantity: 0,
            chosenProducts: []
            
        }
    }
    
    componentDidMount() {
        
        this.fetchProductFromBackendDatabase();
        this.fetchCart();
        this.setState({
            isDataLoaded: true,
        });
        
    }


    // fetch products from backend
    fetchProductFromBackendDatabase = () => {
        // first fetch products from backend
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
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

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    // fetch cart from backend
    fetchCart = () => {
        // Fetch cart
        fetch('http://localhost:5000/cart')
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                let _quantity = data.quantity;

                if (_quantity) {
                    this.setState({
                        quantity: _quantity
                    });
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    addToCartClickHandler(productID, productPicture, productName, productPrice) {
        // console.log(productID, productPicture, productName, productPrice);

        let data = {
            "_id": productID,
            "title": productName,
            "picture": productPicture,
            "price": productPrice,
            "discount": "15%",
            "quantity": 1,
        }
        let _chosenProducts = this.state.chosenProducts;
        let mergedProd = [..._chosenProducts, data];
        this.setState({
            quantity: this.state.quantity + 1,
            chosenProducts: mergedProd
        });


        this.addCartInfoOnBackendDatabase(data);


        this.setState({
            isDataLoaded: true,
        });
    }


    addCartInfoOnBackendDatabase = (data) => {
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
            console.log('Success:', data);
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
                body: JSON.stringify({quantity:this.state.quantity}),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.quantity !== this.state.quantity) {
        
            this.addQuantityOnCartDatabase();

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
                <img src={d.picture} alt="prodImg"/>
                
                <p style={{listStyle:"none", fontSize:"1em", marginTop: "1em"}} onClick={()=>{this.productTitleClickHandler(d)}} to={`/ProductDetails/:${d._id}`} productid = {d._id} productdescription = {d.description}>{d.title}</p>

                <div className="priceAndDiscount">
                    <p>BDT. {d.price}</p>
                    <span>{d.discount}%</span>
                </div>

                <div className="addTocart">
                    <Button onClick={() => { this.addToCartClickHandler(d._id, d.picture, d.title, d.price);}} productname = {d.title} productprice = {d.price}>Add to cart</Button>
                </div>
            </div>
        ));
    }


    // sorting the array with price according to state
    onchangeHandlerSortLowToHigh() {
        let productSampleDataSort = this.state.productSampleData;
        productSampleDataSort.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        this.setState({
            productSampleData: productSampleDataSort
        })
    }

    onChangeHandlerHighToLow(){
        let productSampleDataSort = this.state.productSampleData;
        productSampleDataSort.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        this.setState({
            productSampleData: productSampleDataSort
        })
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
