import React, { Component } from 'react';
import './addtoCartHome.css';
import {RiDeleteBack2Line} from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default class AddToCartHome extends Component {
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
                <div className="addToCartHome">
                    <h3 className="HomeCartHeading">Cart</h3>
                    <div>
                        <RiDeleteBack2Line color="#E74B4A" style = {{fontSize: "25px"}} />
                        Android Phone x007</div>
                  
                    <div> 1 * $1000</div>
                    <div>Subtotal: $1000</div>
                    <div className="homeCartButtonCont">
                        <button> 
                            <Link style={{color:"white", listStyle:"none", fontSize:"20px"}} to={"/CartPage/"}>View Cart</Link>
                        </button>
                        <button> <Link style={{color:"white", listStyle:"none", fontSize:"20px"}}>CheckOut</Link></button>
                    </div>
                </div>
            </>
        )
    }
}
