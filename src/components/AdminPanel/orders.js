import React, { Component } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
// import { Link } from 'react-router-dom'
import LeftDrawer from '../Left_Drawer'

export default class Orders extends Component {
    render() {
        return (
            <>
               <div className="admin_header">
                    <h3 className="logo">
                        <span>Test Logo</span>
                    </h3>
                    <span className="userIcon">
                            <AiOutlineUser />
                    </span>
                </div>
                <div className="adminProductsCard">
                    <div className="leftDrawer">
                        <LeftDrawer/>
                    </div>

                    <div className="rightPanel">
                        <div className="cardsContainer">
                            <div className="order_topCards">
                                <div className="card">
                                    all
                                </div>
                                <div className="card">
                                    Pending
                                </div>
                                <div className="card">
                                    Confirm
                                </div>
                                <div className="card">
                                    Cancelled
                                </div>
                            </div>
                        </div>

                        <div className="orders">
                                <div className="serialHeadings">
                                    <div className="serial">SL</div>
                                    <div className="price">Item Price</div>
                                    <div className="actionButtons">Action</div>
                                    <div className="status">status</div>
                                </div>
                            
                            <div className="orderCard">
                                <div className="serial">1</div>
                                <div className="price">1500</div>
                                <div className="actionButtons">
                                    <button className="btnConfirm">Confirm</button>
                                    <button className="btnCancel">Cancel</button>
                                </div>
                                <div className="status">Pending</div>
                            </div>

                            <div className="orderCard">
                                <div className="serial">1</div>
                                <div className="price">1500</div>
                                <div className="actionButtons">
                                    <button className="btnConfirm">Confirm</button>
                                    <button className="btnCancel">Cancel</button>
                                </div>
                                <div className="status">Pending</div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </>
        )
    }
}
