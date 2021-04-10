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
import Products from './components/AdminPanel/products';

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
            <Route path="/AdminProducts" exact component={Products}></Route>  
          </Switch>
        </div>
          
      </Router>
     
    );
  }
}
