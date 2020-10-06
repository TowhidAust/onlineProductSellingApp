import React, { Component } from 'react';
import './productDetails.css';

export default class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            isDataLoaded: false
        }
        console.log(this.props);
    }


    componentDidMount(){
        console.log('lashglashg');
        
    }

    render() {
        return (
            <div className="ProductDetailsCont">
                <img src="http://placehold.it/500x500"/>
            </div>
        )
    }
}
