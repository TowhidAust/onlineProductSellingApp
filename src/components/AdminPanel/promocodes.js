import React, { Component } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import LeftDrawer from '../Left_Drawer'

export default class Promocodes extends Component {
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
                        <div><button className="promoAddButton">Add New Promo</button></div>
                        <div className="promoCard">
                        <div className="promofirstRow">
                            <div className="promoCode">promoABCD</div>
                            <div className="PromoButtons">
                                <button className="promoEditBtn">Edit</button>
                                <button className="activeStatusBtn">Active</button>
                            </div>
                        </div>
                        <hr />
                        <div className="promoSecondRow">
                            <div className="PromoButtons">Created At: 10:09am, 3/11/2020</div>
                            <div className="PromoButtons">Usage: 0</div>
                            <div className="PromoButtons">Discount Rate: 3%</div>
                            <div className="PromoButtons">Start Date: 4/11/2020</div>
                            <div className="PromoButtons">End Date: 11/11/2020</div>
                        </div>    
                    </div>
                    </div>
                        
                    
                </div>
            </>
        )
    }
}
