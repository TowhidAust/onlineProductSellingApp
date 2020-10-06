import React, { Component } from 'react';
import './productCard.css';
import SortingDropDown from '../SortingDropDown';
import AddToCartButton from '../AddToCartButton';
import AddToCartHome from '../AddToCartHome';
import { Link } from 'react-router-dom';


export default class ProductCard extends Component {
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
            this.createProductCards();

        });
        
    }


    createProductCards(){
        const data =this.state.productSampleData;
       return (
        data.map((d) =>
           <div className="products" key={d._id}>
                <img src="http://placehold.it/500x500" alt="prodImg"/>
                {/* <h3 className="productTitle" onClick={()=>{this.productTitleClickHandler(d)}} >{d.title}</h3> */}
                <Link style={{color:"white", listStyle:"none", fontSize:"20px"}} onClick={()=>{this.productTitleClickHandler(d)}} to={`/ProductDetails/:${d._id}`} productid = {d._id} productdescription = {d.description}>{d.title}</Link>

                <div> ${d.price} </div>
                <div> {d.stock} products available </div>
                <AddToCartButton/>
            </div>
        ))

    }

    productTitleClickHandler(data){
        console.log("clicked product id", data._id);
    }


    render() {
        return (
            <>
                    <div className="Heading">
                        <h3>Shop</h3>
                       <SortingDropDown/>
                       <AddToCartHome/>

                    </div>
                    <div className="productCardsCont">
                        {this.createProductCards()}
                    </div>

            </>
        )
    }
}
