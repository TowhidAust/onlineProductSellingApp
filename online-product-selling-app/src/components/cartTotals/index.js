import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import './cartTotal.css';
export default class CartTotals extends Component {
    render() {
        return (
            <div className="cartTotalsCont">
               <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Subtotal</th>
                            <th>Shipping</th>
                            <th>Total</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >asdf</td>
                            <td>Adress</td>
                            <td>$2000</td>
                        </tr>
                        
                        <tr>
                        <td >asdf</td>
                            <td>Adress</td>
                            <td>$2000</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
