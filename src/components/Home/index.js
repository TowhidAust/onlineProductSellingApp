import React, { Component } from 'react'
import "./home.css";
import ProductCard from "../ProductCard";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            productSampleData: []
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
                        <div className="homeCart"> <i><AiOutlineShoppingCart/></i><span>Cart</span> <p className="cartCount">1</p> </div>
                        <span className="userIcon"><AiOutlineUser/></span>
                    </div>
                    <ProductCard/>
                </section> 
            </>
          
        )
    }
}
