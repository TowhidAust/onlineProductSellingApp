import React, { Component } from 'react';
import AddToCartHome from '../AddToCartHome';
import './productDetails.css';
export default class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            isDataLoaded: false,
            productSampleData: [],
            productID: false,
        }
    }


    componentDidMount(){
        let splitLocationPath = this.props.location.pathname;
        let productID = splitLocationPath.split(':')[1];
        // fetch data from the github url
        fetch('https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products')
        .then(response => response.json())
        .then((data) => {
            this.setState({
                productSampleData: data,
                productID,
            });
        });
    }

    findProductAccordingToProductID() {
        const data = this.state.productSampleData;
        let prodID = this.state.productID;
       return (
        data.map((d) =>
            {
                if (d._id === prodID) {
                    return (
                        <div className="descriptionInner" key={d._id}>
                            <div className="descriptions">
                                <div className="imgNDetails">
                                    <div className="imgDiv">
                                        <img src={d.picture} alt="prodDesc" />
                                    </div>

                                    <div className="priceNDetails">
                                        <h3>{d.title}</h3>
                                        <h3>${d.price}</h3>
                                        <button>Add To Cart</button>
                                    </div>
                                </div>

                                <h3>Description</h3>
                                <hr/>
                                <div >{prodID}</div>
                                <div>{d.description}</div>
                            </div>

                            <div className="AddToCartDesc">
                                <AddToCartHome />
                            </div>
                        </div>
                    )
                } else{
                    return false;
                }
            }
        ))
    }

    render() {
        return (
            <div className="ProductDetailsCont">
                {this.findProductAccordingToProductID()}
            </div>
        )
    }
}
