import React, { Component } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import LeftDrawer from '../Left_Drawer'

export default class AddPromoCodes extends Component {
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
                        <div className="addPromoCodesCont">

                            <div>
                                <div>Promo Code</div>
                                <input type="text" />
                            </div>

                            <div>
                                <div>Start Date</div>
                                <input type="text" />
                            </div>

                            <div>
                                <div>End Date</div>
                                <input type="text" />
                            </div>

                            <div>
                                <div>Discount Rate</div>
                                <input type="text" />
                            </div>

                            <div>
                                <div>Use Time</div>
                                <input type="text" />
                            </div>

                            <div className="PromoactiveInactiveState">
                                <span>Active</span>
                                <span>Inactive</span>
                            </div>
                            <button>Add Promo Codes</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
