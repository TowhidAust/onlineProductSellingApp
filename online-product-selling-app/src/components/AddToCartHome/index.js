import React, { Component } from 'react';
import './addtoCartHome.css';
import {RiDeleteBack2Line} from 'react-icons/ri';


export default class AddToCartHome extends Component {
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
                    <button>View Cart</button>
                    <button>Check Out</button>
                </div>
            </>
        )
    }
}
