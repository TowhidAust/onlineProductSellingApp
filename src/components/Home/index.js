import React, { Component } from 'react'
import "./home.css";
import ProductCard from "../ProductCard";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            productSampleData: [],
            cartCount: 0,
        }
    }
    
    componentDidMount(){
        let thisComponent = this;
        // fetch data from the github url
        fetch('https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products')
        .then(response => response.json())
        .then((data) => {
            thisComponent.setState({productSampleData: data});
        });
        
    }


    getDataFromProductCardComponent = (data)=> {
        // console.log("data from product card", data);
        this.setState({
            cartCount: data.quantity,
            chosenProducts: data
        })
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
                    <ProductCard getDataFromProductCard = {this.getDataFromProductCardComponent.bind(this)}/>
                </section> 
            </>
          
        )
    }
}
