import React, { Component } from 'react'
import "./home.css";
import ProductCard from "../ProductCard";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import logo from '../../../src/img/logo.png'

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            productSampleData: [],
            cartCount: 0,
            search: null,
            searchSampleData: []
        }
    }
    
    componentDidMount(){
        // this.fetchProductFromBackendDatabase();
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


    getDataFromProductCardComponent = (data)=> {
        // console.log("data from product card", data);
        this.setState({
            cartCount: data.quantity,
            chosenProducts: data
        })
    }

    searchOnchangeHandler = (e) => {
        let keyword = e.target.value;
        this.setState({ search: keyword });

        const items = this.state.productSampleData.filter((data) => {
            if (this.state.search == null) {
                return data;
            }
            else if (data.title.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data;
            }

            return false;
        });

        this.setState({
            searchSampleData: items
        });

    }

 
    renderSearchProducts = () => {
        const data =this.state.searchSampleData;
        return (
         data.map((d,index) =>
            <div className="products" key={index}>
                 <img src={d.picture} alt="prodImg"/>
                 
                 <p style={{listStyle:"none", fontSize:"1em", marginTop: "1em"}} productid = {d._id} productdescription = {d.description}>{d.title}</p>
 
                 <div className="priceAndDiscount">
                     <p>BDT. {d.price}</p>
                     <span>{d.discount}%</span>
                 </div>
 
                 <div className="addTocart">
                     <Button productname = {d.title} productprice = {d.price}>Add to cart</Button>
                 </div>
             </div>
         ));
    }

    render() {

        if (this.state.search === null || this.state.search === '') {
            return (
           
                <>
                    <section className="productBanner">
                        <div className="headerSection">
                            <div className="homeLogo"><h3><img src={logo} style={{width: "8em", height:"3em"}}/></h3></div>
                            <div className="searchInput">
                                <i><AiOutlineSearch/></i>
                                <input onChange={(e)=>{this.searchOnchangeHandler(e)}} type="text" placeholder="Search"/>
                            </div>
                            <div className="homeCart">
                                <span>
                                    
                                    <Link style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }} to={{
    
                                        pathname: "/CartPage",
                                        data: this.state.chosenProducts,
                                    }} >
                                        <i><AiOutlineShoppingCart /></i>
                                        Cart
                                        <p className="cartCount">{ this.state.cartCount}</p>
                                        
                                    </Link>
                                </span>
                            </div>
                            <span className="userIcon"><AiOutlineUser/></span>
                        </div>
                        <ProductCard getDataFromProductCard={this.getDataFromProductCardComponent.bind(this)} searchkey={ this.state.search }/>
    
                        {/* {this.renderSearchProducts()} */}
                    </section> 
                </>
              
                )
        } else {
            return (
                <>
                <section className="productBanner">
                    <div className="headerSection">
                        <div className="homeLogo"><h3>Test Logo</h3></div>
                        <div className="searchInput">
                            <i><AiOutlineSearch/></i>
                            <input onChange={(e)=>{this.searchOnchangeHandler(e)}} type="text" placeholder="Search"/>
                        </div>
                        <div className="homeCart">
                            <span>
                                
                                <Link style={{ textDecoration: "none", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }} to={{

                                    pathname: "/CartPage",
                                    data: this.state.chosenProducts,
                                }} >
                                    <i><AiOutlineShoppingCart /></i>
                                    Cart
                                    <p className="cartCount">{ this.state.cartCount}</p>
                                    
                                </Link>
                            </span>
                        </div>
                        <span className="userIcon"><AiOutlineUser/></span>
                    </div>
                    {/* <ProductCard getDataFromProductCard={this.getDataFromProductCardComponent.bind(this)} searchkey={ this.state.search }/> */}

                    {this.renderSearchProducts()}
                </section> 
            </>
            )
        }
        
        

    }
}
