import React, { Component } from 'react'
import "./home.css";
import ProductCard from "../ProductCard";

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
           
               <section className="productBanner">
                    <ProductCard/>
                </section> 
          
        )
    }
}
