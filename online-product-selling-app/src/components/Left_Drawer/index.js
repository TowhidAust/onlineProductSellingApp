import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./left_drawer.css";
import { FaBars } from 'react-icons/fa';
import logo from "../../towhid.png";



export default function LeftDrawer(props) {
  
  const [isActive, setstate] = useState({
    isActiveRoute: false,
    Home: false,
    About: false,
    Resume: false,
    Portfolio: false,
    Blog: false,
    Contact: false
  })

  useEffect(() => {
    
    let route = window.location.pathname;
    setstate({
      ...isActive,
      isActiveRoute: route,
      Home: false,
      About: false,
      Resume: false,
      Portfolio: false,
      Blog: false,
      Contact: false
    });
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function navigationClickHandler(state) {
    if (state === 'Home') {    
      setstate({
        ...isActive,
        isActiveRoute: false,
        Home: true,
        About: false,
        Resume: false,
        Portfolio: false,
        Blog: false,
        Contact: false,
      });
    } else if (state === 'About') {
      setstate({
        ...isActive,
        isActiveRoute: false,
        Home: false,
        About: true,
        Resume: false,
        Portfolio: false,
        Blog: false,
        Contact: false,
      });
    } else if(state === 'Resume'){
      setstate({
        ...isActive,
        isActiveRoute: false,
        Home: false,
        About: false,
        Resume: true,
        Portfolio: false,
        Blog: false,
        Contact: false,
      });
    } else if (state === 'Portfolio') {
      setstate({
        ...isActive,
        isActiveRoute: false,
        Home: false,
        About: false,
        Resume: false,
        Portfolio: true,
        Blog: false,
        Contact: false,
      });
    } else if (state === 'Blog') {
      setstate({
        ...isActive,
        isActiveRoute: false,
        Home: false,
        About: false,
        Resume: false,
        Portfolio: false,
        Blog: true,
        Contact: false,
      });
    } else if (state === 'Contact') {
      setstate({
        ...isActive,
        isActiveRoute: false,
        Home: false,
        About: false,
        Resume: false,
        Portfolio: false,
        Blog: false,
        Contact: true,
      });
    }
  }

// Now set the active state according to route and onload
  function activeStateHandler(state_) {
    if (state_ === 'Home') {
      if (isActive.Home || isActive.isActiveRoute === "/") {
        return 'active';
      }
    } else if (state_ === 'About') {
      if (isActive.About || isActive.isActiveRoute === "/About") {
        return 'active';
      }
    }
    else if (state_ === 'Resume') {
      if(isActive.Resume || isActive.isActiveRoute === "/Resume") {
        return 'active';
      }
    } else if (state_ === 'Portfolio') {
      if(isActive.Portfolio || isActive.isActiveRoute === "/Portfolio") {
        return 'active';
      }
    } else if (state_ === 'Blog') {
      if(isActive.Blog || isActive.isActiveRoute === "/Blog") {
        return 'active';
      }
    } else if (state_ === 'Contact') {
      if(isActive.Contact || isActive.isActiveRoute === "/Contact") {
        return 'active';
      }
     }
  }

  return (
    
    <div className="left_drawer_container">
      <div className="collapseIcon">
          <div><FaBars/></div>
      </div>
          <div className="avatar_image_div">
            <div className="myImageAnchor">
              <img src = {logo} alt="MyImage" className="myImage"  />
            </div>
          </div>
        <ul className="left_drawer_ul">
            <li><Link  className={`${activeStateHandler('Home')}`} onClick={()=>{navigationClickHandler('Home')}} to={"/"} >Home</Link></li>
            <li><Link className={`${activeStateHandler('About')}`} onClick={()=>{navigationClickHandler('About')}} to={"/About"}>About</Link></li>
            <li><Link className={`${activeStateHandler('Resume')}`} onClick={()=>{navigationClickHandler('Resume')}} to={"/Resume"}>Resume</Link></li>
            <li><Link className={`${activeStateHandler('Portfolio')}`} onClick={()=>{navigationClickHandler('Portfolio')}}  to={"/Portfolio"}>Portfolio</Link></li>
            <li><Link className={`${activeStateHandler('Blog')}`} onClick={()=>{navigationClickHandler('Blog')}} to={"/Blog"}>Blog</Link></li>
            <li><Link className={`${activeStateHandler('Contact')}`} onClick={()=>{navigationClickHandler('Contact')}} to={"/Contact"}>Contact</Link></li>
        </ul>
       
        <div className="copyrightSection">&copy; Md. Towhidul Islam</div>
    </div>
  
  );
}