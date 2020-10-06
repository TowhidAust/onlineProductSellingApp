import React, { Component } from 'react';
import './addToCartButton.css';

export default class AddToCartButton extends Component {
    constructor(props){
        super(props);
        this.state={
            isDataLoaded: false
        }
    }
    componentDidMount(){

    }
    render() {
        return (
            <>
                <button onClick={()=>{}}>Add to cart Button</button>
            </>
        )
    }
}
