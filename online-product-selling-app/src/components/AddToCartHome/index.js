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
        }
    }
    componentDidMount(){
        if (this.props.isItemAdded) {
            this.setState({
                isItemAdded: true
            })
        }
        

    }

   
    cartInfoHandler(){
        let cartInfoArr = this.props.cartInfo;
        return (
            cartInfoArr.map((d) =>
               <div className="products" key={d._id}>
                    <div>
                        <RiDeleteBack2Line color="#E74B4A" style = {{fontSize: "25px"}} />
                        prodName
                    </div>
                
                    <div> 1 * $1000</div>
                    <div>Subtotal: $1000</div>
                   
                </div>
            ))
       
    }
    
    render() {
            if (this.props.isItemAdded) {
               
                
            return (
                <>
                    <div className="addToCartHome">
                        <h3 className="HomeCartHeading">Cart</h3>
                        {/* <div>
                            <RiDeleteBack2Line color="#E74B4A" style = {{fontSize: "25px"}} />
                                prodName
                            </div>
                    
                        <div> 1 * $1000</div>
                        <div>Subtotal: $1000</div>
                        <div className="homeCartButtonCont">
                            <button> 
                                <Link style={{color:"white", listStyle:"none", fontSize:"20px"}} to={"/CartPage"}>View Cart</Link>
                            </button>
                            <button> <Link style={{color:"white", listStyle:"none", fontSize:"20px"}}to={"/"}>CheckOut</Link></button>
                        </div> */}

                       
                    {this.cartInfoHandler()}
                    <div className="homeCartButtonCont">
                        <button> 
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
