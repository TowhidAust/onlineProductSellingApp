import React, { Component } from 'react';
import './productCard.css';
import SortingDropDown from '../SortingDropDown';
import AddToCartButton from '../AddToCartButton';
import AddToCartHome from '../AddToCartHome';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';


export default class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            productSampleData: [],
            buttonState: 'Add To Cart',
            count: 0,
             cartInfo: []
            
        }
    }
    
    componentDidMount(){
        let thisComponent = this;
        // fetch data from the github url
        fetch('https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products')
        .then(response => response.json())
        .then((data) => {
            thisComponent.setState({
                productSampleData: data,
                isDataLoaded: true,
            });
        });
        
    }

    homeCartStateChange(prodName, price) {
        // quantity = 0;
        let count_ = this.state.count;
        let cartInfo_ = this.state.cartInfo;

        let newData = {
            productName: prodName,
            count: count_+1,
            price: price,
        }
        cartInfo_.push(
            newData
        )
        
        this.setState({
            cartInfo: cartInfo_,
            isItemAdded: true
        })
    }

    createProductCards(){
        const data =this.state.productSampleData;
       return (
        data.map((d) =>
           <div className="products" key={d._id}>
                <img src="https://i1.adis.ws/i/canon/EOS-r5_Martin_Bissig_Lifestyle_hero-e90f9dd2-be19-11ea-b23c-8c04ba195b5f?w=100%&sm=aspect&aspect=16:9&qlt=80&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)" alt="prodImg"/>
                
                <p style={{listStyle:"none", fontSize:"1em", marginTop: "1em"}} onClick={()=>{this.productTitleClickHandler(d)}} to={`/ProductDetails/:${d._id}`} productid = {d._id} productdescription = {d.description}>{d.title}</p>

                <div className="priceAndDiscount">
                    <p>BDT. {d.price}</p>
                    <span>15%</span>
                </div>
            </div>
        ));

    }

    productTitleClickHandler(data){
        console.log("clicked product id", data._id);
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
