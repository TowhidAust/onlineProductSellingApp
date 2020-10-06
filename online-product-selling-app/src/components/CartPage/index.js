import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "./cartPage.css";
import {RiDeleteBack2Line} from 'react-icons/ri';
import CartTotals from '../cartTotals';
export default class CartPage extends Component {
    render() {
        return (
            <div className="cartPageContainer">
                <h3>This is cart page</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td ><RiDeleteBack2Line className="actionTable"  color="#E74B4A"/></td>
                            <td><img src="http://placehold.it/500x500" alt="prodImg" style={{width:"50px", height:"20px"}}/></td>
                            <td>Product Name</td>
                            <td>$1000</td>
                            <td> <input type="number" /></td>
                            <td>@2000</td>
                        </tr>
                        <tr>
                            <td ><RiDeleteBack2Line className="actionTable"  color="#E74B4A"/></td>
                            <td><img src="http://placehold.it/500x500" alt="prodImg" style={{width:"50px", height:"20px"}}/></td>
                            <td>Product Name</td>
                            <td>$1000</td>
                            <td> <input type="number" /></td>
                            <td>@2000</td>
                        </tr>
                    </tbody>
                </Table>
                
                <CartTotals/>

            </div>
        )
    }
}
