import { Link } from 'react-router-dom';
import "./left_drawer.css";




import React, { Component } from 'react'

export default class LeftDrawer extends Component {
  render() {
    return (
    
      <div className="left_drawer_container">
            <div className="avatar_image_div">
              <div className="myImageAnchor">
              </div>
            </div>
        <ul className="left_drawer_ul">
       
          
            <li><Link to={"/"} >Promotion</Link></li>
            <li><Link to={"/"} >Promo Codes</Link></li>
            <li><Link to={"/"} >Add Promo Codes</Link></li>
            <li><Link  to={"/Orders"} >Orders</Link></li>
            <li><Link  to={"/AdminProducts"} >Products</Link></li>
          </ul>
         
          <div className="copyrightSection">&copy; Md. Towhidul Islam</div>
      </div>
    
    );
  }
}

