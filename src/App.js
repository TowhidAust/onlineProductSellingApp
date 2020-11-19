import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPage from './components/CartPage';


import React, { Component } from 'react'
import Admin from './components/AdminPanel';
import adminDetails from './components/AdminPanel/adminDetails';
import Products from './components/AdminPanel/products';
import AddNewProduct from './components/AdminPanel/addNewProd';
import Orders from './components/AdminPanel/orders';
import Promocodes from './components/AdminPanel/promocodes';
import AddPromoCodes from './components/AdminPanel/addPromo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoaded: false,
    }
  }

  componentDidMount() {
    
  }

  render() {
    
    return (
      <Router>
        <div className="MainAppContainer"> 
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/CartPage" exact component={CartPage}></Route>  
            <Route path="/Admin" exact component={Admin}></Route>  
            <Route path="/AdminDetails" exact component={adminDetails}></Route>  
            <Route path="/AdminProducts" exact component={Products}></Route>  
            <Route path="/AddNewProduct" exact component={AddNewProduct}></Route>  
            <Route path="/Orders" exact component={Orders}></Route>  
            <Route path="/Promocodes" exact component={Promocodes}></Route>  
            <Route path="/AddPromocodes" exact component={AddPromoCodes}></Route>  
          </Switch>
        </div>
          
      </Router>
     
    );
  }
}
