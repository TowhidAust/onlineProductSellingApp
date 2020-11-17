import React, { Component } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import LeftDrawer from '../Left_Drawer'

export default class AdminDetails extends Component {
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
                        
                    </div>
                        
                </div>
            </>
        
        )
    }
}
