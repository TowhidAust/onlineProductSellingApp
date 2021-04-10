import React, { Component } from 'react';
import './addtoCartHome.css';
import {RiDeleteBack2Line} from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default class AddToCartHome extends Component {
    constructor(props){
        super(props);
        
        this.state={
            isDataLoaded: false,
            isItemAdded: false,
            subTotal: 0
        }
    }
    componentDidMount(){
        if (this.props.isItemAdded) {
            this.setState({
                isItemAdded: true
            })
        }
        

    }


    calculateSubtotal(){
        let cartInfoArr = this.props.cartInfo;
        let subtotal = this.state.subTotal;
        for(let index in cartInfoArr){
            let dataJson = cartInfoArr[index];
            // console.log('price', dataJson['price']);
             subtotal = subtotal + dataJson['price'];

        }
        
        return subtotal;
    }
 
    cartInfoHandler(){
        let cartInfoArr = this.props.cartInfo;
        
        return (
            cartInfoArr.map((d, index) =>
               <div className="products" key={index}>
                    <div>
                        <RiDeleteBack2Line color="#E74B4A" style = {{fontSize: "25px"}} />
                        {d.productName}
                    </div>
                
                    <div> 1 * {d.price}</div>
                   
                </div>
            ))
    }

    // setCartInfoForAddToCartPage(){
    //     let cartInfo = this.props.cartInfo;
    // }
    
    render() {
            if (this.props.isItemAdded) {
            return (
                <>
                    <div className="addToCartHome">
                    <h3 className="HomeCartHeading">Cart</h3>
                       
                    {this.cartInfoHandler()}
                    <hr/>
                    <div>Subtotal: ${this.calculateSubtotal()}</div>
                    <div className="homeCartButtonCont">
                        <button > 
                            <Link style={{color:"white", listStyle:"none", fontSize:"20px"}} to={"/CartPage"}>View Cart</Link>
                        </button>
                        <button> <Link style={{color:"white", listStyle:"none", fontSize:"20px"}}to={"/"}>CheckOut</Link></button>
                    </div>
                    </div>
                </>
            )
        } else {
            
        return (
            <>
                <div className="addToCartHome">
                    <h3 className="HomeCartHeading">Cart</h3>
                    <div className="noItems">No items</div>
                </div>
            </>
        )
        }
    }
}
