import React, { Component } from 'react';
import './addToCartButton.css';

export default class AddToCartButton extends Component {
    constructor(props){
        super(props);
        this.state={
            isDataLoaded: false,
            buttonState: "Add To Cart"
        }

        // console.log(this.props.onclickPass);
    }
    componentDidMount(){

    }

    // addToCartButtonClickHandler() {
    //     this.setState({
    //         buttonState:"Added"
    //     })

    // }
    render() {
        return (
            <>
                <button onClick={this.props.onclickCartStateChange}>{this.state.buttonState}</button>
            </>
        )
    }
}
